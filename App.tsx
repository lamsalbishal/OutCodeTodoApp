import React, { useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { navigationRef } from './src/utils/navUtils';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import HomeScreen from './src/page/HomeScreen';
import SplashScreen from './src/page/SplashScreen';
import CreateEditNoteScreen from './src/page/CreateEditNoteScreen';


const App = () => {
  const Stack = createNativeStackNavigator();

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <NavigationContainer ref={navigationRef}>
        <Stack.Navigator
          screenOptions={{
            headerStyle: { backgroundColor: Colors.mainColor },
            headerShown: false,
            gestureDirection: 'horizontal',
            animation: 'slide_from_right',
          }}
          initialRouteName={'SplashScreen'}>
          <Stack.Screen name="SplashScreen" component={SplashScreen} />
          <Stack.Screen name="HomeScreen" component={HomeScreen} />
          <Stack.Screen name='CreateEditNoteScreen' component={CreateEditNoteScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </GestureHandlerRootView>
  );
};

export default App;
