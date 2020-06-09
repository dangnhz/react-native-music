/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, Text} from 'react-native';

const SongDuration = props => {
  return (
    <View
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        flexDirection: 'row',
        marginTop: 5,
      }}>
      <Text>00:00</Text>
      <Text>05:01</Text>
    </View>
  );
};

export default SongDuration;
