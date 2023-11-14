


package be.tarsos.dsp.pitch;

import be.tarsos.dsp.AudioEvent;
import be.tarsos.dsp.AudioProcessor;


public class Goertzel implements AudioProcessor {


	private static final double POWER_THRESHOLD = 35;// in dB


	private final double[] frequenciesToDetect;

	private final double[] precalculatedCosines;

	private final double[] precalculatedWnk;

	private final double[] calculatedPowers;

	private final FrequenciesDetectedHandler handler;

	public Goertzel(final float audioSampleRate, final int bufferSize,
			double[] frequencies, FrequenciesDetectedHandler handler) {

		frequenciesToDetect = frequencies;
		precalculatedCosines = new double[frequencies.length];
		precalculatedWnk = new double[frequencies.length];
		this.handler = handler;

		calculatedPowers = new double[frequencies.length];

		for (int i = 0; i < frequenciesToDetect.length; i++) {
			precalculatedCosines[i] = 2 * Math.cos(2 * Math.PI
					* frequenciesToDetect[i] / audioSampleRate);
			precalculatedWnk[i] = Math.exp(-2 * Math.PI
					* frequenciesToDetect[i] / audioSampleRate);
		}
	}


	public static interface FrequenciesDetectedHandler {

		void handleDetectedFrequencies(final double timestamp,final double[] frequencies,
				final double[] powers, final double[] allFrequencies,
				final double allPowers[]);
	}

	@Override
	public boolean process(AudioEvent audioEvent) {
		float[] audioFloatBuffer = audioEvent.getFloatBuffer();
		double skn0, skn1, skn2;
		int numberOfDetectedFrequencies = 0;
		for (int j = 0; j < frequenciesToDetect.length; j++) {
			skn0 = skn1 = skn2 = 0;
			for (int i = 0; i < audioFloatBuffer.length; i++) {
				skn2 = skn1;
				skn1 = skn0;
				skn0 = precalculatedCosines[j] * skn1 - skn2
						+ audioFloatBuffer[i];
			}
			double wnk = precalculatedWnk[j];
			calculatedPowers[j] = 20 * Math.log10(Math.abs(skn0 - wnk * skn1));
			if (calculatedPowers[j] > POWER_THRESHOLD) {
				numberOfDetectedFrequencies++;
			}
		}

		if (numberOfDetectedFrequencies > 0) {
			double[] frequencies = new double[numberOfDetectedFrequencies];
			double[] powers = new double[numberOfDetectedFrequencies];
			int index = 0;
			for (int j = 0; j < frequenciesToDetect.length; j++) {
				if (calculatedPowers[j] > POWER_THRESHOLD) {
					frequencies[index] = frequenciesToDetect[j];
					powers[index] = calculatedPowers[j];
					index++;
				}
			}
			handler.handleDetectedFrequencies(audioEvent.getTimeStamp(),frequencies, powers,
					frequenciesToDetect.clone(), calculatedPowers.clone());
		}

		return true;
	}



	@Override
	public void processingFinished() {
	}

}
