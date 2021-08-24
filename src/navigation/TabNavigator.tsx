import React from 'react';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {HistoryScreen, HomeScreen} from '../screens';
import {colors} from '../utils/theme';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import {RouteProp} from '@react-navigation/native';

type Route = RouteProp<Record<string, object | undefined>, string>;
const Tab = createBottomTabNavigator();

const getIconName = (routeName: string) => {
  let iconName = '';
  switch (routeName) {
    case 'HomeTab':
      iconName = 'home';
      break;
    case 'History':
      iconName = 'history';
      break;
    default:
      iconName = 'help-outline';
      break;
  }
  return iconName;
};

const navigatorScreenOptions = ({route}: {route: Route}) => ({
  tabBarIcon: ({
    focused,
    color,
    size,
  }: {
    focused: boolean;
    color: string;
    size: number;
  }) => {
    console.log('rute: ', route.name);
    const iconSize = focused ? size * 1.2 : size;
    return (
      <MaterialIcon
        name={getIconName(route.name) || 'help-outline'}
        size={iconSize}
        color={color}
      />
    );
  },
  allowFontScaling: false,
  tabBarActiveTintColor: colors.mainOrange,
  tabBarInactiveTintColor: colors.lightBlue,
  tabBarLabelStyle: {fontSize: 12},
});

const TabNavigator = () => {
  return (
    <Tab.Navigator screenOptions={navigatorScreenOptions}>
      <Tab.Screen
        name="HomeTab"
        component={HomeScreen}
        options={{title: 'Home'}}
      />
      <Tab.Screen name="History" component={HistoryScreen} />
    </Tab.Navigator>
  );
};

export default TabNavigator;
