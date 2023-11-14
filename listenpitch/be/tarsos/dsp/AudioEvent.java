


package be.tarsos.dsp;

import java.util.Arrays;

import be.tarsos.dsp.io.TarsosDSPAudioFloatConverter;
import be.tarsos.dsp.io.TarsosDSPAudioFormat;


public class AudioEvent {

	private final TarsosDSPAudioFormat format;
	
	private final TarsosDSPAudioFloatConverter converter;

	private float[] floatBuffer;
	

	private byte[] byteBuffer;
	

	private int overlap;
	

	private long frameLength;
	

	private long bytesProcessed;

	private int bytesProcessing;
	
	
	public AudioEvent(TarsosDSPAudioFormat format){
		this.format = format;
		this.converter = TarsosDSPAudioFloatConverter.getConverter(format);
		this.overlap = 0;
	}
	
	public float getSampleRate(){
		return format.getSampleRate();
	}
	
	public int getBufferSize(){
		return getFloatBuffer().length;
	}
	

	public long getFrameLength(){
		return frameLength;
	}
	
	public int getOverlap(){
		return overlap;
	}
	
	public void setOverlap(int newOverlap){
		overlap = newOverlap;
	}
	
	public void setBytesProcessed(long bytesProcessed){
		this.bytesProcessed = bytesProcessed;		
	}
	

	public double getTimeStamp(){
		return bytesProcessed / format.getFrameSize() / format.getSampleRate();
	}
	
	public double getEndTimeStamp(){
		return(bytesProcessed + bytesProcessing) / format.getFrameSize() / format.getSampleRate();
	}
	
	public long getSamplesProcessed(){
		return bytesProcessed / format.getFrameSize();
	}


	public double getProgress(){
		return bytesProcessed / format.getFrameSize() / (double) frameLength;
	}
	

	public byte[] getByteBuffer(){
		int length = getFloatBuffer().length * format.getFrameSize();
		if(byteBuffer == null || byteBuffer.length != length){
			byteBuffer = new byte[length];
		}
		converter.toByteArray(getFloatBuffer(), byteBuffer);
		return byteBuffer;
	}
	
	public void setFloatBuffer(float[] floatBuffer) {
		this.floatBuffer = floatBuffer;
	}
	
	public float[] getFloatBuffer(){
		return floatBuffer;
	}
	

	public double getRMS() {
		return calculateRMS(floatBuffer);
	}
	
	

	public double getdBSPL() {
		return soundPressureLevel(floatBuffer);
	}
	

	public static double calculateRMS(float[] floatBuffer){
		double rms = 0.0;
		for (int i = 0; i < floatBuffer.length; i++) {
			rms += floatBuffer[i] * floatBuffer[i];
		}
		rms = rms / Double.valueOf(floatBuffer.length);
		rms = Math.sqrt(rms);
		return rms;
	}

	public void clearFloatBuffer() {
		Arrays.fill(floatBuffer, 0);
	}


	private double soundPressureLevel(final float[] buffer) {
		double value = Math.pow(localEnergy(buffer), 0.5);
		value = value / buffer.length;
		return linearToDecibel(value);
	}
	

	private double localEnergy(final float[] buffer) {
		double power = 0.0D;
		for (float element : buffer) {
			power += element * element;
		}
		return power;
	}
	

	private double linearToDecibel(final double value) {
		return 20.0 * Math.log10(value);
	}

	public boolean isSilence(double silenceThreshold) {
		return soundPressureLevel(floatBuffer) < silenceThreshold;
	}

	public void setBytesProcessing(int bytesProcessing) {
		this.bytesProcessing = bytesProcessing;
		
	}
	
}
