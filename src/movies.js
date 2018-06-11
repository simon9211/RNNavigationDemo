/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button,
  Image,
  Dimensions
} from 'react-native';

import SearchInput from './searchInput';
import ScrollableTabView, { DefaultTabBar } from 'react-native-scrollable-tab-view';

const { width, height } = Dimensions.get('window');

 export default class MoviesScreen extends React.Component {
  static navigationOptions = {
      header: null
  };

  render() {
    return (
    <View style={{ width: width, height: height, paddingTop: 25, backgroundColor:'#fff' }}>
        {/* <SearchInput 
            city={true} 
            navigation = {this.props.navigation}
        /> */}
        {/* <ScrollableTabView
            renderTabBar={() => <DefaultTabBar/> }
            tabBarUnderlineStyle={{
                backgroundColor: '#000',
                height: 2
            }}
            tabBarBackgroundColor='#ffffff'
            tabBarActiveTextColor='#000'
            tabBarInactiveTextColor='#959595'
            tabBarTextStyle={{ fontSize: 14}}
            locked={false}
        >
            <View tabLabel='正在热映' style={{marginBottom: 50}}>

            </View>
            <View tabLabel='即将上映' style={{marginBottom: 50}}>
                
            </View>
        </ScrollableTabView> */}
        <Text>MoviesScreen!</Text>
        <Button 
          title="go to movie detail"
          onPress={() => this.props.navigation.navigate('MovieDetail')}
        />
        {/* <Button 
          title="go to Detail"
          //onPress={() => this.props.navigation.navigate('Detail')}
        /> */}
    </View>
    );
  }
}
