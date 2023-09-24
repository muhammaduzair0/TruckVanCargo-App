import React from 'react';
import { useCallback } from 'react';
import { useFonts } from 'expo-font';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './screens/Home'
import ExpressMultipleScreen from './screens/ExpressMultipleScreen';
import * as SplashScreen from 'expo-splash-screen'

const Stack = createNativeStackNavigator();


export default function App() {
  const [fontsLoaded] = useFonts({
    'bold':require('./assets/fonts/Sora-Bold.ttf'),
    'regular':require('./assets/fonts/Sora-Regular.ttf'),
    'medium':require('./assets/fonts/Sora-Medium.ttf'),
    'light':require('./assets/fonts/Sora-Light.ttf'),
    'semiBold':require('./assets/fonts/Sora-SemiBold.ttf'),
  })

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync()
    }
  }, [fontsLoaded]);
  if (!fontsLoaded) {
    return null;
  }
  return (
     <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown:false}} initialRouteName='Home'>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="ExpressMultipleScreen" component={ExpressMultipleScreen} />
      </Stack.Navigator>
    </NavigationContainer>  );
}
