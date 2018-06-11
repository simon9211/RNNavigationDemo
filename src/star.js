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
  Image,
} from 'react-native';

 export default class Star extends React.Component {
    static defaultProps = {
        value:"35",
        width: 12,
        height: 12
     };
    static propTypes = {
        value: React.PropTypes.string.isRequired,
    };

    constructor(props) {
        super(props);
    };

    _starsRender = (props) => {
        const { value, width, height } = props;
        const results = [];
        let flag = true;
        if (value == "00") {
            return <Text style={styles.smallFont}>暂无评分</Text>;
        }

        for (let i = 0; i < 5; i++) {
            if (i < value[0]) {
                results.push(<Image key={i} style={{width: width, height: height}} source={require('./resource/star-full.png')}/>);
            } else {
                if (flag && value[1] == '5') {
                    flag = false;
                    results.push(<Image key={i} style={{width: width, height: height}} source={require('./resource/star-half.png')}/>);
                } else {
                    results.push(<Image key={i} style={{width: width, height: height}} source={require('./resource/star-empty.png')}/>);
                }
            }   
        }
        return results;
    }

    render() {
        return (
          <View style={{flexDirection: 'row'}}>
            {this._starsRender(this.props)}
          </View>
        ); 
    }
  }

  const styles = StyleSheet.create({
    smallFont: {
      lineHeight: 20,
      color: '#a6a6a6',
      fontSize: 12
    },
    star:{
        marginRight: 2,
    }
  })