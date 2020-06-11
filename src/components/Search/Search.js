import React from 'react';
import {View, Text} from 'react-native';
import SearchInput from './SearchInput';
import SuggestQueries from './SuggestQueries';
import MiniVideoList from '../SongList/MiniVideoList';

import {useSelector, useDispatch} from 'react-redux';

const Search = () => {
  const searchResults = useSelector(state => state.search.searchResults);
  const suggestQueries = useSelector(state => state.search.suggestQueries);
  const isSearching = useSelector(state => state.search.isSearching);
  return (
    <View style={{flex: 1}}>
      <SearchInput />
      {isSearching && <Text> Loading...</Text>}
      {!isSearching && suggestQueries.length > 0 && <SuggestQueries />}
      {suggestQueries.length === 0 && <MiniVideoList data={searchResults} />}
    </View>
  );
};

export default Search;
