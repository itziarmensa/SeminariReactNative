import { StatusBar } from 'expo-status-bar'; //esto es lo que tenemos arriba del móvil, la hora la carga etc 
import React from 'react';
import { StyleSheet, Text, View, TextInput, Alert, TouchableOpacity } from 'react-native';
import ButtonGradient from '../Buttons/ButtonGradient';
import MainContainer from '../Containers/MainContainer';
import SubTitle from '../Texts/Subtitle';
import Title from '../Texts/Title';
import StyledTextInputs from '../Inputs/StyledTextInputs';
import NormalText from '../Texts/NormalText';

export default function RegisterScreen() {
  
  return (
    <MainContainer>
      <Title>Register</Title>      
    </MainContainer>
  );
}
