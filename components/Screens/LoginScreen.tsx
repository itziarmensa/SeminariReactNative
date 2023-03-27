import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, TextInput, Alert, TouchableOpacity } from 'react-native';
import ButtonGradient from '../Buttons/ButtonGradient';
import MainContainer from '../Containers/MainContainer';
import SubTitle from '../Texts/Subtitle';
import Title from '../Texts/Title';
import NormalText from '../Texts/NormalText';
import Register from '../Texts/Register';
import { useNavigation } from '@react-navigation/native';

function LoginScreen() {
  
  const navigation = useNavigation();

  const [inputEmail, setInputEmail] = useState('');
  const [inputPassword, setInputPassword] = useState('');

  return (
      <MainContainer>
      <Title>Hello</Title>
      <SubTitle>Sign In in your account</SubTitle>
      <TextInput 
        placeholder = 'Email'
        style = {styles.TextInput}
        value = {inputEmail}
        onChangeText = {setInputEmail}
        />         
      <TextInput 
        placeholder = 'Password' 
        style = {styles.TextInput} 
        value = {inputPassword} 
        onChangeText = {setInputPassword}
        />   
      <NormalText>Forgot your password?</NormalText>
      <ButtonGradient onPress = {() => {
        // navigation.navigate('Home' as never);
        fetch(('http://192.168.1.47:3002/user/' + inputEmail + '/' + inputPassword), {
            method: 'GET',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
        }).then((response) => response.json())
          .then((data) => {
            if (data.error === "ERROR_GET_USER"){
              Alert.alert(
                'Mensaje',
                'Error al iniciar sesion',
                [{ text: 'OK', onPress: () => console.log('OK Pressed') }],
                { cancelable: false }
                );
            }else{
              console.log("no he pillao el error bien")
              Alert.alert(
              'Mensaje',
              'Te has logeado con exito',
              [{ text: 'OK', onPress: () => console.log('OK Pressed') }],
              { cancelable: false }
              );
            navigation.navigate('Home' as never);
            };
            // console.log(data);
            // navigation.navigate('Home' as never);
          })
          .catch ((error) => {
            console.log(error);
              Alert.alert(
                'Mensaje',
                'Error al iniciar sesion',
                [{ text: 'OK', onPress: () => console.log('OK Pressed') }],
                { cancelable: false }
              
            );
          });
        }}/>
      <NormalText>Don't have an account?</NormalText>
      <TouchableOpacity onPress={() => navigation.navigate('Register' as never)}>
        <Register>Register!</Register>
      </TouchableOpacity>
      <StatusBar style="auto" /> 
    </MainContainer>
  )
}

const styles = StyleSheet.create({
  TextInput:{
    borderWidth: 2,
    borderColor: 'gray',
    padding: 10,
    paddingStart: 30,
    width: '80%',
    height: 50,
    marginTop: 20,
    borderRadius: 30,
    backgroundColor: '#fff'
  },
});

export default LoginScreen;

