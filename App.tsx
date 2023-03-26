import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import MainContainer from './components/Containers/MainContainer';
import LoginScreen from './components/Screens/LoginScreen';
import RegisterScreen from './components/Screens/RegisterScreen';
// import { StyleSheet, Text, View, TextInput, Alert, TouchableOpacity } from 'react-native';

export default function App() {
  let page = 'login';



  return (
    <>
   
       {/* <LoginScreen></LoginScreen> */}
      
      
      <RegisterScreen></RegisterScreen>
      
     
    </>
  );
}
