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
  Image
} from 'react-native';

 export default class FindMovieScreen extends React.Component {
    render() {
        return (
          <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>FindMovieScreen!</Text>
            <Button 
                title="go to Home"
                //onPress={() => this.props.navigation.navigate('Home')}
            />
            <Button 
                title="go to Detail"
                //onPress={() => this.props.navigation.navigate('Detail')}
            />
          </View>
        );
    };
}
