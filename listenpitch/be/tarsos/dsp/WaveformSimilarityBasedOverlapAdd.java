

package be.tarsos.dsp;

public class WaveformSimilarityBasedOverlapAdd implements AudioProcessor {	
	private int seekWindowLength;
	private int seekLength;
	private int overlapLength;
	
	private float[] pMidBuffer;	
	private float[] pRefMidBuffer;
	private float[] outputFloatBuffer;
	
	private int intskip;
	private int sampleReq; 
	
	private double tempo;
	
	private AudioDispatcher dispatcher;

	private Parameters newParameters;
	

	public WaveformSimilarityBasedOverlapAdd(Parameters  params){
		setParameters(params);
		applyNewParameters();
	}
	
	public void setParameters(Parameters params){
		newParameters = params;
	}
	
	public void setDispatcher(AudioDispatcher newDispatcher){
		this.dispatcher = newDispatcher;
	}
	
	private void applyNewParameters(){
		Parameters params = newParameters;
		int oldOverlapLength = overlapLength;
		overlapLength = (int) ((params.getSampleRate() * params.getOverlapMs())/1000);
		seekWindowLength = (int) ((params.getSampleRate() * params.getSequenceMs())/1000);
		seekLength = (int) ((params.getSampleRate() *  params.getSeekWindowMs())/1000);
		
		tempo = params.getTempo();
		
		//pMidBuffer and pRefBuffer are initialized with 8 times the needed length to prevent a reset
		//of the arrays when overlapLength changes.
		
		if(overlapLength > oldOverlapLength * 8 && pMidBuffer==null){
			pMidBuffer = new float[overlapLength * 8]; //overlapLengthx2?
			pRefMidBuffer = new float[overlapLength * 8];//overlapLengthx2?
			System.out.println("New overlapLength" + overlapLength);
		}
		
		double nominalSkip = tempo * (seekWindowLength - overlapLength);
		intskip = (int) (nominalSkip + 0.5);
		
		sampleReq = Math.max(intskip + overlapLength, seekWindowLength) + seekLength;
		
		float[] prevOutputBuffer = outputFloatBuffer;
		outputFloatBuffer = new float[getOutputBufferSize()];
		if(prevOutputBuffer!=null){
			System.out.println("Copy outputFloatBuffer contents");
			for(int i = 0 ; i < prevOutputBuffer.length && i < outputFloatBuffer.length ; i++){
			 outputFloatBuffer[i] = prevOutputBuffer[i];
			}
		}
		
		newParameters = null;
	}
	
	public int getInputBufferSize(){
		return sampleReq;
	}
	
	private int getOutputBufferSize(){
		return seekWindowLength - overlapLength;
	}
	
	public int getOverlap(){
		return sampleReq-intskip;
	}
	
	

	private void overlap(final float[] output, int outputOffset, float[] input,int inputOffset){
		for(int i = 0 ; i < overlapLength ; i++){
			int itemp = overlapLength - i;
			output[i + outputOffset] = (input[i + inputOffset] * i + pMidBuffer[i] * itemp ) / overlapLength;  
		}
	}
	

	private int seekBestOverlapPosition(float[] inputBuffer, int postion) {
		int bestOffset;
		double bestCorrelation, currentCorrelation;
		int tempOffset;

		int comparePosition;

		// Slopes the amplitude of the 'midBuffer' samples
		precalcCorrReferenceMono();

		bestCorrelation = -10;
		bestOffset = 0;

		// Scans for the best correlation value by testing each possible
		// position
		// over the permitted range.
		for (tempOffset = 0; tempOffset < seekLength; tempOffset++) {

			comparePosition = postion + tempOffset;

			// Calculates correlation value for the mixing position
			// corresponding
			// to 'tempOffset'
			currentCorrelation = (double) calcCrossCorr(pRefMidBuffer, inputBuffer,comparePosition);
			// heuristic rule to slightly favor values close to mid of the
			// range
			double tmp = (double) (2 * tempOffset - seekLength) / seekLength;
			currentCorrelation = ((currentCorrelation + 0.1) * (1.0 - 0.25 * tmp * tmp));

			// Checks for the highest correlation value
			if (currentCorrelation > bestCorrelation) {
				bestCorrelation = currentCorrelation;
				bestOffset = tempOffset;
			}
		}

		return bestOffset;

	}
	

	void precalcCorrReferenceMono()
	{
	    for (int i = 0; i < overlapLength; i++){
	    	float temp = i * (overlapLength - i);
	        pRefMidBuffer[i] = pMidBuffer[i] * temp;
	    }
	}	

	
	double calcCrossCorr(float[] mixingPos, float[] compare, int offset){
		double corr = 0;
	    double norm = 0;
	    for (int i = 1; i < overlapLength; i ++){
	        corr += mixingPos[i] * compare[i + offset];
	        norm += mixingPos[i] * mixingPos[i];
	    }
	    // To avoid division by zero.
	    if (norm < 1e-8){
	    	norm = 1.0;    
	    }
	    return corr / Math.pow(norm,0.5);
	}
	
	
	@Override
	public boolean process(AudioEvent audioEvent) {
		float[] audioFloatBuffer = audioEvent.getFloatBuffer();
		assert audioFloatBuffer.length == getInputBufferSize();
		
		//Search for the best overlapping position.
		int offset =  seekBestOverlapPosition(audioFloatBuffer,0);
		
		// Mix the samples in the 'inputBuffer' at position of 'offset' with the 
        // samples in 'midBuffer' using sliding overlapping
        // ... first partially overlap with the end of the previous sequence
        // (that's in 'midBuffer')
		overlap(outputFloatBuffer,0,audioFloatBuffer,offset);
			
		//copy sequence samples from input to output			
		int sequenceLength = seekWindowLength - 2 * overlapLength;
		System.arraycopy(audioFloatBuffer, offset + overlapLength, outputFloatBuffer, overlapLength, sequenceLength);
		
	     // Copies the end of the current sequence from 'inputBuffer' to 
        // 'midBuffer' for being mixed with the beginning of the next 
        // processing sequence and so on
		System.arraycopy(audioFloatBuffer, offset + sequenceLength + overlapLength, pMidBuffer, 0, overlapLength);
		
		assert outputFloatBuffer.length == getOutputBufferSize();
		
		audioEvent.setFloatBuffer(outputFloatBuffer);
		audioEvent.setOverlap(0);
		
		if(newParameters!=null){
			applyNewParameters();
			dispatcher.setStepSizeAndOverlap(getInputBufferSize(),getOverlap());
		}
		
		return true;
	}

	@Override
	public void processingFinished() {
		// NOOP
	}


	

	public static class Parameters {
		private final int sequenceMs;
		private final int seekWindowMs;
		private final int overlapMs;
		
		private final double tempo;
		private final double sampleRate;

		public Parameters(double tempo, double sampleRate, int newSequenceMs, int newSeekWindowMs, int newOverlapMs) {
			this.tempo = tempo;
			this.sampleRate = sampleRate;
			this.overlapMs = newOverlapMs;
			this.seekWindowMs = newSeekWindowMs;
			this.sequenceMs = newSequenceMs;
		}


		public double getOverlapMs() {
			return overlapMs;
		}

		public double getSequenceMs() {
			return sequenceMs;
		}

		public double getSeekWindowMs() {
			return seekWindowMs;
		}
		
		public double getSampleRate() {
			return sampleRate;
		}
		
		public double getTempo(){
			return tempo;
		}
	}
}
