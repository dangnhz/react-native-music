import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';

import Screen from '../components/Screen';

const LandingScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Example Demos</Text>
      <TouchableOpacity onPress={() => navigation.navigate('Playlist')}>
        <Text>Playlist Example</Text>
      </TouchableOpacity>
    </View>
  );
};

export default LandingScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  header: {
    fontSize: 20,
    marginTop: 20,
    marginBottom: 10,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
