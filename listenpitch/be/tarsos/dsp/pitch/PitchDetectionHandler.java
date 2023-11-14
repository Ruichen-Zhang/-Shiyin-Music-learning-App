

package be.tarsos.dsp.pitch;

import be.tarsos.dsp.AudioEvent;
import be.tarsos.dsp.Note;


public interface PitchDetectionHandler {

	void handlePitch(PitchDetectionResult pitchDetectionResult, AudioEvent audioEvent);
}
