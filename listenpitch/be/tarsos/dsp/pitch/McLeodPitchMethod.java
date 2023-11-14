
package be.tarsos.dsp.pitch;

import java.util.ArrayList;
import java.util.List;

public final class McLeodPitchMethod implements PitchDetector {

	public static final int DEFAULT_BUFFER_SIZE = 1024;


	public static final int DEFAULT_OVERLAP = 768;


	private static final double DEFAULT_CUTOFF = 0.97;

	private static final double SMALL_CUTOFF = 0.5;


	private static final double LOWER_PITCH_CUTOFF = 80.0; // Hz


	private final double cutoff;


	private final float sampleRate;


	private final float[] nsdf;


	private float turningPointX, turningPointY;


	private final List<Integer> maxPositions = new ArrayList<Integer>();


	private final List<Float> periodEstimates = new ArrayList<Float>();


	private final List<Float> ampEstimates = new ArrayList<Float>();


	private final PitchDetectionResult result;


	public McLeodPitchMethod(final float audioSampleRate) {
		this(audioSampleRate, DEFAULT_BUFFER_SIZE, DEFAULT_CUTOFF);
	}


	public McLeodPitchMethod(final float audioSampleRate, final int audioBufferSize) {
		this(audioSampleRate, audioBufferSize, DEFAULT_CUTOFF);
	}


	public McLeodPitchMethod(final float audioSampleRate, final int audioBufferSize, final double cutoffMPM) {
		this.sampleRate = audioSampleRate;
		nsdf = new float[audioBufferSize];
		this.cutoff = cutoffMPM;
		result = new PitchDetectionResult();
	}


	private void normalizedSquareDifference(final float[] audioBuffer) {
		for (int tau = 0; tau < audioBuffer.length; tau++) {
			float acf = 0;
			float divisorM = 0;
			for (int i = 0; i < audioBuffer.length - tau; i++) {
				acf += audioBuffer[i] * audioBuffer[i + tau];
				divisorM += audioBuffer[i] * audioBuffer[i] + audioBuffer[i + tau] * audioBuffer[i + tau];
			}
			nsdf[tau] = 2 * acf / divisorM;
		}
	}


	public PitchDetectionResult getPitch(final float[] audioBuffer) {
		final float pitch;

		// 0. Clear previous results (Is this faster than initializing a list
		// again and again?)
		maxPositions.clear();
		periodEstimates.clear();
		ampEstimates.clear();

		// 1. Calculate the normalized square difference for each Tau value.
		normalizedSquareDifference(audioBuffer);
		// 2. Peak picking time: time to pick some peaks.
		peakPicking();

		double highestAmplitude = Double.NEGATIVE_INFINITY;

		for (final Integer tau : maxPositions) {
			// make sure every annotation has a probability attached
			highestAmplitude = Math.max(highestAmplitude, nsdf[tau]);

			if (nsdf[tau] > SMALL_CUTOFF) {
				// calculates turningPointX and Y
				prabolicInterpolation(tau);
				// store the turning points
				ampEstimates.add(turningPointY);
				periodEstimates.add(turningPointX);
				// remember the highest amplitude
				highestAmplitude = Math.max(highestAmplitude, turningPointY);
			}
		}

		if (periodEstimates.isEmpty()) {
			pitch = -1;
		} else {
			// use the overall maximum to calculate a cutoff.
			// The cutoff value is based on the highest value and a relative
			// threshold.
			final double actualCutoff = cutoff * highestAmplitude;

			// find first period above or equal to cutoff
			int periodIndex = 0;
			for (int i = 0; i < ampEstimates.size(); i++) {
				if (ampEstimates.get(i) >= actualCutoff) {
					periodIndex = i;
					break;
				}
			}

			final double period = periodEstimates.get(periodIndex);
			final float pitchEstimate = (float) (sampleRate / period);
			if (pitchEstimate > LOWER_PITCH_CUTOFF) {
				pitch = pitchEstimate;
			} else {
				pitch = -1;
			}

		}
		result.setProbability((float) highestAmplitude);
		result.setPitch(pitch);
		result.setPitched(pitch != -1);
		
		return result;
	}


	private void prabolicInterpolation(final int tau) {
		final float nsdfa = nsdf[tau - 1];
		final float nsdfb = nsdf[tau];
		final float nsdfc = nsdf[tau + 1];
		final float bValue = tau;
		final float bottom = nsdfc + nsdfa - 2 * nsdfb;
		if (bottom == 0.0) {
			turningPointX = bValue;
			turningPointY = nsdfb;
		} else {
			final float delta = nsdfa - nsdfc;
			turningPointX = bValue + delta / (2 * bottom);
			turningPointY = nsdfb - delta * delta / (8 * bottom);
		}
	}


	private void peakPicking() {

		int pos = 0;
		int curMaxPos = 0;

		// find the first negative zero crossing
		while (pos < (nsdf.length - 1) / 3 && nsdf[pos] > 0) {
			pos++;
		}

		// loop over all the values below zero
		while (pos < nsdf.length - 1 && nsdf[pos] <= 0.0) {
			pos++;
		}

		// can happen if output[0] is NAN
		if (pos == 0) {
			pos = 1;
		}

		while (pos < nsdf.length - 1) {
			assert nsdf[pos] >= 0;
			if (nsdf[pos] > nsdf[pos - 1] && nsdf[pos] >= nsdf[pos + 1]) {
				if (curMaxPos == 0) {
					// the first max (between zero crossings)
					curMaxPos = pos;
				} else if (nsdf[pos] > nsdf[curMaxPos]) {
					// a higher max (between the zero crossings)
					curMaxPos = pos;
				}
			}
			pos++;
			// a negative zero crossing
			if (pos < nsdf.length - 1 && nsdf[pos] <= 0) {
				// if there was a maximum add it to the list of maxima
				if (curMaxPos > 0) {
					maxPositions.add(curMaxPos);
					curMaxPos = 0; // clear the maximum position, so we start
					// looking for a new ones
				}
				while (pos < nsdf.length - 1 && nsdf[pos] <= 0.0f) {
					pos++; // loop over all the values below zero
				}
			}
		}
		if (curMaxPos > 0) { // if there was a maximum in the last part
			maxPositions.add(curMaxPos); // add it to the vector of maxima
		}
	}
}
