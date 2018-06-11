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

import TabRootStack from './src/index';

type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
      <TabRootStack />
    );
  }
}