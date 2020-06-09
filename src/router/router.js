import * as React from 'react';
import {View, Text, Button, StatusBar} from 'react-native';

import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import HomeScreen from '../screens/HomeScreen';
import SearchScreen from '../screens/SearchScreen';
import FavoriteScreen from '../screens/FavoriteScreen';
import MainPlayer from '../screens/MainPlayer';

const BottomTab = createBottomTabNavigator();

const BottomTabBar = () => {
  return (
    <BottomTab.Navigator>
      <BottomTab.Screen name="Home" component={HomeScreen} />
      <BottomTab.Screen name="Search" component={SearchScreen} />
      <BottomTab.Screen name="Favorite" component={FavoriteScreen} />
    </BottomTab.Navigator>
  );
};

const Stack = createStackNavigator();

export const MainStack = () => {
  return (
    <Stack.Navigator mode="modal">
      <Stack.Screen name="root" component={BottomTabBar} />
      <Stack.Screen name="MainPlayer" component={MainPlayer} />
    </Stack.Navigator>
  );
};
