


package be.tarsos.dsp.example;


import java.io.*;
import java.util.ArrayList;
import java.util.List;

import javax.sound.sampled.*;

import be.tarsos.dsp.*;


import be.tarsos.dsp.pitch.PitchDetectionHandler;
import be.tarsos.dsp.pitch.PitchDetectionResult;
import be.tarsos.dsp.pitch.PitchProcessor;
import be.tarsos.dsp.pitch.PitchProcessor.PitchEstimationAlgorithm;


import be.tarsos.dsp.WaveformSimilarityBasedOverlapAdd;
import be.tarsos.dsp.io.jvm.AudioDispatcherFactory;

public class PitchDetectorExample  implements PitchDetectionHandler {



	private AudioDispatcher dispatcher;
	private Mixer currentMixer;
	
	private PitchEstimationAlgorithm algo;
	private String line=null;

	private Mixer newValue = null;



	private WaveformSimilarityBasedOverlapAdd wsola;



	private float beforetime;
	private int fm=0;
	private int fz=0;
	private List<Note> notes=new ArrayList<>();
	private float sampleRate;

	public PitchDetectorExample() {

	}


	

	public static void main(String... strings) {
		PitchDetectorExample a=new PitchDetectorExample();

		a.run("/Users/zhangruichen/Downloads/output0(1).wav","standard.txt",1);
	}

