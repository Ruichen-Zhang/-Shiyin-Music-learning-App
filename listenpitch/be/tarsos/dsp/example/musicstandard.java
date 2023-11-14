


package be.tarsos.dsp.example;


import be.tarsos.dsp.*;
import be.tarsos.dsp.io.jvm.AudioDispatcherFactory;
import be.tarsos.dsp.pitch.PitchDetectionHandler;
import be.tarsos.dsp.pitch.PitchDetectionResult;
import be.tarsos.dsp.pitch.PitchProcessor;
import be.tarsos.dsp.pitch.PitchProcessor.PitchEstimationAlgorithm;

import javax.sound.sampled.AudioFormat;
import javax.sound.sampled.AudioSystem;
import javax.sound.sampled.Mixer;
import javax.sound.sampled.UnsupportedAudioFileException;
import java.io.File;
import java.io.IOException;
import java.util.ArrayList;
import java.util.List;

public class musicstandard implements PitchDetectionHandler {



	private AudioDispatcher dispatcher;
	private Mixer currentMixer;

	private PitchEstimationAlgorithm algo;
	private String line=null;

	private Mixer newValue = null;



	private WaveformSimilarityBasedOverlapAdd wsola;



	private float beforetime;
	private float endtime;
	private int fm=0;
	private int fz=0;
	private List<Note> notes=new ArrayList<>();
	private float sampleRate;

	public musicstandard() {

	}




	public static void main(String... strings) {
		musicstandard a=new musicstandard();

		a.run("/Users/zhangruichen/Desktop/9.wav","standard.txt");
	}

	public void run(String pathname, String pathname2 ) {


		algo = PitchEstimationAlgorithm.MPM;

		File file = new File(pathname);
		startFile(file,null);


		for(Note n:notes){
			if(n.getRms() > 0.5){
				beforetime=n.getTime();
				break;
			}
		}
		for(Note n:notes){
				endtime=n.getTime();
		}

		List<Integer> pitchlist=new ArrayList<Integer>();
		float lim = 0.15F;
		float bztime = beforetime;
		float bztime2 = bztime + lim;
		for(;bztime2<=endtime;bztime = bztime2,bztime2=bztime2+lim){
			int[] onepitchlist =new int[26];
			for(Note m:notes){
				float pitchtime=m.getTime();
				float pitchhz=m.getHz();
				if(pitchtime>bztime2){
					break;
				}
				if(bztime<=pitchtime && pitchtime<=bztime2){

						 if(196-5<=pitchhz&&pitchhz<=196+5){
							onepitchlist[0]++;
						}
						else if(207.5-5<=pitchhz&&pitchhz<=207.5+5){
							onepitchlist[1]++;
						}
						else if(220-5<=pitchhz&&pitchhz<=220+5){
							onepitchlist[2]++;
						}
						else if(233-5<=pitchhz&&pitchhz<=233+5){
							onepitchlist[3]++;
						}
						else if(247-5<=pitchhz&&pitchhz<=247+5){
							onepitchlist[4]++;
						}
						else if(265-5<=pitchhz&&pitchhz<=265+5){
							onepitchlist[5]++;
						}
						else if(277-5<=pitchhz&&pitchhz<=277+5){
							onepitchlist[6]++;
						}
						else if(293.5-5<=pitchhz&&pitchhz<=293.5+5){
							onepitchlist[7]++;
						}
						else if(311-5<=pitchhz&&pitchhz<=311+5){
							onepitchlist[8]++;
						}
						else if(330-5<=pitchhz&&pitchhz<=330+5){
							onepitchlist[9]++;
						}
						else if(349-5<=pitchhz&&pitchhz<=349+5){
							onepitchlist[10]++;
						}
						else if(370-5<=pitchhz&&pitchhz<=370+5){
							onepitchlist[11]++;
						}
						else if(392-5<=pitchhz&&pitchhz<=392+5){
							onepitchlist[12]++;
						}
						else if(415.5-5<=pitchhz&&pitchhz<=415.5+5){
							onepitchlist[13]++;
						}
						else if(440-5<=pitchhz&&pitchhz<=440+5){
							onepitchlist[14]++;
						}
						else if(466-5<=pitchhz&&pitchhz<=466+5){
							onepitchlist[15]++;
						}
						else if(494-5<=pitchhz&&pitchhz<=494+5){
							onepitchlist[16]++;
						}
						else if(523-5<=pitchhz&&pitchhz<=523+5){
							onepitchlist[17]++;
						}
						else if(554.5-5<=pitchhz&&pitchhz<=554.5+5){
							onepitchlist[18]++;
						}
						else if(587.5-5<=pitchhz&&pitchhz<=587.5+5){
							onepitchlist[19]++;
						}
						else if(622-5<=pitchhz&&pitchhz<=622+5){
							onepitchlist[20]++;
						}
						else if(659.5-5<=pitchhz&&pitchhz<=659.5+5){
							onepitchlist[21]++;
						}
						else if(698.5-5<=pitchhz&&pitchhz<=698.5+5){
							onepitchlist[22]++;
						}
						else if(740-5<=pitchhz&&pitchhz<=740+5){
							onepitchlist[23]++;
						}
						else if(784-5<=pitchhz&&pitchhz<=784+5){
							onepitchlist[24]++;
						}

				}

			}
			int pitch=0;
			int pitchnum=0;
			for(int i=0;i<25;i++){
				if(pitch<onepitchlist[i]){
					pitch=onepitchlist[i];
					pitchnum=i;
				}
			}
			if(pitchnum==0)
				pitchnum=-2;
			pitchlist.add(pitchnum+1);
			//System.out.println(pitchnum+1);
		}
		//System.out.println("!!!!!!!!!!!!!!!!!!!!!!!!!");
		List<Notedown> colnote=new ArrayList<>();
		float begtime=0;
		float endtime=0;
		int bernote=pitchlist.get(0);
		for(int i=0 ;i< pitchlist.size();i++){
			int firnote= pitchlist.get(i);
			if(i==pitchlist.size()-1){
				Notedown notedown=new Notedown();
				notedown.setBetime(begtime);
				notedown.setEntime(endtime);
				notedown.setNote(bernote);
				colnote.add(notedown);
				//System.out.println(begtime+" "+endtime+" "+bernote);
			}
			if(firnote==-1){
				endtime=endtime+lim;
			}else{
				if(firnote==bernote){
					endtime=endtime+lim;
				}
				else{
					Notedown notedown=new Notedown();
					notedown.setBetime(begtime);
					notedown.setEntime(endtime);
					notedown.setNote(bernote);
					colnote.add(notedown);
					//System.out.println(begtime+" "+endtime+" "+bernote);
					begtime=endtime;
					endtime=endtime+lim;
					bernote=firnote;
				}
			}

		}
		WriteFileTxt wt=new WriteFileTxt();
		wt.writeFile(colnote,pathname2);

	}

