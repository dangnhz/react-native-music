/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, StatusBar, Button, Text} from 'react-native';
import Header from '../components/Header';
import {useNavigation} from '@react-navigation/native';
import styled from 'styled-components';
import Artwork from '../components/MainPlayer/Artwork';
import SongTitle from '../components/MainPlayer/SongTitle';
import Artist from '../components/MainPlayer/Artist';
import ProgressSlider from '../components/MainPlayer/ProgressSlider';
import SongDuration from '../components/MainPlayer/SongDuration';
import Controller from '../components/MainPlayer/Controller';
import UpNext from '../components/MainPlayer/UpNext';
import {ScrollView} from 'react-native-gesture-handler';

const PlayerWrapper = styled.View`
  flex: 1;
  background: white;
  border-top-right-radius: 40px;
  border-top-left-radius: 40px;
  padding: 0 20px;
`;

const MainPlayer = () => {
  const navigation = useNavigation();
  return (
    <View style={{flex: 1, backgroundColor: '#fcc01c'}}>
      <StatusBar barStyle="light-content" />
      <Header background="#fcc01c" color="white" title="Now Playing" />
      <PlayerWrapper>
        <Artwork />
        <ScrollView showsVerticalScrollIndicator={false}>
          <SongTitle title="Shape of you" />
          <Artist title="Ed Sheeran" />
          <ProgressSlider />
          <SongDuration />
          <Controller />
          <UpNext />
          {/* <Button title="Back" onPress={() => navigation.navigate('Root')} /> */}
        </ScrollView>
      </PlayerWrapper>
    </View>
  );
};

export default MainPlayer;
