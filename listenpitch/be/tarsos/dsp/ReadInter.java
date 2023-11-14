package be.tarsos.dsp;

import java.util.List;

import be.tarsos.dsp.Note;

public interface ReadInter {
	public List<Note> readFile(String pathname);
}
