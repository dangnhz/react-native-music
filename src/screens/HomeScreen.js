import React from 'react';
import {View, Text, Button, StatusBar} from 'react-native';
import Header from '../components/Header';
import SongList from '../components/SongList/MiniSongList';

const HomeScreen = ({navigation}) => {
  return (
    <View>
      <StatusBar barStyle="light-content" />
      <Header background="#333" color="white" title="Home" />
      <Text>Home</Text>
      <Button
        title="Open Player"
        onPress={() => navigation.navigate('MainPlayer')}
      />
      <SongList />
    </View>
  );
};

export default HomeScreen;
