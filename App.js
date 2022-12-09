import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from "@react-navigation/native";
import { MainStackNavigator } from './src/navigations/StackNavigator';

const App = () => {
  return (
    <NavigationContainer >
      <MainStackNavigator />
    </NavigationContainer>
  )
}

export default App;