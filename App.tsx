import { StatusBar } from 'expo-status-bar'; //esto es lo que tenemos arriba del móvil, la hora la carga etc 
import React from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';
import ButtonGradient from './components/ButtonGradient';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style = {styles.title}>Hello</Text>
      <Text style = {styles.subtitle}>Sign In to your account</Text>
      <TextInput
      placeholder='Mail' style = {styles.textInput}></TextInput>
      <TextInput
      placeholder='Password' style = {styles.textInput}></TextInput>
      <Text style = {styles.forgotPassword}>Forgot your password?</Text>
      <ButtonGradient></ButtonGradient>
      <Text style = {styles.forgotPassword}>Don't have an account?</Text>
      <StatusBar style="auto" /> 
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f1f1f1',
    alignItems: 'center',
    justifyContent: 'center',
  },

  title: {
    fontSize: 80,
    color: '#344340',
    fontWeight: 'bold',
  },

  subtitle: {
    fontSize: 30,
    color: 'gray',
  },

  textInput: {
    borderWidth: 1,
    borderColor: 'gray',
    padding: 10,
    width: '80%',
    height: 50,
    marginTop: 20,
    borderRadius: 30,
    backgroundColor: 'white',
    paddingStart: 30,
  },

  forgotPassword: {
    fontSize: 14,
    color: 'gray',
    marginTop: 20,
  }
  
});
