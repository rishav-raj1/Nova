import React from 'react'
import OnboardinScreen from '../screens/Onboarding/OnboardinScreen';
import { createDrawerNavigator } from '@react-navigation/drawer';
import HomeScreen from '../screens/Home/HomeScreen';

const Drawer = createDrawerNavigator();

const AppStack = () => {
  return (
    <Drawer.Navigator screenOptions={{headerShown:false}}>
        <Drawer.Screen name="Home" component={HomeScreen} />
      </Drawer.Navigator>
  )
}

export default AppStack

