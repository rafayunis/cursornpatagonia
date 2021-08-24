import React from 'react';
// import { NavigationContainer } from '@react-navigation/native';
// Workaround to not let TypeScript analyze this library
const {NavigationContainer} = require('@react-navigation/native');
import MainNavigator from './src/navigation/MainNavigator';

import Config from 'react-native-config';

import {navigationRef} from './src/navigation/controls';

const App = () => {
  console.log(Config.API_URL);
  return (
    <NavigationContainer ref={navigationRef}>
      <MainNavigator />
    </NavigationContainer>
  );
};

export default App;
