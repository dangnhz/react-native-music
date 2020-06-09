import React from 'react';
import {View, Text, Button} from 'react-native';

const HomeScreen = ({navigation}) => {
  return (
    <View>
      <Text>Home</Text>
      <Button
        title="Open Player"
        onPress={() => navigation.navigate('MainPlayer')}
      />
    </View>
  );
};

export default HomeScreen;
