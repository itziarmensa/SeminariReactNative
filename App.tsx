import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import MainContainer from './components/Containers/MainContainer';
import HomeScreen from './components/Screens/HomeScreen';
import LoginScreen from './components/Screens/LoginScreen';
import RegisterScreen from './components/Screens/RegisterScreen';
// import { StyleSheet, Text, View, TextInput, Alert, TouchableOpacity } from 'react-native';

const Stack=createStackNavigator();
/*const Tab=createBottomTabNavigator();*/

/*function MainTabNavigator(){
  return(
    <Tab.Navigator>
      <Tab.Screen name="Login" component={LoginScreen}/>
      <Tab.Screen name="Register" component={RegisterScreen}/>
    </Tab.Navigator>
  );
}*/

function App(){
  return(
    <NavigationContainer>
      <Stack.Navigator>
      <Stack.Screen name='Login' component={LoginScreen} />
      <Stack.Screen name="Home" component={HomeScreen}/>
        <Stack.Screen name='Register' component={RegisterScreen} />
        
      </Stack.Navigator>
    </NavigationContainer>
  );
}
export default App;
