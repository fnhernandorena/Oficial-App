import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, View } from 'react-native';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Header from './src/components/Header';
import HomePage from './src/pages/HomePage';
import Example01 from './src/pages/Example01';
import Example02 from './src/pages/Example02';
import Example03 from './src/pages/Example03';
import Example04 from './src/pages/Example04';
import Example05 from './src/pages/Example05';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <SafeAreaView style={styles.container}>
        <View style={styles.innerContainer}>
          <Header />
          <View style={styles.pages}>
          <Tab.Navigator>
            <Tab.Screen name="Home" component={HomePage}/>
            <Tab.Screen name="Example 01" component={Example01} />
            <Tab.Screen name="Example 02" component={Example02} />
            <Tab.Screen name="Example 03" component={Example03} />
            <Tab.Screen name="Example 04" component={Example04} />
            <Tab.Screen name="Example 05" component={Example05} />
          </Tab.Navigator></View>
          <StatusBar style="auto" />
        </View>
      </SafeAreaView>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
  },
  innerContainer: {
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
  },
  pages: {flex:1, width: '100%', height: '100%'
  }
});