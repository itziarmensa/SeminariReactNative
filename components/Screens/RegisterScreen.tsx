import { StatusBar } from 'expo-status-bar'; //esto es lo que tenemos arriba del móvil, la hora la carga etc 
import React from 'react';
import { StyleSheet, Text, View, TextInput, Alert, TouchableOpacity } from 'react-native';
import ButtonGradientRegister from '../Buttons/ButtonGradientRegister';
import MainContainer from '../Containers/MainContainer';
import SubTitle from '../Texts/Subtitle';
import Title from '../Texts/Title';
import StyledTextInputs from '../Inputs/StyledTextInputs';
import NormalText from '../Texts/NormalText';

export default function RegisterScreen() {
  
  return (
    <MainContainer>
    <Title>Register</Title>
    <SubTitle>Register to have a new account</SubTitle>
    <StyledTextInputs placeholder='Email'></StyledTextInputs>
    <StyledTextInputs placeholder='Password'></StyledTextInputs>
    <StyledTextInputs placeholder='Phone Number'></StyledTextInputs>
    <StyledTextInputs placeholder='Country'></StyledTextInputs>
  
    <ButtonGradientRegister onPress={() => {
            Alert.alert(
            'Mensaje',
            'Has intentado iniciar sesión',
            [{ text: 'OK', onPress: () => console.log('OK Pressed') }],
            { cancelable: false }
            );
        }} />

    <TouchableOpacity onPress={() => {
        Alert.alert(
            'Mensaje',
            'Has intentado registrarte',
            [{ text: 'OK', onPress: () => console.log('OK Pressed') }],
            { cancelable: false }
        );
    }}>
       
    </TouchableOpacity>
    <StatusBar style="auto" /> 
    </MainContainer>

  );
}
