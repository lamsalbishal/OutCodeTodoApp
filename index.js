
import React from 'react';
import { AppRegistry, LogBox, StatusBar } from 'react-native';
import App from './App';
import { name as appName } from './app.json';
import { store } from './src/store/store';
import { Provider } from 'react-redux';
import { persistStore } from 'redux-persist';
import { PersistGate } from 'redux-persist/integration/react';
import {  SafeAreaView } from 'react-native-safe-area-context';

LogBox.ignoreLogs(['Warning: ...']); // Ignore log notification by message
LogBox.ignoreAllLogs(); //Ignore all log notifications
let persistor = persistStore(store);



const OutCodeApp = () => (
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
        <SafeAreaView style={{ flex: 1, backgroundColor: '#F0F2F5' }}>
          <App />
        </SafeAreaView>
    </PersistGate>
  </Provider>
);
AppRegistry.registerComponent(appName, () => OutCodeApp);
