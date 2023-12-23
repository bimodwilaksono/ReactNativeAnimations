import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from '../screens/home';
import Basic from '../screens/basic';
import Opacity from '../screens/basic/opacity';

const Stack = createNativeStackNavigator();

export default function AppStack() {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Basic" component={Basic} />
      <Stack.Screen name="Opacity" component={Opacity} />
    </Stack.Navigator>
  );
}