	public List<Integer> run(String pathname, String pathname2 , int sex) {


		algo = PitchEstimationAlgorithm.FFT_YIN;

		File file = new File(pathname);
		startFile(file,null);





		ReadInter ri=new ReadFileTxt();
		List<Note> list=ri.readFile(pathname2);

		for(Note n:notes){
			if(n.getRms() > 0.5){
				beforetime=n.getTime();
				break;
			}
		}

		List<Integer> pitchlist=new ArrayList<Integer>();
		for(Note n:list){
			int[] onepitchlist =new int[26];
			fm++;
			float bztime=n.getTime();
			float bztime2=n.getHz();
			for(Note m:notes){
				float pitchtime=m.getTime();
				float pitchhz=m.getHz();
				if(pitchtime>beforetime+bztime2){
					break;
				}
				if(beforetime+bztime<=pitchtime && pitchtime<=beforetime+bztime2){
					if(sex==0){
						if(98-1.5<=pitchhz&&pitchhz<=98+1.5){
							onepitchlist[0]++;
						}
						else if(103.7-1.5<=pitchhz&&pitchhz<=103.7+1.5){
							onepitchlist[1]++;
						}
						else if(110-1.5<=pitchhz&&pitchhz<=110+1.5){
							onepitchlist[2]++;
						}
						else if(116.5-1.5<=pitchhz&&pitchhz<=116.5+1.5){
							onepitchlist[3]++;
						}
						else if(123.5-1.5<=pitchhz&&pitchhz<=123.5+1.5){
							onepitchlist[4]++;
						}
						else if(130.75-1.5<=pitchhz&&pitchhz<=130.75+1.5){
							onepitchlist[5]++;
						}
						else if(138.5-1.5<=pitchhz&&pitchhz<=138.5+1.5){
							onepitchlist[6]++;
						}
						else if(146.75-1.5<=pitchhz&&pitchhz<=146.75+1.5){
							onepitchlist[7]++;
						}
						else if(155.5-1.5<=pitchhz&&pitchhz<=155.5+1.5){
							onepitchlist[8]++;
						}
						else if(165-1.5<=pitchhz&&pitchhz<=165+1.5){
							onepitchlist[9]++;
						}
						else if(174.5-1.5<=pitchhz&&pitchhz<=174.5+1.5){
							onepitchlist[10]++;
						}
						else if(185-1.5<=pitchhz&&pitchhz<=185+1.5){
							onepitchlist[11]++;
						}
						else if(196-1.5<=pitchhz&&pitchhz<=196+1.5){
							onepitchlist[12]++;
						}
						else if(207.5-1.5<=pitchhz&&pitchhz<=207.5+1.5){
							onepitchlist[13]++;
						}
						else if(220-1.5<=pitchhz&&pitchhz<=220+1.5){
							onepitchlist[14]++;
						}
						else if(233-1.5<=pitchhz&&pitchhz<=233+1.5){
							onepitchlist[15]++;
						}
						else if(247-1.5<=pitchhz&&pitchhz<=247+1.5){
							onepitchlist[16]++;
						}
						else if(261.5-1.5<=pitchhz&&pitchhz<=261.5+1.5){
							onepitchlist[17]++;
						}
						else if(277-1.5<=pitchhz&&pitchhz<=277+1.5){
							onepitchlist[18]++;
						}
						else if(293.5-1.5<=pitchhz&&pitchhz<=293.5+1.5){
							onepitchlist[19]++;
						}
						else if(311-1.5<=pitchhz&&pitchhz<=311+1.5){
							onepitchlist[20]++;
						}
						else if(330-1.5<=pitchhz&&pitchhz<=330+1.5){
							onepitchlist[21]++;
						}
						else if(349-1.5<=pitchhz&&pitchhz<=349+1.5){
							onepitchlist[22]++;
						}
						else if(370-1.5<=pitchhz&&pitchhz<=370+1.5){
							onepitchlist[23]++;
						}
						else if(392-1.5<=pitchhz&&pitchhz<=392+1.5){
							onepitchlist[24]++;
						}
					}
					else{

						 if(196-1.5<=pitchhz&&pitchhz<=196+1.5){
							onepitchlist[0]++;
						}
						else if(207.5-1.5<=pitchhz&&pitchhz<=207.5+1.5){
							onepitchlist[1]++;
						}
						else if(220-1.5<=pitchhz&&pitchhz<=220+1.5){
							onepitchlist[2]++;
						}
						else if(233-1.5<=pitchhz&&pitchhz<=233+1.5){
							onepitchlist[3]++;
						}
						else if(247-1.5<=pitchhz&&pitchhz<=247+1.5){
							onepitchlist[4]++;
						}
						else if(261.5-1.5<=pitchhz&&pitchhz<=261.5+1.5){
							onepitchlist[5]++;
						}
						else if(277-1.5<=pitchhz&&pitchhz<=277+1.5){
							onepitchlist[6]++;
						}
						else if(293.5-1.5<=pitchhz&&pitchhz<=293.5+1.5){
							onepitchlist[7]++;
						}
						else if(311-1.5<=pitchhz&&pitchhz<=311+1.5){
							onepitchlist[8]++;
						}
						else if(330-1.5<=pitchhz&&pitchhz<=330+1.5){
							onepitchlist[9]++;
						}
						else if(349-1.5<=pitchhz&&pitchhz<=349+1.5){
							onepitchlist[10]++;
						}
						else if(370-1.5<=pitchhz&&pitchhz<=370+1.5){
							onepitchlist[11]++;
						}
						else if(392-1.5<=pitchhz&&pitchhz<=392+1.5){
							onepitchlist[12]++;
						}
						else if(415.5-1.5<=pitchhz&&pitchhz<=415.5+1.5){
							onepitchlist[13]++;
						}
						else if(440-1.5<=pitchhz&&pitchhz<=440+1.5){
							onepitchlist[14]++;
						}
						else if(466-1.5<=pitchhz&&pitchhz<=466+1.5){
							onepitchlist[15]++;
						}
						else if(494-1.5<=pitchhz&&pitchhz<=494+1.5){
							onepitchlist[16]++;
						}
						else if(523-1.5<=pitchhz&&pitchhz<=523+1.5){
							onepitchlist[17]++;
						}
						else if(554.5-1.5<=pitchhz&&pitchhz<=554.5+1.5){
							onepitchlist[18]++;
						}
						else if(587.5-1.5<=pitchhz&&pitchhz<=587.5+1.5){
							onepitchlist[19]++;
						}
						else if(622-1.5<=pitchhz&&pitchhz<=622+1.5){
							onepitchlist[20]++;
						}
						else if(659.5-1.5<=pitchhz&&pitchhz<=659.5+1.5){
							onepitchlist[21]++;
						}
						else if(698.5-1.5<=pitchhz&&pitchhz<=698.5+1.5){
							onepitchlist[22]++;
						}
						else if(740-1.5<=pitchhz&&pitchhz<=740+1.5){
							onepitchlist[23]++;
						}
						else if(784-1.5<=pitchhz&&pitchhz<=784+1.5){
							onepitchlist[24]++;
						}
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
			pitchlist.add(pitchnum+1);
			System.out.println(pitchnum+1);
		}
	return pitchlist;
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
			System.out.println("   "+sampleRate+"      "+1024* format.getChannels());
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




