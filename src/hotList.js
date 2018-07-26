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

import HotMovieCell from './common/hotMovieCell';

const movieHotList = 'https://api.douban.com/v2/movie/in_theaters';

let start = 0;
let count = 10;
let total = 0;
 export default class HotList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            ready: true,
            refreshing: false,
            city: '上海',
            showFoot: 0, // // 控制foot， 0：隐藏footer  1：已加载完成,没有更多数据   2 ：显示加载中
            movies: []
        }
    }

    componentDidMount() {
        this._fetchData();
    }

    _fetchData = () => {
        if (this.state.movies.length == total && this.state.movies != 0) {
            alert('no more data')
            this.setState({
                showFoot: 1
            })
            return
        }
        let formData = new FormData();
        formData.append('apikey', '0b2bdeda43b5688921839c8ecb20399b')
        formData.append('city',this.state.city)
        formData.append('client','something')
        formData.append('udid','dddddddddddddddddddddd')
        formData.append('start', start)
        formData.append('count', count)

        fetch(movieHotList, {
            method: 'POST',
            headers: {
            'Accept': 'application/json',
            'Content-Type': 'multipart/form-data',
            },
            body:formData
        })
        .then((Response) => Response.json())
        .then((data) => {
            let arrData = data.subjects;
            let i = this.state.refreshing?0:this.state.movies.length;
            let arrList = this.state.refreshing?[]:this.state.movies;
            arrData.map(item => {
                arrList.push({key: i, value: item});
                i++;
            })
            total = data.total
            this.setState({movies: arrList, ready: false, refreshing: false, refreshing: false, showFoot: 0});
        })
        .catch((error) => {
            alert(error.toString());
        });
    }
    
    _refreshData = () => {
        start = 0;
        this.setState({refreshing: true});
        this._fetchData();
    }

    _renderLoadingView() {
        return (
            <ActivityIndicator size='large' style={styles.loadding}/>
        );
    }

    _renderFooter() {
        if (this.state.showFoot === 1) {
            return (
                <View style={{height:30, alignItems:'center', justifyContent:'flex-start'}}>
                    <Text style={{color:'#999999', fontSize:14, marginTop:5, marginBottom:5}}>没有更多数据了</Text>
                </View>
            );
        } else if (this.state.showFoot === 2) {
            return (
                <View style={styles.footer}>
                    <ActivityIndicator />
                    <Text>正在加载更多数据...</Text>
                </View>
            );
        } else if (this.state.showFoot === 0){
            return (
                <View style={styles.footer}>
                    <Text></Text>
                </View>
            );
        }
    }

    _onEndReached() {
        if (this.state.showFoot != 0) {
            return;
        }

        if (this.state.movies.length != 0 && this.state.movies.length == total) {
            this.setState({
                showFoot: 1
            })
            return;
        } else {
            start++
        }

        this.setState({
            showFoot: 2
        })

        this._fetchData()
    }

    render() {
        const {navigate} = this.props.navigation;
        const {movies} = this.state;
        return (
          <View>
              {this.state.ready
                ? this._renderLoadingView()
                : <FlatList 
                data={movies}
                onRefresh={this._refreshData}
                refreshing={this.state.refreshing}
                key={movies.key}
                renderItem={({item}) => {
                    return <HotMovieCell item={item} moviesCount={movies.length} navigation={this.props.navigation}/>
                }}
                ListFooterComponent={this._renderFooter.bind(this)}
                onEndReached={this._onEndReached.bind(this)}
                onEndReachedThreshold={1}
                />}
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
      footer: {
        flexDirection:'row',
        height:24,
        justifyContent:'center',
        alignItems:'center',
        marginBottom:10,
    }
})