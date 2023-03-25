import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient'; //es para tener un degradado


export default function ButtonGradient () {
    return(
        <TouchableOpacity style = {styles.container}>
            <LinearGradient
                colors={['#FF8677', '#FF3C8D']}
                start = {{x: 1, y: 0}}
                end = {{x: 0, y: 1}}
                style = {styles.button}>
                <Text style = {styles.text}>SIGN IN</Text>
            </LinearGradient>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    container: {
        width: 200,
        alignItems: 'center',
        marginTop: 60,
    },

    button: {
        height: 50,
        borderRadius: 25,
        padding: 10,
        alignItems: 'center',
        justifyContent: 'center',
    },

    text: {
        fontSize: 14,
        color: 'white',
        fontWeight: 'bold',
    }
});