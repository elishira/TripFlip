import { StatusBar } from 'expo-status-bar';
import * as React from 'react';
import { StyleSheet, Text, View, Image, TouchableHighlight } from 'react-native';
import { useFonts } from 'expo-font';
import Discover from "./Discover";
import CreateAccount from './CreateAccount';
import LandingPage from "./LandingPage";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

export default function App() {
  const [loaded] = useFonts({
    'Poppins-Light': require('./assets/fonts/Poppins/Poppins-Light.ttf'),
    'Poppins-Medium': require('./assets/fonts/Poppins/Poppins-Medium.ttf'),
    'Poppins-SemiBold': require('./assets/fonts/Poppins/Poppins-SemiBold.ttf'),
  });

  if (!loaded) {
    return null;
  }

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Landing"
          component={LandingPage}
        />
        <Stack.Screen
          name="CreateAccount"
          component={CreateAccount}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',

  },
  text: {
    fontFamily: 'Poppins-Light',
    frontSize: 12,
  },
  button: {
    marginTop: 30,
    marginBottom: 10,
    width: 260,
    alignItems: 'center',
    backgroundColor: '#4A48B8',
    borderRadius: 15,
  },
  buttonText: {
    textAlign: 'center',
    padding: 20,
    color: 'white',
    fontFamily: 'Poppins-Medium',
    frontSize: 16,
  }
});
