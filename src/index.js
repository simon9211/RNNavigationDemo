/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  YellowBox,
  Platform,
  StyleSheet,
  Text,
  View,
  Button,
  Image
} from 'react-native';
import { createStackNavigator, createBottomTabNavigator, createDrawerNavigator } from 'react-navigation';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Icon from 'react-native-vector-icons/FontAwesome';

import MoviesScreen from './movies';
import FindMovieScreen from './findMovie';
import MineScreen from './mine';
import MovieDetailScreen from './movieDetail';

YellowBox.ignoreWarnings(['Warning: isMounted(...) is deprecated', 'Module RCTImageLoader'])
console.ignoredYellowBox = ['Remote debugger','Class RCTCxxModule was not exported.'];
const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

class LogoTitle extends React.Component {
  render() {
    return (
      <View style={{ width: 100, height: 30, flex: 0, backgroundColor: 'red', alignItems:'center'}}> 
        <View style={{flexWrap:'wrap'}}>
          <Image source={ require('./resource/react-navigation.png') }
          style={{  width: 30, height: 30}}
          />
          <Text style={{width: 30, height: 30, color:'white', alignContent:'center'}}>
            title
          </Text>
        </View>
      </View>
    );
  }
}

const MoviesStack = createStackNavigator(
    {
        Movies: MoviesScreen,
        MovieDetail: MovieDetailScreen,
    },
    {
        initialRouteName: 'Movies',
        navigationOptions: {
          headerStyle: {
            backgroundColor: '#ffffff',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }
      }
);

const FindMovieStack = createStackNavigator(
    {
        FindMovie: FindMovieScreen,
        MovieDetail: MovieDetailScreen,
    }
);

const MineStack = createStackNavigator(
    {
        Mine: MineScreen,
        // MineDetail: MovieDetailScreen,
    }
);

const TabRootStack = createBottomTabNavigator(
    {
        Movies: MoviesStack,
        FindMovie: FindMovieStack,
        Mine: MineStack,
    },
    {
        navigationOptions: ({ navigation }) => ({

            tabBarLabel: ({focused, tintColor}) => {
                const routeName  = navigation.state.routeName;
                let routeNameDes;
                if (routeName === 'Movies') {
                    routeNameDes = '热映'
                } else if (routeName === 'FindMovie') {
                    routeNameDes = '找片'
                } else if (routeName === 'Mine') {
                    routeNameDes = '我的'
                }
                return  <Text style={{
                            textAlign:'center',
                            alignContent:'center',
                            alignItems: 'center'
                        }}>{routeNameDes}</Text>
            }
            ,
            tabBarIcon: ({ focused, tintColor }) => {
                const routeName  = navigation.state.routeName;
                let iconName;
                if (routeName === 'Movies') {
                    iconName = require('./resource/tab-movie.png')
                } else if (routeName === 'FindMovie') {
                    iconName =require('./resource/tab-pic.png')
                } else if (routeName === 'Mine') {
                    iconName = require('./resource/tab-mine.png')
                }
                //alert(iconName);
                return <Image 
                            source={iconName}
                            style={[styles.icon, {tintColor: tintColor}]}
                        />;
            },
        }),
        tabBarOptions: {
            activeTintColor: 'tomato',
            inactiveTintColor: 'gray',
            showIcon: true,
        },
    }
);

export default  TabRootStack;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  icon: {
      width: 24,
      height: 24
  },
});
