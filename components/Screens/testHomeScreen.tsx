import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Animated } from 'react-native';

function TestHomeScreen() {
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
    width: 100,
    height: 50,
    backgroundColor: '#f00',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    color: '#',
  },
});

export default TestHomeScreen;
