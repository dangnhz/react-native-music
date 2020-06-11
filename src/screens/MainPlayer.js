/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {View, StatusBar, Button, Text} from 'react-native';
import Header from '../components/Header';
import {useNavigation} from '@react-navigation/native';
import styled from 'styled-components';
import Artwork from '../components/MainPlayer/Artwork';
import VideoTitle from '../components/MainPlayer/VideoTitle';
import Artist from '../components/MainPlayer/Artist';
import ProgressSlider from '../components/MainPlayer/ProgressSlider';
import VideoDuration from '../components/MainPlayer/VideoDuration';
import Controller from '../components/MainPlayer/Controller';
import UpNext from '../components/MainPlayer/UpNext';
import {ScrollView} from 'react-native-gesture-handler';

import TrackPlayer, {
  useTrackPlayerProgress,
  usePlaybackState,
  useTrackPlayerEvents,
} from 'react-native-track-player';

const PlayerWrapper = styled.View`
  flex: 1;
  background: white;
  border-top-right-radius: 40px;
  border-top-left-radius: 40px;
  padding: 0 20px;
`;

const MainPlayer = props => {
  const progress = useTrackPlayerProgress();
  const playbackState = usePlaybackState();
  const [trackTitle, setTrackTitle] = useState('');
  const [trackArtwork, setTrackArtwork] = useState();
  const [trackArtist, setTrackArtist] = useState('');

  useTrackPlayerEvents(['playback-track-changed'], async event => {
    if (event.type === TrackPlayer.TrackPlayerEvents.PLAYBACK_TRACK_CHANGED) {
      const track = await TrackPlayer.getTrack(event.nextTrack);
      const {title, artist, artwork} = track || {};
      setTrackTitle(title);
      setTrackArtist(artist);
      setTrackArtwork(artwork);
    }
  });

  return (
    <View style={{flex: 1, backgroundColor: '#fcc01c'}}>
      <StatusBar barStyle="light-content" />
      <Header background="#fcc01c" color="white" title="Now Playing" />
      <PlayerWrapper>
        {/* <Artwork trackArtwork={trackArtwork} /> */}
        <View showsVerticalScrollIndicator={false}>
          <VideoTitle title={trackTitle} />
          <Artist title={trackArtist} />
          {/* <ProgressSlider /> */}
          <VideoDuration trackProgress={progress} />
          <Controller {...props} />
          <UpNext />
        </View>
      </PlayerWrapper>
    </View>
  );
};

export default MainPlayer;
