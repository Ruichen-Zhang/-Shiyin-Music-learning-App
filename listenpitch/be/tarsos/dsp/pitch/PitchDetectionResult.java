

package be.tarsos.dsp.pitch;


public class PitchDetectionResult {	

	private float pitch;
	
	private float probability;
	
	private boolean pitched;
	
	public PitchDetectionResult(){
		pitch = -1;
		probability = -1;
		pitched = false;
	}
	

	public PitchDetectionResult(PitchDetectionResult other){
		this.pitch = other.pitch;
		this.probability = other.probability;
		this.pitched = other.pitched;
	}
		 
	

	public float getPitch() {
		return pitch;
	}

	public void setPitch(float pitch) {
		this.pitch = pitch;
	}
	

	public PitchDetectionResult clone(){
		return new PitchDetectionResult(this);
	}


	public float getProbability() {
		return probability;
	}

	public void setProbability(float probability) {
		this.probability = probability;
	}


	public boolean isPitched() {
		return pitched;
	}

	public void setPitched(boolean pitched) {
		this.pitched = pitched;
	}	
}
