import React from 'react';
import {View, Text} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/AntDesign';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import styled from 'styled-components';

const ButtonShadow = styled.TouchableOpacity`
  box-shadow: 0px 5px 5px rgba(252, 192, 28, 0.5);
`;

export const PlayPause = props => {
  return (
    <ButtonShadow>
      <Icon name="play" {...props} />
      {/* <Icon name="pausecircle" {...props} /> */}
    </ButtonShadow>
  );
};

export const Previous = props => {
  return (
    <TouchableOpacity>
      <Icon name="banckward" {...props} />
    </TouchableOpacity>
  );
};

export const Next = props => {
  return (
    <TouchableOpacity>
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
