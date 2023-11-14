

package be.tarsos.dsp.pitch;


public interface PitchDetector {

	PitchDetectionResult getPitch(final float[] audioBuffer);
}
