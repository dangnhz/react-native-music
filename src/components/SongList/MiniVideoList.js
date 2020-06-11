import React from 'react';
import {FlatList, View} from 'react-native';
import styled from 'styled-components';
import MiniVideoCard from './MiniVideoCard';

const MiniVideoList = ({data}) => {
  return (
    <View style={{flex: 1, backgroundColor: 'white'}}>
      <FlatList
        data={data}
        renderItem={({item}) => <MiniVideoCard video={item} />}
        keyExtractor={item => item.id}
      />
    </View>
  );
};

export default MiniVideoList;
