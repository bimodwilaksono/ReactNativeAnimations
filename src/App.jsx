import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import AppStack from './navigation/AppNavigator';
import 'react-native-reanimated';
import 'react-native-gesture-handler';

const App = () => {
  return (
    <NavigationContainer>
      <AppStack />
    </NavigationContainer>
  );
};

export default App;
