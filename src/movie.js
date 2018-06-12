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

 export default class MovieCell extends React.Component {
    static defaultProps = {
       item: null
     };
    // static propTypes = {
    //     value: React.PropTypes.string.isRequired,
    // };

    constructor(props) {
        super(props);
    };

    render() {
        const {item} = props;
        return (
          <View>
              <TouchableOpacity
                        style={[
                            styles.hotList, item.key + 1 == movies.length && styles.lastList
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
                                    height: 100
                                }}/>
                        </View>
                        <View style={{
                            flex: 2,
                            alignItems: 'flex-start'
                        }}>
                            <Text style={styles.title}>{item.value.title}</Text>
                            <View style={{marginTop:3,marginBottom:3}}>
                                <Star value={item.value.rating.stars}/>
                            </View>
                            <Text style={styles.smallFont}>导演：{item.value.directors[0].name}</Text>
                            <Text style={styles.smallFont}>主演：{item.value.casts.map((v) => v.name).join('/')}</Text>
                            <Text style={{
                                lineHeight: 20,
                                fontSize: 13
                            }}>{item.value.collect_count}人看过</Text>
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
                        </View>
                    </TouchableOpacity>
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