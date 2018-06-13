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
  TouchableOpacity,
} from 'react-native';
import Star from './star';
 export default class HotMovieCell extends React.Component {
    static defaultProps = {
       item: null,
       movies: 0
     };

    constructor(props) {
        super(props);
    };

    render() {
        const {item ,movies} = this.props;
        const {navigate} = this.props.navigation;
        return (
            <TouchableOpacity
                style={[
                    styles.hotList, item.key + 1 == movies && styles.lastList
                ]}
                onPress={() => navigate('MovieDetail', {
                    id: item.value.id,
                    callback: (data) => {
                        //this.setState({childState: data})
                    }
                })}
                // onPress = {() => alert(navigate)}
                >
                <View style={{
                    flex: 1
                }}>
                    <Image 
                        source={{
                            uri: item.value.images.large.replace('webp', 'png')
                            }}
                        style={{
                            width: 80,
                            height: 100,
                            // margin: auto,
                        }}/>
                </View>
                <View style={{
                    flex: 2,
                    alignItems: 'flex-start',
                    textAlign: 'center',
                    }}>
                    <Text style={styles.title}>{item.value.title}</Text>
                    <View style={{marginTop:3,marginBottom:3}}>
                        <Star value={item.value.rating.stars}/>
                    </View>
                    <Text style={styles.smallFont}>导演：{item.value.directors[0].name}</Text>
                    <Text style={styles.smallFont}>主演：{item.value.casts.map((v) => v.name).join('/')}</Text>
                    <Text style={{
                        fontSize: 13,
                        marginBottom: 15,
                        // lineHeight: 20,
                        alignItems: 'center',
                    }}>{item.value.collect_count.toString()} 人看过</Text>
                </View>
                <View style={{
                        flex: 0
                        }}>
                        <TouchableOpacity 
                            onPress={() => alert('购票')} 
                            style={styles.pay}>
                                <Text style={{
                                color: '#FF4E65',
                                fontWeight: '900'
                                }}>购票</Text>
                        </TouchableOpacity>
                    </View>
                </TouchableOpacity>
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
    },
    hotList: {
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
        marginTop: 15,
        fontWeight: '900',
        fontSize: 15
      },
      pay: {
        width: 50,
        height: 25,
        // marginTop: 10,
        marginLeft: 20,
        // marginBottom: 10,
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth:1,
        borderColor:'#FF4E65',
        borderRadius:5,

      }
  })