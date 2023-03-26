import { StatusBar } from 'expo-status-bar'; //Esto es lo que tenemos arriba del móvil, la hora la carga, etc. 
import React, { useState } from 'react';
import { StyleSheet, TextInput, Alert, TouchableOpacity } from 'react-native';
import ButtonGradientRegister from '../Buttons/ButtonGradientRegister';
import MainContainer from '../Containers/MainContainer';
import SubTitle from '../Texts/Subtitle';
import Title from '../Texts/Title';

export default function RegisterScreen() {
  
  const [inputPhone, setInputPhone] = useState('');
  const [inputCountry, setInputCountry] = useState('');
  const [inputEmail, setInputEmail] = useState('');
  const [inputPassword, setInputPassword] = useState('');

  return (
    <MainContainer>
    <Title>Register</Title>
    <SubTitle>Register to have a new account</SubTitle>
    <TextInput
          placeholder='Email'
          style={styles.TextInput}
          value={inputEmail}
          onChangeText={setInputEmail}
          />
    <TextInput
          placeholder='Password'
          style={styles.TextInput}
          value={inputPassword}
          onChangeText={setInputPassword}
          secureTextEntry={true}
          />
    <TextInput
          placeholder='Phone'
          style={styles.TextInput}
          value={inputPhone}
          onChangeText={setInputPhone}
          />
    <TextInput
          placeholder='Country'
          style={styles.TextInput}
          value={inputCountry}
          onChangeText={setInputCountry}
          />
  
    <ButtonGradientRegister onPress={() => {
            
            fetch('http://yourIP:yourPORT/user/insert', {
              method: 'POST',
              headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
              },
                body: JSON.stringify({
                  email: inputEmail,
                  password: inputPassword,
                  phone: inputPhone,
                  country:inputCountry,
                }),
            }).then((response) => response.json())
              .then((data) => {               
                console.log(data);
                Alert.alert(
                  'Mensaje',
                  'Te has regsitrado con exito',
                  [{ text: 'OK', onPress: () => console.log('OK Pressed') }],
                  { cancelable: false }
                  );
              }).catch((error) => {
                  Alert.alert(
                    'Mensaje',
                    'Error al registrarte',
                    [{ text: 'OK', onPress: () => console.log('OK Pressed') }],
                    { cancelable: false }
                    );
                console.error(error);
            });
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

