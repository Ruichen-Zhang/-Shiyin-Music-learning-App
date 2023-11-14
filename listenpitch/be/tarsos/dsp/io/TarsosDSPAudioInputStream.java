
package be.tarsos.dsp.io;

import java.io.IOException;


public interface TarsosDSPAudioInputStream {


	long skip(long bytesToSkip) throws IOException;


	int read(byte[] b, int off, int len) throws IOException ;


    public void close() throws IOException;

	TarsosDSPAudioFormat getFormat();

	long getFrameLength();
}
