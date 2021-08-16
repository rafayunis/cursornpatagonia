import React from 'react';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import {HistoryScreen, HomeScreen} from '../screens';

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="HomeTab" component={HomeScreen} />
      <Tab.Screen name="History" component={HistoryScreen} />
    </Tab.Navigator>
  );
};

export default TabNavigator;
