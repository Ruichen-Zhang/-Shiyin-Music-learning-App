
package be.tarsos.dsp.io.jvm;


import java.io.File;
import java.io.IOException;


import javax.sound.sampled.AudioFormat;
import javax.sound.sampled.AudioInputStream;
import javax.sound.sampled.AudioSystem;
import javax.sound.sampled.LineUnavailableException;
import javax.sound.sampled.TargetDataLine;
import javax.sound.sampled.UnsupportedAudioFileException;

import be.tarsos.dsp.AudioDispatcher;

import be.tarsos.dsp.io.TarsosDSPAudioInputStream;

public class AudioDispatcherFactory {


	public static AudioDispatcher fromDefaultMicrophone(final int sampleRate,final int audioBufferSize, final int bufferOverlap) throws LineUnavailableException {
		final AudioFormat format = new AudioFormat(sampleRate, 16, 1, true,true);
		TargetDataLine line =  AudioSystem.getTargetDataLine(format);
		line.open(format, audioBufferSize);
		line.start();
		AudioInputStream stream = new AudioInputStream(line);
		TarsosDSPAudioInputStream audioStream = new JVMAudioInputStream(stream);
		return new AudioDispatcher(audioStream,audioBufferSize,bufferOverlap);
	}

	


	public static AudioDispatcher fromFile(final File audioFile, final int audioBufferSize,final int bufferOverlap)
			throws UnsupportedAudioFileException, IOException {
		final AudioInputStream stream = AudioSystem.getAudioInputStream(audioFile);
		TarsosDSPAudioInputStream audioStream = new JVMAudioInputStream(stream);
		return new AudioDispatcher(audioStream, audioBufferSize, bufferOverlap);
	}
	

}
