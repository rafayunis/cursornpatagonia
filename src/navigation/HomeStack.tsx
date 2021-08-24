const {createNativeStackNavigator} = require('@react-navigation/native-stack');
import React from 'react';
import {ExperimentalScreen, HomeScreen} from '../screens';
// import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

const HomeStack = () => (
  <Stack.Navigator initialRouteName="Home" screenOptions={{headerShown: false}}>
    <Stack.Screen name="Experimental" component={ExperimentalScreen} />
    <Stack.Screen name="Home" component={HomeScreen} />
  </Stack.Navigator>
);

export default HomeStack;
