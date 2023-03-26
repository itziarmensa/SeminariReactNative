import { StatusBar } from 'expo-status-bar'; //esto es lo que tenemos arriba del móvil, la hora la carga etc 
import React from 'react';
import { StyleSheet, Text, View, TextInput, Alert } from 'react-native';
import ButtonGradient from './components/Buttons/ButtonGradient';
import MainContainer from './components/Containers/MainContainer';
import SubTitle from './components/Texts/Subtitle';
import Title from './components/Texts/Title';
import StyledTextInputs from './components/Inputs/StyledTextInputs';
import NormalText from './components/Texts/NormalText';

export default function App() {

  const handlePress = () => {
    Alert.alert(
      'Mensaje',
      'Has intentado iniciar sesión',
      [{ text: 'OK', onPress: () => console.log('OK Pressed') }],
      { cancelable: false }
    );
  };
  
  return (
    <MainContainer>
      <Title>Hello</Title>
      <SubTitle>Sign In in your account</SubTitle>
      <StyledTextInputs placeholder='Email'></StyledTextInputs>
      <StyledTextInputs placeholder='Password'></StyledTextInputs>
      <NormalText>Forgot your password?</NormalText>
      <ButtonGradient onPress={handlePress} />
      <NormalText>Don't have an account?</NormalText>
      <StatusBar style="auto" /> 
    </MainContainer>
  );
}
