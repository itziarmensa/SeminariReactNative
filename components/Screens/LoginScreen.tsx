import { StatusBar } from 'expo-status-bar'; //esto es lo que tenemos arriba del móvil, la hora la carga etc 
import React from 'react';
import { StyleSheet, Text, View, TextInput, Alert, TouchableOpacity } from 'react-native';
import ButtonGradient from '../Buttons/ButtonGradient';
import MainContainer from '../Containers/MainContainer';
import SubTitle from '../Texts/Subtitle';
import Title from '../Texts/Title';
import StyledTextInputs from '../Inputs/StyledTextInputs';
import NormalText from '../Texts/NormalText';
import Register from '../Texts/Register';


export default function LoginScreen() {
  
    return (
        <MainContainer>
        <Title>Hello</Title>
        <SubTitle>Sign In in your account</SubTitle>
        <StyledTextInputs placeholder='Email'></StyledTextInputs>
        <StyledTextInputs placeholder='Password'></StyledTextInputs>
        <NormalText>Forgot your password?</NormalText>
        <ButtonGradient onPress={() => {
                Alert.alert(
                'Mensaje',
                'Has intentado iniciar sesión',
                [{ text: 'OK', onPress: () => console.log('OK Pressed') }],
                { cancelable: false }
                );
            }} />
        <NormalText>Don't have an account?</NormalText>
        <TouchableOpacity onPress={() => {
            Alert.alert(
                'Mensaje',
                'Has intentado registrarte',
                [{ text: 'OK', onPress: () => console.log('OK Pressed') }],
                { cancelable: false }
            );
        }}>
            <Register>Register!</Register>
        </TouchableOpacity>
        <StatusBar style="auto" /> 
        </MainContainer>
    );
}
