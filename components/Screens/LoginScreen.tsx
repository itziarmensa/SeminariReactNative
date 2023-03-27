import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, TextInput, Alert, TouchableOpacity, ToastAndroid } from 'react-native';
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
      <Title>Hello!</Title>
      <SubTitle>Sign in with your account</SubTitle>
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
        secureTextEntry={true}
        />   
      <NormalText>Forgot your password?</NormalText>
      <ButtonGradient onPress = {() => {
        fetch(('http://192.168.1.82:3002/user/' + inputEmail + '/' + inputPassword), {
            method: 'GET',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
        }).then((response) => response.json())
          .then((data) => {
            if (data.error === "ERROR_GET_USER"){
              Alert.alert(
                'ALERT!',
                'Error logging in...',
                [{ text: 'OK', onPress: () => console.log('OK Pressed') }],
                { cancelable: false }
                );
            }else{
              ToastAndroid.showWithGravityAndOffset(
                'Successful login',
                ToastAndroid.LONG,
                ToastAndroid.BOTTOM,
                25,
                50,
              );
            navigation.navigate('Home' as never);
            };
          })
          .catch ((error) => {
            console.log(error);
              Alert.alert(
                'ALERT!',
                'Error logging in...',
                [{ text: 'OK', onPress: () => console.log('OK Pressed') }],
                { cancelable: false }
            );
          });
        }}/>
      <NormalText>Don't have an account?</NormalText>
      <TouchableOpacity onPress={() => navigation.navigate('Register' as never)}>
        <Register>Sign Up!</Register>
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

