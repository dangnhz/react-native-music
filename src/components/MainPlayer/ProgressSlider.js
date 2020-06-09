import React from 'react';
import {Slider, View} from 'react-native';

function ProgressSlider() {
  return (
    <View style={{marginTop: 30}}>
      <Slider
        minimumValue={0}
        maximumValue={100}
        minimumTrackTintColor="#fcc01c"
        maximumTrackTintColor="#EBEDF1"
        thumbTintColor="#fcc01c"
      />
    </View>
  );
}

export default ProgressSlider;
