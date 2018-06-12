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

 export default class SoonMovieCell extends React.Component {
    static defaultProps = {
       item: null,
       movies: 0
     };

    constructor(props) {
        super(props);
    };

    render() {
        const {item ,movies} = this.props;
        return (
            <TouchableOpacity
                style={[
                    styles.soonList, item.key + 1 == movies && styles.lastList
                ]}
                onPress={() => navigate('Detail', {
                    id: item.value.id,
                    callback: (data) => {
                        //this.setState({childState: data})
                    }
                })}
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
                            marginBottom: 10,
                            marginTop: 10
                        }}/>
                </View>
                <View style={{
                    flex: 2,
                    alignItems: 'flex-start',
                    textAlign: 'center',
                    }}>
                    <Text style={styles.title}>{item.value.title}</Text>
                    <Text style={styles.smallFont}>导演：{item.value.directors[0].name}</Text>
                    <Text style={styles.smallFont}>主演：{item.value.casts.map((v) => v.name).join('/')}</Text>
                    <Text style={{
                        fontSize: 13,
                        marginBottom: 15,
                        // lineHeight: 20,
                        alignItems: 'center',
                    }}>{item.value.collect_count.toString()} 想看</Text>
                </View>
                <View style={{
                        flex: 0
                        }}>
                        <TouchableOpacity 
                            onPress={() => alert('想看')} 
                            style={styles.see}>
                                <Text style={{
                                color: 'orange',
                                fontWeight: '900'
                                }}>想看</Text>
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
    soonList: {
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
      see: {
        width: 50,
        height: 25,
        marginLeft: 20,
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth:1,
        borderColor:'orange',
        borderRadius:5,

      }
  })