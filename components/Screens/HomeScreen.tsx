import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

const Tab = createMaterialTopTabNavigator();

function HomeScreen() {
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

function Tab1Screen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Contenido de la Tab 1</Text>
    </View>
  );
}

function Tab2Screen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Contenido de la Tab 2</Text>
    </View>
  );
}

function Tab3Screen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Contenido de la Tab 3</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 10,
    backgroundColor: 'lightblue',
  },
  headerText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default HomeScreen
