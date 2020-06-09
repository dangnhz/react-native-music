import React from 'react';
import {FlatList, SafeAreaView} from 'react-native';
import styled from 'styled-components';
import MiniSongCard from './MiniSongCard';

const DATA = [
  {
    id: 'bd7acbea-css1b1-46c2-aed5-3ad53abb28ba',
    title: 'First Itsem',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'Second Item',
  },
  {
    id: '58694a0f-3da1-471fs-bd96-145571e29d72',
    title: 'Third Item',
  },
  {
    id: '58694a0f-3wwwda1-471f-ssbd96-145571e29d7',
    title: 'Third Item',
  },
  {
    id: '58694a0f-3da1-471f-bda96-145571e9d72',
    title: 'Third Item',
  },
  {
    id: '58694qa0fa-3da1-471f-bd96-14551e29d72',
    title: 'Third Item',
  },
  {
    id: '58694a0f-3dsas1-471f-bd96-15571e29d72',
    title: 'Third Item',
  },
  {
    id: '58694a0f-3da1-471ssaf-bd96-14s571e29d72',
    title: 'Third Item',
  },
  {
    id: '58694a0f-3da1-4dsff1f-bd96-14571e29d72',
    title: 'Third Item',
  },
  {
    id: '5869qq4a0f-3da1-47a1f-bd96-14571e29d72',
    title: 'Third Item',
  },
  {
    id: '5869dd4a0f-3da1-sss471ggf-bd96-14571e29d72',
    title: 'Third Item',
  },
  {
    id: '58694ad0sf-3da1-471f-bd96-14571e29d72',
    title: 'Third Item',
  },
  {
    id: '58694ad0f-d3da1-471f-bd96-14571e29d72',
    title: 'Third Item',
  },
  {
    id: '58694a0f-3ddddag1-471f-bd96-14571e29d72',
    title: 'Third Item',
  },
];

const MiniSongList = () => {
  return (
    <SafeAreaView>
      <FlatList
        data={DATA}
        renderItem={({item}) => <MiniSongCard title={item.id} />}
        keyExtractor={item => item.id}
      />
    </SafeAreaView>
  );
};

export default MiniSongList;