	@Override
	public void handlePitch(PitchDetectionResult pitchDetectionResult, AudioEvent audioEvent) {

	}




	private void startFile(final File inputFile, Mixer mixer){
		if(dispatcher != null){
			dispatcher.stop();
		}
		AudioFormat format;
		try {
			format = AudioSystem.getAudioFileFormat(inputFile).getFormat();
			sampleRate = format.getSampleRate();
			//System.out.println("   "+sampleRate+"      "+1024* format.getChannels());
			dispatcher = AudioDispatcherFactory.fromFile(inputFile,1024* format.getChannels() ,0 );
			dispatcher.addAudioProcessor(new MultichannelToMono(format.getChannels(),true));
		} catch (UnsupportedAudioFileException e) {
			e.printStackTrace();
		} catch (IOException e) {
			e.printStackTrace();
		}




		PitchDetectionHandler pdh = new PitchDetectionHandler() {
			@Override
			public void handlePitch(PitchDetectionResult result, AudioEvent e) {
				double timeStamp = e.getTimeStamp();
				float pitch = result.getPitch();
				float probability = result.getProbability();
				double rms = e.getRMS() * 100;
				//System.out.println(String.format("%.2f",timeStamp) + "秒 : "  + String.format("%.2f",pitch) + "赫兹   "+String.format("%.2f",rms)+"rms     "+String.format("%.2f",probability)+"probability");
				if(result.getPitch() != -1 && rms > 0.5){
					Note s= new Note();
					s.setTime((float) timeStamp);
					s.setHz(pitch);
					s.setRms((float) rms);
					s.setProbability(probability);
					notes.add(s);
				}

			}
		};

		dispatcher.addAudioProcessor(new PitchProcessor(algo,sampleRate, 1024, pdh));

		dispatcher.run();





	}

}




