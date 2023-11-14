


package be.tarsos.dsp;

import java.io.IOException;
import java.util.List;
import java.util.concurrent.CopyOnWriteArrayList;
import java.util.logging.Level;
import java.util.logging.Logger;

import be.tarsos.dsp.io.TarsosDSPAudioFloatConverter;
import be.tarsos.dsp.io.TarsosDSPAudioFormat;
import be.tarsos.dsp.io.TarsosDSPAudioInputStream;



public class AudioDispatcher  {



	private static final Logger LOG = Logger.getLogger(AudioDispatcher.class.getName());


	private final TarsosDSPAudioInputStream audioInputStream;


	private float[] audioFloatBuffer;


	private byte[] audioByteBuffer;


	private final List<AudioProcessor> audioProcessors;


	private final TarsosDSPAudioFloatConverter converter;
	
	private final TarsosDSPAudioFormat format;


	private int floatOverlap, floatStepSize;


	private int byteOverlap, byteStepSize;
	
	

	private long bytesToSkip;
	

	private long bytesProcessed;
	
	

	private AudioEvent audioEvent;
	

	private boolean stopped;
	

	private boolean zeroPadFirstBuffer;
	

	private boolean zeroPadLastBuffer;


	public AudioDispatcher(final TarsosDSPAudioInputStream stream, final int audioBufferSize, final int bufferOverlap){

		audioProcessors = new CopyOnWriteArrayList<AudioProcessor>();
		audioInputStream = stream;

		format = audioInputStream.getFormat();
		
			
		setStepSizeAndOverlap(audioBufferSize, bufferOverlap);
		
		audioEvent = new AudioEvent(format);
		audioEvent.setFloatBuffer(audioFloatBuffer);
		audioEvent.setOverlap(bufferOverlap);
		
		converter = TarsosDSPAudioFloatConverter.getConverter(format);
		
		stopped = false;
		
		bytesToSkip = 0;
		
		zeroPadLastBuffer = true;
	}	
	

	public void skip(double seconds){
		bytesToSkip = Math.round(seconds * format.getSampleRate()) * format.getFrameSize(); 
	}
	

	public void setStepSizeAndOverlap(final int audioBufferSize, final int bufferOverlap){
		audioFloatBuffer = new float[audioBufferSize];
		floatOverlap = bufferOverlap;
		floatStepSize = audioFloatBuffer.length - floatOverlap;

		audioByteBuffer = new byte[audioFloatBuffer.length * format.getFrameSize()];
		System.out.println(format.getFrameSize()+"!!!!!!!!!!!!!!!!!");
		byteOverlap = floatOverlap * format.getFrameSize();
		byteStepSize = floatStepSize * format.getFrameSize();
	}
	

	public void setZeroPadFirstBuffer(boolean zeroPadFirstBuffer){
		this.zeroPadFirstBuffer = zeroPadFirstBuffer;		
	}
	

	public void setZeroPadLastBuffer(boolean zeroPadLastBuffer) {
		this.zeroPadLastBuffer = zeroPadLastBuffer;
	}
	

	public void addAudioProcessor(final AudioProcessor audioProcessor) {
		audioProcessors.add(audioProcessor);
		LOG.fine("Added an audioprocessor to the list of processors: " + audioProcessor.toString());
	}
	

	public void removeAudioProcessor(final AudioProcessor audioProcessor) {
		audioProcessors.remove(audioProcessor);
		audioProcessor.processingFinished();
		LOG.fine("Remove an audioprocessor to the list of processors: " + audioProcessor.toString());
	}

	public void run() {
		
		int bytesRead = 0;
		
		if(bytesToSkip!=0){
			skipToStart();
		}
	

		try {

			audioEvent.setBytesProcessed(bytesProcessed);
			bytesRead = readNextAudioBlock();
		} catch (IOException e) {
			String message="Error while reading audio input stream: " + e.getMessage();	
			LOG.warning(message);
			throw new Error(message);
		}


		while (bytesRead != 0 && !stopped) {
			

			for (final AudioProcessor processor : audioProcessors) {
				if(!processor.process(audioEvent)){

					break;
				}	
			}
			
			if(!stopped){			

				bytesProcessed += bytesRead;
				audioEvent.setBytesProcessed(bytesProcessed);
					

				try {
					bytesRead = readNextAudioBlock();
					audioEvent.setOverlap(floatOverlap);
				} catch (IOException e) {
					String message="Error while reading audio input stream: " + e.getMessage();	
					LOG.warning(message);
					throw new Error(message);
				}
			}
		}


		if(!stopped){
			stop();
		}
	}
	
	
	private void skipToStart() {
		long skipped = 0l;
		try{
			skipped = audioInputStream.skip(bytesToSkip);
			if(skipped !=bytesToSkip){
				throw new IOException();
			}
			bytesProcessed += bytesToSkip;
		}catch(IOException e){
			String message=String.format("Did not skip the expected amount of bytes,  %d skipped, %d expected!", skipped,bytesToSkip);	
			LOG.warning(message);
			throw new Error(message);
		}
	}


