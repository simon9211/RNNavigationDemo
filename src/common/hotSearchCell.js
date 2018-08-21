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
 export default class HotSearchCell extends React.Component {
    static defaultProps = {
       item: null,
     };

    constructor(props) {
        super(props);
    };

    render() {
        const {item} = this.props;
        const {navigate} = this.props.navigation;
        let imgUrls = [require('../resource/1st.png'), require('../resource/2st.png'), require('../resource/3st.png')] 
        return (
            <TouchableOpacity
                style={styles.hotList}
                onPress={() => navigate('MovieDetail', {
                    id: item.item.id,
                    callback: (data) => {
                        alert(data)
                        //this.setState({childState: data})
                    }
                })}
                >
                <View style={{
                    flex: 1,
                    flexDirection:'row',
                    alignItems:'center'
                }}>
                    {
                        item.index < 3?
                        <Image 
                        source={imgUrls[item.index]}
                        style={styles.rankImg}>
                        </Image> 
                        :
                        <Text>{(item.index + 1).toString() + '、'}</Text>
                    }
                    <Text style={styles.smallFont}>{item.item.name}</Text>
                </View>
                </TouchableOpacity>
        ); 
    }
  }

  const styles = StyleSheet.create({
      rankImg: {
        width: 16,
        height: 16,
      },
    smallFont: {
      lineHeight: 20,
      fontSize: 12
    },
    star:{
        marginRight: 2,
    },
    hotList: {
        paddingLeft: 18,
        paddingRight: 18,
        borderBottomWidth: 1,
        borderBottomColor: '#EFEFEF',
        height: 45
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