import React from 'react';
import {View, Text, Button, StatusBar} from 'react-native';
import Header from '../components/Header';
import {useSelector} from 'react-redux';

const HomeScreen = ({navigation}) => {
  const songlist = useSelector(state => state.search.searchResults);

  return (
    <View style={{flex: 1}}>
      <StatusBar barStyle="light-content" />
      <Header background="#E91D63" color="white" title="Home" />
    </View>
  );
};

export default HomeScreen;
