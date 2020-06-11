import React, {useState} from 'react';
import {View, Text} from 'react-native';
import styled from 'styled-components';
import MiniVideoList from '../SongList/MiniVideoList';
import {Switch} from 'react-native-gesture-handler';

const FlexContainer = styled.View`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 15px;
`;

const UpNext = () => {
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);
  return (
    <View>
      <FlexContainer>
        <Text style={{fontSize: 16}}>UP NEXT</Text>
        <View
          style={{display: 'flex', flexDirection: 'row', alignItems: 'center'}}>
          <Text style={{fontSize: 16, marginRight: 10}}>AUTO PLAY</Text>
          <Switch
            trackColor={{false: '#767577', true: '#f5dd4b'}}
            thumbColor={isEnabled ? '#f4f3f4' : '#f4f3f4'}
            ios_backgroundColor="#3e3e3e"
            onValueChange={toggleSwitch}
            value={isEnabled}
          />
        </View>
      </FlexContainer>

      <MiniVideoList />
    </View>
  );
};

export default UpNext;
