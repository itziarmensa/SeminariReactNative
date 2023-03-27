import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Animated } from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

const Tab = createMaterialTopTabNavigator();

function Test2HomeScreen() {
  const [animation] = useState(new Animated.ValueXY({ x: 0, y: 0 }));

  const handlePressIn = () => {
    Animated.spring(animation, {
      toValue: { x: Math.random() * 300, y: Math.random() * 500 },
      useNativeDriver: false,
    }).start();
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Test Home Screen</Text>
      <TouchableOpacity
        style={styles.button}
        onPressIn={handlePressIn}
        activeOpacity={0.7}
      >
        <Animated.Text
          style={[
            styles.buttonText,
            {
              transform: [
                { translateX: animation.x },
                { translateY: animation.y },
              ],
            },
          ]}
        >
          Press me!
        </Animated.Text>
      </TouchableOpacity>
    </View>
  );
}

function Tab1Screen() {
  const [animation] = useState(new Animated.ValueXY({ x: 0, y: 0 }));

  const handlePressIn = () => {
    Animated.spring(animation, {
      toValue: { x: Math.random() * 200, y: Math.random() * 400 },
      useNativeDriver: false,
    }).start();
  };

  return (
    <View style={styles.tabContainer}>
      <Text style={styles.tabTitle}>Contenido de la Tab 1</Text>
      <TouchableOpacity
        style={styles.tabButton}
        onPressIn={handlePressIn}
        activeOpacity={0.7}
      >
        <Animated.Text
          style={[
            styles.tabButtonText,
            {
              transform: [
                { translateX: animation.x },
                { translateY: animation.y },
              ],
            },
          ]}
        >
          Mueve este botón!
        </Animated.Text>
      </TouchableOpacity>
    </View>
  );
}

function Tab2Screen() {
  return (
    <View style={styles.tabContainer}>
      <Text style={styles.tabTitle}>Contenido de la Tab 2</Text>
    </View>
  );
}

function Tab3Screen() {
  return (
    <View style={styles.tabContainer}>
      <Text style={styles.tabTitle}>Contenido de la Tab 3</Text>
    </View>
  );
}

function test2HomeScreen() {
  return (
    <View style={{ flex: 1 }}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Texto 1</Text>
        <Text style={styles.headerText}>Texto 2</Text>
      </View>
      <Tab.Navigator>
        <Tab.Screen name="Tab1" component={Tab1Screen} />
        <Tab.Screen name="Tab2" component={Tab2Screen} />
        <Tab.Screen name="Tab3" component={Tab3Screen} />
      </Tab.Navigator>
    </View>
  );
}

const styles = StyleSheet.create({
        container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        },
        title: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 20,
        },
        button: {
        backgroundColor: 'blue',
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 5,
        },
        buttonText: {
        color: 'white',
        fontWeight: 'bold',
        },
        tabContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        },
        tabTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 20,
        },
        tabButton: {
        backgroundColor: 'red',
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 5,
        },
        tabButtonText: {
        color: 'black',
        fontWeight: 'bold',
        },
        header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: 'gray',
        paddingHorizontal: 20,
        paddingVertical: 10,
        },
        headerText: {
        color: 'white',
        fontWeight: 'bold',
        },
        });
        
        export default test2HomeScreen;
