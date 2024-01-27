/* eslint-disable react/no-unstable-nested-components */
import {View, Text, StyleSheet} from 'react-native';
import React, {useState} from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import MyTabBar from './CustomTabBar';

const Tab = createMaterialTopTabNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      tabBar={props => <MyTabBar {...props} />}>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Payment" component={PaymentScreen} />
      <Tab.Screen name="Explore" component={ExploreScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
      <Tab.Screen name="Setting" component={SettingScreen} />
      <Tab.Screen name="Security" component={SecurityScreen} />
    </Tab.Navigator>
  );
};

function HomeScreen() {
  return (
    <View style={style.container}>
      <Text style={style.text}>Home</Text>
    </View>
  );
}
function PaymentScreen() {
  return (
    <View style={style.container}>
      <Text style={style.text}>Payment</Text>
    </View>
  );
}
function ExploreScreen() {
  return (
    <View style={style.container}>
      <Text style={style.text}>Explore</Text>
    </View>
  );
}
function ProfileScreen() {
  return (
    <View style={style.container}>
      <Text style={style.text}>Profile</Text>
    </View>
  );
}
function SettingScreen() {
  return (
    <View style={style.container}>
      <Text style={style.text}>Setting</Text>
    </View>
  );
}
function SecurityScreen() {
  return (
    <View style={style.container}>
      <Text style={style.text}>Security</Text>
    </View>
  );
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  text: {
    color: '#000',
    fontSize: 30,
  },
});

export default TabNavigator;
