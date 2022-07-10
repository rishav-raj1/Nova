import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import OnboardinScreen from '../screens/Onboarding/OnboardinScreen';
import LoginScreen from '../screens/Login/LoginScreen';

const Stack = createNativeStackNavigator();

const AuthStack = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown:false}}>
        <Stack.Screen name="OnboardinScreen" component={OnboardinScreen} />
        <Stack.Screen name="Login" component={LoginScreen} />
      </Stack.Navigator>
  )
}

export default AuthStack

const styles = StyleSheet.create({})