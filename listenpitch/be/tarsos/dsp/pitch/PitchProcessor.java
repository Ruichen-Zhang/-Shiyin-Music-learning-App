
package be.tarsos.dsp.pitch;

import be.tarsos.dsp.AudioEvent;
import be.tarsos.dsp.AudioProcessor;



public class PitchProcessor implements AudioProcessor {


	public enum PitchEstimationAlgorithm {

		YIN,

		MPM,

		FFT_YIN,

		DYNAMIC_WAVELET,

		FFT_PITCH,

		AMDF;

		public PitchDetector getDetector(float sampleRate,int bufferSize){
			PitchDetector detector;
			if (this == MPM ) {
				detector = new McLeodPitchMethod(sampleRate, bufferSize);
			} else if(this == DYNAMIC_WAVELET ) {
				detector = new DynamicWavelet(sampleRate,bufferSize);
			} else if(this == FFT_YIN){
				detector = new FastYin(sampleRate, bufferSize);
			} else if(this==AMDF){
				detector = new AMDF(sampleRate, bufferSize);
			} else if (this == FFT_PITCH){
				detector = new FFTPitch(Math.round(sampleRate),bufferSize);
			} else {
				detector = new Yin(sampleRate, bufferSize);
			}
			return detector;
		}

	};


	private final PitchDetector detector;

	private final PitchDetectionHandler handler;


	public PitchProcessor(PitchEstimationAlgorithm algorithm, float sampleRate,
						  int bufferSize,
						  PitchDetectionHandler handler) {
		detector = algorithm.getDetector(sampleRate, bufferSize);
		this.handler = handler;
	}

	@Override
	public boolean process(AudioEvent audioEvent) {
		float[] audioFloatBuffer = audioEvent.getFloatBuffer();

		PitchDetectionResult result = detector.getPitch(audioFloatBuffer);


		handler.handlePitch(result,audioEvent);
		return true;
	}

	@Override
	public void processingFinished() {
	}


}
