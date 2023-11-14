package be.tarsos.dsp;

import java.io.BufferedReader;
import java.io.FileNotFoundException;
import java.io.FileReader;
import java.io.IOException;
import java.util.ArrayList;
import java.util.List;





public class ReadFileTxt implements ReadInter {

	@Override
	public List<Note> readFile(String pathname) {
		// TODO Auto-generated method stub
		List<Note> notes=new ArrayList<>();
		try {
			FileReader fr=new FileReader(pathname);
			BufferedReader br=new BufferedReader(fr);
			String line=null;
			while((line=br.readLine())!=null) {
				String[] fields=line.split("\\s+");
				Note s= new Note();
				s.setTime(Float.parseFloat(fields[0]));
				s.setHz(Float.parseFloat(fields[1]));
				notes.add(s);
			}
		} catch (FileNotFoundException e) {
			System.out.println("FileNotFound！");
			e.printStackTrace();
		} catch (NumberFormatException e) {
			System.out.println("NumberFormat！");
			e.printStackTrace();
		} catch (IOException e) {
			System.out.println("读入数据失败！");
			e.printStackTrace();
		}
		return notes;
	}

}
