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
  Dimensions,
  TouchableOpacity,
  FlatList,
  ActivityIndicator
} from 'react-native';

import Star from './star';


 export default class HotList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            ready: true,
            refreshing: false,
            movies: []
        }
    }

    componentDidMount() {
        this._fetchData();
    }

    _fetchData = () => {
        fetch('https://api.douban.com/v2/movie/in_theaters')
        .then((response) => {
            this.setState({
                refreshing: false
            });
            return response.json();
        })
        .then((responseText) => {
            let arrData = responseText.subjects;
            let i = 0;
            let arrList = [];
            arrData.map(item => {
                arrList.push({key: i, value: item});
                i++;
            })
            this.setState({movies: arrList, ready: false, refreshing; false});
        }).catch((error) => {
            alert(error.toString());
        });
    }
    
    _refreshDate = () => {
        this.setState({refreshing: true});
        this._fetchData();
    }

    render() {
        return (
          <View>
              {this.state.ready
                ? <ActivityIndicator size='large' style={sty}/>

              }
            <Text>
            MineScreen
            </Text>
          </View>
        ); 
    }
  }

const styles = StyleSheet.create({
    smallFont: {
        lineHeight: 20,
        color: '#A6A6A6',
        fontSize: 12
      },
      loadding: {
        marginTop: 100
      },
      star: {
        width: 12,
        height: 12,
        marginRight: 2
      },
      hotList: {
        height: 130,
        paddingLeft: 18,
        paddingRight: 18,
        flexDirection: 'row',
        alignItems: 'center',
        borderBottomWidth: 1,
        borderBottomColor: '#EFEFEF'
      },
      lastList: {
        borderBottomWidth: 0
      },
      title: {
        fontWeight: '900',
        fontSize: 15
      },
      pay: {
        width: 50,
        height: 25,
        marginLeft: 20,
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth:1,
        borderColor:'#FF4E65',
        borderRadius:5,
      }
})