import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import MainContainer from './components/Containers/MainContainer';
import LoginScreen from './components/Screens/LoginScreen';
import RegisterScreen from './components/Screens/RegisterScreen';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

export default function App() {
  return (
    <Stack.Navigator initialRouteName="Login">
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Home" component={RegisterScreen} />
    </Stack.Navigator>
  );
}
