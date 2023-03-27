import { StatusBar } from 'expo-status-bar'; //Esto es lo que tenemos arriba del móvil, la hora la carga, etc. 
import React, { useState } from 'react';
import { StyleSheet, TextInput, Alert, TouchableOpacity } from 'react-native';
import ButtonGradientRegister from '../Buttons/ButtonGradientRegister';
import MainContainer from '../Containers/MainContainer';
import SubTitle from '../Texts/Subtitle';
import Title from '../Texts/Title';
import { useNavigation } from '@react-navigation/native';

export default function RegisterScreen() {
  
  const [inputName, setInputName] = useState('');
  const [inputSurname, setInputSurname] = useState('');
  const [inputEmail, setInputEmail] = useState('');
  const [inputPassword, setInputPassword] = useState('');

  const navigation = useNavigation();

  const data = { error: "ERROR_POST_USER" };



  return (
    <MainContainer>
    <Title>Register</Title>
    <SubTitle>Register to have a new account</SubTitle>
    <TextInput
          placeholder='Name'
          style={styles.TextInput}
          value={inputName}
          onChangeText={setInputName}
          />
    <TextInput
          placeholder='Surname'
          style={styles.TextInput}
          value={inputSurname}
          onChangeText={setInputSurname}         
          />
    <TextInput
          placeholder='Mail'
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
  
    <ButtonGradientRegister onPress={() => {            
            fetch('http://192.168.1.47:3002/user', {
              method: 'POST',
              headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
              },
                body: JSON.stringify({
                  name: inputName,
                  surname: inputSurname,
                  email: inputEmail,
                  password:inputPassword,
                }),
            }).then((response) => response.json())
              .then((data) => {               
                console.log(data);
                if (data.error === "ERROR_POST_USER"){
                  Alert.alert(
                    'Mensaje',
                    'Error al registrarte',
                    [{ text: 'OK', onPress: () => console.log('OK Pressed') }],
                    { cancelable: false }
                    );
                }else{
                  console.log("no he pillao el error bien")
                  Alert.alert(
                  'Mensaje',
                  'Te has regsitrado con exito',
                  [{ text: 'OK', onPress: () => console.log('OK Pressed') }],
                  { cancelable: false }
                  );
                navigation.navigate('Login' as never);
                };                                 
                
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

