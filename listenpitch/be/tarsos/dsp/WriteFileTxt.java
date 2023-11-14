package be.tarsos.dsp;


import java.io.BufferedWriter;
import java.io.FileWriter;
import java.io.IOException;
import java.util.List;



public class WriteFileTxt implements WriteFileInter {

	@Override
	public void writeFile(List<Notedown> sel, String pathname) {
		try {
			BufferedWriter bw=new BufferedWriter(new FileWriter(pathname));
			for(Notedown s:sel) {
				bw.write(s.getBetime()+" "+s.getEntime()+" "+s.getNote());
				bw.newLine();
			}
			bw.close();
		} catch (IOException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		
			
		
	}

}
