import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';



import Ionicons from 'react-native-vector-icons/Ionicons';

import DetailScreen from '../screens/Details/DetailScreen';

import TabNavigator from './TabNavigator';

const Drawer = createDrawerNavigator();

const AppStack = () => {
  return (

    <Drawer.Navigator
     
      screenOptions={{
        headerShown: false,
        drawerActiveBackgroundColor: '#aa18ea',
        drawerActiveTintColor: '#fff',
        drawerInactiveTintColor: '#333',
        drawerLabelStyle: {
          marginLeft: -25,
          fontFamily: 'Roboto-Medium',
          fontSize: 15,
        },
      }}>
      <Drawer.Screen
        name="Home"
        component={TabNavigator}
        options={{
          drawerIcon: ({color}) => (
            <Ionicons name="home-outline" size={22} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name="Detail"
        component={DetailScreen}
        options={{
          drawerIcon: ({color}) => (
            <Ionicons name="person-outline" size={22} color={color} />
          ),
        }}
      />
      
    </Drawer.Navigator>
  );
};

export default AppStack;












// import React from 'react'
// import OnboardingScreen from '../screens/Onboarding/OnboardingScreen';
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import { createNativeStackNavigator } from '@react-navigation/native-stack';

// import HomeScreen from '../screens/Home/HomeScreen';
// import ProfileScreen from '../screens/Profile/ProfileScreen';
// import DetailScreen from '../screens/Details/DetailScreen';

// const Tab = createBottomTabNavigator();
// const Stack = createNativeStackNavigator();


// const HomeStack = () => {
//   return (
//     <Stack.Navigator>
//         <Stack.Screen name="Home" component={HomeScreen} options={{headerShown:false}} />
//         <Stack.Screen name="Detail" component={DetailScreen} />
//       </Stack.Navigator>
//   )
// }


// const AppStack = () => {
//   return (
//     <Tab.Navigator screenOptions={{headerShown:false}}>
//         <Tab.Screen name="Home" component={HomeStack} />
//         <Tab.Screen name="Profile" component={ProfileScreen} />
//       </Tab.Navigator>
//   )
// }

// export default AppStack

