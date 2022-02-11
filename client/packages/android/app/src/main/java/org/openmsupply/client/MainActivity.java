package org.openmsupply.client;

import android.os.Bundle;

import com.getcapacitor.BridgeActivity;

public class MainActivity extends BridgeActivity {
    RemoteServer server = new RemoteServer();

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);

        String path = getFilesDir().getAbsolutePath();
        server.start(8082, path + "/omsupply-database");
    }

    @Override
    public void onDestroy() {
        super.onDestroy();
        server.stop();
    }
}