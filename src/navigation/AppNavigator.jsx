/* eslint-disable prettier/prettier */
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from '../screens/home';
import Basic from '../screens/basic';
import Opacity from '../screens/basic/opacity';
import MainTabBar from '../screens/tabBar';
import TabNavigator from '../screens/tabBar/TabNavigator';

const Stack = createNativeStackNavigator();

export default function AppStack() {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Basic" component={Basic} />
      <Stack.Screen name="Opacity" component={Opacity} />
      <Stack.Screen name="TabBar" component={MainTabBar} />
      <Stack.Screen name="TabNavigator" component={TabNavigator} options={{headerShown: false}} />
    </Stack.Navigator>
  );
}
