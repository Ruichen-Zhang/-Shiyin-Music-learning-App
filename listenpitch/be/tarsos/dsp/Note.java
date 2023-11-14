package be.tarsos.dsp;

public class Note {
	private float time;
	private float hz;
	private float rms;
	private float probability;

	public float getRms() {
		return rms;
	}

	public float getProbability() {
		return probability;
	}

	public void setProbability(float probability) {
		this.probability = probability;
	}

	public void setRms(float rms) {
		this.rms = rms;
	}

	public float getTime() {
		return time;
	}

	public void setTime(float time) {
		this.time = time;
	}

	public float getHz() {
		return hz;
	}

	public void setHz(float hz) {
		this.hz = hz;
	}
}