	public void stop() {
		stopped = true;
		for (final AudioProcessor processor : audioProcessors) {
			processor.processingFinished();
		}
		try {
			audioInputStream.close();
		} catch (IOException e) {
			LOG.log(Level.SEVERE, "Closing audio stream error.", e);
		}
	}


	private int readNextAudioBlock() throws IOException {
		assert floatOverlap < audioFloatBuffer.length;
		

		boolean isFirstBuffer = (bytesProcessed ==0 || bytesProcessed == bytesToSkip);
		
		final int offsetInBytes;
		
		final int offsetInSamples;
		
		final int bytesToRead;

		if(isFirstBuffer && !zeroPadFirstBuffer){

			bytesToRead =  audioByteBuffer.length;

			offsetInBytes = 0;
			offsetInSamples=0;
		}else{

			bytesToRead = byteStepSize;
			offsetInBytes = byteOverlap;
			offsetInSamples = floatOverlap;
		}
		

		if(!isFirstBuffer && audioFloatBuffer.length == floatOverlap + floatStepSize ){
			System.arraycopy(audioFloatBuffer,floatStepSize, audioFloatBuffer,0 ,floatOverlap);

		}
		

		int totalBytesRead = 0;
		

		int bytesRead=0;
		

		boolean endOfStream = false;
				

		while(!stopped && !endOfStream && totalBytesRead<bytesToRead){
			try{
				bytesRead = audioInputStream.read(audioByteBuffer, offsetInBytes + totalBytesRead , bytesToRead - totalBytesRead);
			}catch(IndexOutOfBoundsException e){

				bytesRead = -1;
			}
			if(bytesRead == -1){

				endOfStream = true;
			}else{

				totalBytesRead += bytesRead;
			}
		}
		
		if(endOfStream){

			if(zeroPadLastBuffer){

				for(int i = offsetInBytes + totalBytesRead; i < audioByteBuffer.length; i++){
					audioByteBuffer[i] = 0;
				}
				converter.toFloatArray(audioByteBuffer, offsetInBytes, audioFloatBuffer, offsetInSamples, floatStepSize);
			}else{

				byte[] audioByteBufferContent = audioByteBuffer;
				audioByteBuffer = new byte[offsetInBytes + totalBytesRead];
				for(int i = 0 ; i < audioByteBuffer.length ; i++){
					audioByteBuffer[i] = audioByteBufferContent[i];
				}
				int totalSamplesRead = totalBytesRead/format.getFrameSize();
				audioFloatBuffer = new float[offsetInSamples + totalBytesRead/format.getFrameSize()];
				converter.toFloatArray(audioByteBuffer, offsetInBytes, audioFloatBuffer, offsetInSamples, totalSamplesRead);
				
				
			}			
		}else if(bytesToRead == totalBytesRead) {

			if(isFirstBuffer && !zeroPadFirstBuffer){
				converter.toFloatArray(audioByteBuffer, 0, audioFloatBuffer, 0, audioFloatBuffer.length);
			}else{
				converter.toFloatArray(audioByteBuffer, offsetInBytes, audioFloatBuffer, offsetInSamples, floatStepSize);
			}
		} else if(!stopped) {

			throw new IOException(String.format("The end of the audio stream has not been reached and the number of bytes read (%d) is not equal "
					+ "to the expected amount of bytes(%d).", totalBytesRead,bytesToRead));
		}
		
		

		audioEvent.setFloatBuffer(audioFloatBuffer);
		audioEvent.setOverlap(offsetInSamples);
		
		return totalBytesRead; 
	}
	
	public TarsosDSPAudioFormat getFormat(){
		return format;
	}
	

	public float secondsProcessed(){
		return bytesProcessed / (format.getSampleSizeInBits() / 8) / format.getSampleRate() / format.getChannels() ;
	}

	public void setAudioFloatBuffer(float[] audioBuffer){
		audioFloatBuffer = audioBuffer;
	}

	public boolean isStopped(){
		return stopped;
	}
	
}
