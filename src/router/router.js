import * as React from 'react';
import Icon from 'react-native-vector-icons/AntDesign';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import HomeScreen from '../screens/HomeScreen';
import SearchScreen from '../screens/SearchScreen';
import FavoriteScreen from '../screens/FavoriteScreen';
import TrackPlayerScreen from '../screens/TrackPlayerScreen';

const Tab = createBottomTabNavigator();

export const BottomTab = () => {
  return (
    <Tab.Navigator
      tabBarOptions={{
        activeTintColor: '#13355B',
        inactiveTintColor: '#C6C6D8',
        showLabel: false,
        tabStyle: {
          marginTop: 20,
        },
        style: {
          backgroundColor: 'white',
          // borderRadius: 50,
        },
      }}
      screenOptions={({route}) => ({
        headerMode: 'none',
        tabBarIcon: ({color, size}) => {
          const icons = {
            Home: 'home',
            Search: 'search1',
            Favorite: 'hearto',
          };

          return <Icon name={icons[route.name]} color={color} size={size} />;
        },
      })}>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          title: 'Home',
        }}
      />
      <Tab.Screen name="Search" component={SearchScreen} />
      <Tab.Screen name="Favorite" component={FavoriteScreen} />
    </Tab.Navigator>
  );
};

// const Stack = createStackNavigator();

// export const AppStack = () => {
//   return (
//     <Stack.Navigator mode="modal" headerMode="none" initialRouteName="Root">
//       <Stack.Screen name="Root" component={BottomTab} />
//       <Stack.Screen
//         name="TrackPlayerScreen"
//         component={TrackPlayerScreen}
//         options={() => ({
//           title: 'Now Playing',
//         })}
//       />
//     </Stack.Navigator>
//   );
// };
