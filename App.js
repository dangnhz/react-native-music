import 'react-native-gesture-handler';
import * as React from 'react';
import {View, Text, Button, StatusBar, Dimensions} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import TrackPlayerScreen from './src/screens/TrackPlayerScreen';
import {BottomTab} from './src/router/router';

import {Provider, useSelector} from 'react-redux';
import store from './src/redux/store';

import TrackPlayer from 'react-native-track-player';

const WIDTH = Dimensions.get('window').width;
export default function App() {
  const [showPlayer, setShowPlayer] = React.useState(false);

  const closePlayer = async () => {
    // await TrackPlayer.reset();
    setShowPlayer(false);
  };
  return (
    <Provider store={store}>
      <View style={{flex: 1}}>
        <NavigationContainer>
          <BottomTab />
          <View
            style={{
              position: 'absolute',
              width: WIDTH,
              height: 300,
              bottom: 300,
              backgroundColor: 'white',
            }}>
            <Button title="open" onPress={() => setShowPlayer(true)} />
            <Button title="close" onPress={closePlayer} />
            {showPlayer && <TrackPlayerScreen />}
          </View>
        </NavigationContainer>
      </View>
    </Provider>
  );
}
