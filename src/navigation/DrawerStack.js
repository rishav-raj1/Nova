import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer';
import DetailScreen from '../screens/Details/DetailScreen';
import AppStack from './AppStack';
import HomeScreen from '../screens/Home/HomeScreen';

const Drawer = createDrawerNavigator();

const DrawerStack = () => {
  return (
    <Drawer.Navigator screenOptions={{headerShown:false}}>
        
        <Drawer.Screen name="Home2" component={AppStack} />
        <Drawer.Screen name="Detail" component={DetailScreen} />
      </Drawer.Navigator>
  )
}

export default DrawerStack

