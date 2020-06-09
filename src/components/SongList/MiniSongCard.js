import React from 'react';
import {View, Image} from 'react-native';
import styled from 'styled-components';
import SongTitle from '../MainPlayer/SongTitle';
import Artist from '../MainPlayer/Artist';

const CardWrapper = styled.TouchableOpacity`
  height: 80px;
  width: 100%
  display: flex;
  flex-direction: row;
  align-items: center; 
`;

const CardImage = styled.Image`
  height: 60px;
  width: 60px;
  border-radius: 20px;
  margin-right: 20px;
`;

const MiniSongCard = props => {
  const image = {
    uri:
      'https://images.unsplash.com/photo-1504898770365-14faca6a7320?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
  };
  return (
    <CardWrapper>
      <CardImage source={image} />
      <View>
        <SongTitle title="Love your self" />
        <Artist title="Danny" />
      </View>
    </CardWrapper>
  );
};

export default MiniSongCard;
