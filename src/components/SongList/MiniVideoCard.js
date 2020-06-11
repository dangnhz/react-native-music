import React from 'react';
import {View, Image} from 'react-native';
import styled from 'styled-components';
import VideoTitle from '../MainPlayer/VideoTitle';
import Artist from '../MainPlayer/Artist';

import {useDispatch} from 'react-redux';

import {
  setCurrentVideo,
  setUpNextVideos,
  addRecentPlayedVideo,
  removeFavoriteVideo,
} from '../../redux/actions/videoActions';

const CardWrapper = styled.TouchableOpacity`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin: 10px 15px;
`;

const CardImage = styled.Image`
  height: 60px;
  width: 60px;
  border-radius: 20px;
  margin-right: 20px;
`;

const MiniVideoCard = ({video}) => {
  const dispatch = useDispatch();
  const handleSetCurrentVideo = () => {
    dispatch(setCurrentVideo(video));
    dispatch(setUpNextVideos(video.id));
  };
  return (
    <CardWrapper onPress={handleSetCurrentVideo}>
      <CardImage source={{uri: video.artwork}} />
      <View style={{flex: 1}}>
        <VideoTitle title={video.title} />
        <Artist title={video.artist} />
      </View>
    </CardWrapper>
  );
};

export default MiniVideoCard;
