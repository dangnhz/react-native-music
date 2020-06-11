/* eslint-disable react-native/no-inline-styles */
import React from 'react';

import {View, FlatList, Text} from 'react-native';

import styled from 'styled-components';
import Icon from 'react-native-vector-icons/AntDesign';
import {useDispatch, useSelector} from 'react-redux';
import {TouchableOpacity} from 'react-native-gesture-handler';

import {
  setSearchQuery,
  searchYouTubeAction,
} from '../../redux/actions/searchActions';

const QueryItem = ({query}) => {
  const dispatch = useDispatch();
  const handleSearch = query => {
    dispatch(setSearchQuery(query));
    dispatch(searchYouTubeAction(query));
  };
  return (
    <TouchableOpacity
      onPress={() => handleSearch(query)}
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        height: 50,
        marginHorizontal: 15,
      }}>
      <Icon name="search1" size={20} color="black" />
      <Text style={{fontSize: 18, lineHeight: 18, marginLeft: 10}}>
        {query}
      </Text>
    </TouchableOpacity>
  );
};

const SuggestQueries = () => {
  const data = useSelector(state => state.search.suggestQueries);
  return (
    <View style={{flex: 1}}>
      <FlatList
        data={data}
        renderItem={({item}) => <QueryItem query={item} />}
        keyExtractor={item => item}
      />
    </View>
  );
};

export default SuggestQueries;
