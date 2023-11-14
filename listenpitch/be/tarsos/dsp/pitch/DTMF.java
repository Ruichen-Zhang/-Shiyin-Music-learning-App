
package be.tarsos.dsp.pitch;

public class DTMF {

	public static final double[] DTMF_FREQUENCIES = { 697, 770, 852, 941, 1209,
			1336, 1477, 1633 };


	public static final char[][] DTMF_CHARACTERS = { { '1', '2', '3', 'A' },
			{ '4', '5', '6', 'B' }, { '7', '8', '9', 'C' },
			{ '*', '0', '#', 'D' } };


	public static float[] generateDTMFTone(char character){
		double firstFrequency = -1;
		double secondFrequency = -1;
		for(int row = 0 ; row < DTMF_CHARACTERS.length ; row++){
			for(int col = 0 ; col < DTMF_CHARACTERS[row].length ; col++){
				if(DTMF_CHARACTERS[row][col] == character){
					firstFrequency = DTMF_FREQUENCIES[row];
					secondFrequency = DTMF_FREQUENCIES[col + 4];
				}
			}
		}
		return DTMF.audioBufferDTMF(firstFrequency,secondFrequency,512*2*10);
	}

	public static boolean isDTMFCharacter(char character){
		double firstFrequency = -1;
		double secondFrequency = -1;
		for(int row = 0 ; row < DTMF_CHARACTERS.length ; row++){
			for(int col = 0 ; col < DTMF_CHARACTERS[row].length ; col++){
				if(DTMF_CHARACTERS[row][col] == character){
					firstFrequency = DTMF_FREQUENCIES[row];
					secondFrequency = DTMF_FREQUENCIES[col + 4];
				}
			}
		}
		return (firstFrequency!=-1 && secondFrequency!=-1);
	}

	public static float[] audioBufferDTMF(final double f0, final double f1,
			int size) {
		final double sampleRate = 44100.0;
		final double amplitudeF0 = 0.4;
		final double amplitudeF1 = 0.4;
		final double twoPiF0 = 2 * Math.PI * f0;
		final double twoPiF1 = 2 * Math.PI * f1;
		final float[] buffer = new float[size];
		for (int sample = 0; sample < buffer.length; sample++) {
			final double time = sample / sampleRate;
			double f0Component = amplitudeF0 * Math.sin(twoPiF0 * time);
		    double f1Component = amplitudeF1 * Math.sin(twoPiF1 * time);
		    buffer[sample] = (float) (f0Component + f1Component);
		}
		return buffer;
	}
}
