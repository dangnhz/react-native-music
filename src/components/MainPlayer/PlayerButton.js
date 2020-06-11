import React from 'react';
import {View, Text} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/AntDesign';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import styled from 'styled-components';

import TrackPlayer, {
  useTrackPlayerProgress,
  usePlaybackState,
  useTrackPlayerEvents,
} from 'react-native-track-player';

const ButtonShadow = styled.TouchableOpacity`
  box-shadow: 0px 5px 5px rgba(252, 192, 28, 0.5);
`;

export const PlayPause = props => {
  const playbackState = usePlaybackState();
  return (
    <ButtonShadow onPress={props.onTogglePlayback}>
      {playbackState === TrackPlayer.STATE_PLAYING ? (
        <Icon name="pausecircle" {...props} />
      ) : (
        <Icon name="play" {...props} />
      )}
    </ButtonShadow>
  );
};

export const Previous = props => {
  return (
    <TouchableOpacity onPress={props.onPrevious}>
      <Icon name="banckward" {...props} />
    </TouchableOpacity>
  );
};

export const Next = props => {
  return (
    <TouchableOpacity onPress={props.onNext}>
      <Icon name="forward" {...props} />
    </TouchableOpacity>
  );
};

export const Like = props => {
  return (
    <TouchableOpacity>
      <Icon name="hearto" {...props} />
      {/* <Icon name="heart" size={50} color="black" /> */}
    </TouchableOpacity>
  );
};

export const Repeat = props => {
  return (
    <TouchableOpacity>
      <MaterialIcons name="repeat" {...props} />
      {/* <MaterialIcons name="repeat1" size={50} color="black" /> */}
    </TouchableOpacity>
  );
};
