/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, Text} from 'react-native';
import {PlayPause, Like, Repeat, Previous, Next} from './PlayerButton';

const Controller = props => {
  const {onNext, onPrevious, onTogglePlayback} = props;
  return (
    <View
      style={{
        display: 'flex',
        height: 100,
        justifyContent: 'space-around',
        alignItems: 'center',
        flexDirection: 'row',
      }}>
      <Repeat size={25} color="#0a2f64" />
      <Previous onPrevious={onPrevious} size={25} color="#0a2f64" />
      <PlayPause
        onTogglePlayback={onTogglePlayback}
        size={70}
        color="#fcc01c"
      />
      <Next onNext={onNext} size={25} color="#0a2f64" />
      <Like size={25} color="#0a2f64" />
    </View>
  );
};

export default Controller;
