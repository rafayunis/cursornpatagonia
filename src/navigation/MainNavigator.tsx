const {createNativeStackNavigator} = require('@react-navigation/native-stack');
import React from 'react';
import {ExperimentalScreen} from '../screens';
import AuthStack from './AuthStack';
import TabNavigator from './TabNavigator';

const Stack = createNativeStackNavigator();

const MainNavigator = () => (
  <Stack.Navigator
    initialRouteName="AuthStack"
    screenOptions={{headerShown: false}}>
    <Stack.Screen name="AuthStack" component={AuthStack} />
    <Stack.Screen name="TabNavigator" component={TabNavigator} />
    <Stack.Screen name="Experimental" component={ExperimentalScreen} />
  </Stack.Navigator>
);

export default MainNavigator;
