import React from 'react';
import {View, Text, Image, StyleSheet, SafeAreaView, TouchableOpacity} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import AuthStack from './src/navigation/AuthStack';
import AppStack from './src/navigation/AppStack';


const App = () => {
  return (
    <NavigationContainer>
      {/* <AuthStack /> */}
      <AppStack />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#AAC0FA',
    //backgroundColor: 'white',
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
  },
});

export default App;

