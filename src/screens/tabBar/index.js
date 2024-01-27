import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import MaterialCommunityIcon from 'react-native-vector-icons/MaterialCommunityIcons';

const DATA = [
  {
    id: 1,
    name: 'Home',
    icon: 'home',
  },
  {
    id: 2,
    name: 'Payment',
    icon: 'credit-card-outline',
  },
  {
    id: 3,
    name: 'Explore',
    icon: 'card-search',
  },
  {
    id: 4,
    name: 'Profile',
    icon: 'account',
  },
  {
    id: 5,
    name: 'Setting',
    icon: 'account-settings',
  },
  {
    id: 6,
    name: 'Security',
    icon: 'security',
  },
];

const MainTabBar = () => {
  const navigation = useNavigation();
  const handlePress = nav => {
    navigation.navigate('TabNavigator', {
      screen: nav,
    });
  };
  return (
    <View style={style.container}>
      {DATA.map(item => {
        return (
          <TouchableOpacity
            key={item.id}
            style={style.button}
            onPress={() => handlePress(item.name)}>
            <MaterialCommunityIcon name={item.icon} size={16} color="#000" />
            <Text style={style.text}>{item.name}</Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    gap: 10,
    flexWrap: 'wrap',
    marginVertical: 100,
  },
  button: {
    alignItems: 'center',
    borderColor: '#000',
    borderWidth: 1,
    padding: 10,
    borderRadius: 10,
  },
  text: {
    color: 'black',
  },
});

export default MainTabBar;
