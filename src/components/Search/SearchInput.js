/* eslint-disable react-native/no-inline-styles */
import React, {useState, useRef, useEffect} from 'react';
import {
  View,
  Text,
  TextInput,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import styled from 'styled-components';
import Icon from 'react-native-vector-icons/AntDesign';
import {useNavigation} from '@react-navigation/native';
import {useSelector, useDispatch} from 'react-redux';

import {
  getSuggestSearchQueryAction,
  clearSuggestSearchQuery,
  clearQuery,
  searchYouTubeAction,
  clearSearchYouTubeResult,
} from '../../redux/actions/searchActions';

const SCREEN_WIDTH = Dimensions.get('window').width;
const SCREEN_HEIGHT = Dimensions.get('window').height;

const SearchInput = () => {
  const navigation = useNavigation();
  const queryFromStore = useSelector(state => state.search.query);
  const isSearching = useSelector(state => state.search.isSearching);
  const [isInputFocus, setIsInputFocus] = useState(false);
  const searchInput = useRef(null);
  const dispatch = useDispatch();
  const [searchQuery, setSearchQuery] = useState('');

  const onChangeText = text => {
    setSearchQuery(text);
  };
  const onInPutFocus = () => {
    setIsInputFocus(true);
  };

  const onInPutBlur = () => {
    setIsInputFocus(false);
  };
  const onClearSearch = () => {
    setSearchQuery('');
    dispatch(clearSuggestSearchQuery());
    dispatch(clearQuery());
    dispatch(clearSearchYouTubeResult());
  };

  const onSearchSubmit = e => {
    e.preventDefault();
    dispatch(clearSuggestSearchQuery());
    dispatch(searchYouTubeAction(searchQuery));
    setIsInputFocus(false);
    searchInput.current.blur();
  };

  useEffect(() => {
    if (searchQuery.trim().length > 0 && isInputFocus && !isSearching) {
      dispatch(getSuggestSearchQueryAction(searchQuery.trim()));
    } else if (isInputFocus && searchQuery.trim().length === 0) {
      dispatch(clearSuggestSearchQuery());
      dispatch(clearQuery());
    }
  }, [searchQuery, isSearching, isInputFocus, dispatch]);

  useEffect(() => {
    setSearchQuery(queryFromStore);
  }, [queryFromStore]);

  return (
    <View
      style={{
        width: SCREEN_WIDTH,
        height: 100,
        backgroundColor: '#E91D63',
      }}>
      <View style={{marginTop: 50}}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-around',
            alignItems: 'center',
          }}>
          <TextInput
            style={{
              height: 40,
              width: SCREEN_WIDTH - 100,
              backgroundColor: '#EE5F8E',
              paddingHorizontal: 50,
              borderRadius: 15,
              color: 'white',
            }}
            ref={searchInput}
            blurOnSubmit={true}
            onChangeText={text => onChangeText(text)}
            onSubmitEditing={onSearchSubmit}
            value={searchQuery}
            placeholder="Search"
            placeholderTextColor="white"
            returnKeyType="search"
            onFocus={onInPutFocus}
            onBlur={onInPutBlur}
            autoFocus={false}
            autoCorrect={false}
            autoCapitalize="none"
            //   clearButtonMode="while-editing"
          />
          <TouchableOpacity
            onPress={() => {
              setSearchQuery('');
              navigation.goBack();
            }}>
            <Text style={{color: 'white', fontWeight: 'bold'}}> Cancel</Text>
          </TouchableOpacity>
        </View>
        <Icon
          style={{position: 'absolute', top: 10, left: 30, zIndex: 1}}
          name="search1"
          size={24}
          color="white"
        />

        {searchQuery.length > 0 ? (
          <TouchableOpacity
            onPress={onClearSearch}
            style={{position: 'absolute', top: 12, right: 95}}>
            <Icon name="closecircle" color="white" size={15} />
          </TouchableOpacity>
        ) : null}
      </View>
    </View>
  );
};

export default SearchInput;
