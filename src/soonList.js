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

import MovieCell from './common/movieCell';

 export default class SoonList extends React.Component {
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
        fetch('https://api.douban.com/v2/movie/in_theaters',{
            method: 'GET',
            headers: {
            'Accept': 'application/json',
            'cache-control': 'no-cache',
             }
        })
        .then((response) => response.json())
        .then((responseText) => {
            this.setState({
                refreshing: false
            });
            let arrData = responseText.subjects;
            let i = 0;
            let arrList = [];
            arrData.map(item => {
                arrList.push({key: i, value: item});
                i++;
            })
            this.setState({movies: arrList, ready: false, refreshing: false});
        }).catch((error) => {
            alert(error.toString());
        });
    }
    
    _refreshDate = () => {
        this.setState({refreshing: true});
        this._fetchData();
    }

    render() {
        const {navigate} = this.props.navigation;
        const {movies} = this.state;
        return (
          <View>
              {this.state.ready
                ? <ActivityIndicator size='large' style={styles.loadding}/>
                : <FlatList 
                data={movies}
                onRefresh={this._refreshDate}
                refreshing={this.state.refreshing}
                key={movies.key}
                renderItem={({item}) => {
                    return <MovieCell item={item} moviesCount={movies.length}/>
                }}/>}
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
      }
})