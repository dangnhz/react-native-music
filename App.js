import 'react-native-gesture-handler';
import * as React from 'react';
import {View, Text, Button, StatusBar} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/AntDesign';
const myIcon = <Icon name="home" size={30} color="#900" />;
import {MainStack} from './src/router/router';

export default function App() {
  return (
    <NavigationContainer>
      <MainStack />
    </NavigationContainer>
  );
}
