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
  ScrollView,
  TouchableOpacity,
  ActivityIndicator
} from 'react-native';
import { StackNavigator } from 'react-navigation';
import Star from './common/star';
const { width, height } = Dimensions.get('window');
const movieInfo = 'https://api.douban.com/v2/movie/subject';

 export default class SearchMovieScreen extends React.Component {

    static navigationOptions = ({ navigation }) => ({
      header: null,
    //   headerRight: <Button styles={{fontSize:12}} title="取消" color="#cf0" onPress={() => navigation.goBack()}/>,
    //   headerTintColor: '#fff',
    //   headerStyle: {
    //     backgroundColor: '#2a362c',
    //     opacity: 1,
    //   },
    //   headerLeft: (
    //     <Button
    //       onPress={() => {
    //         navigation.goBack()
    //         if (navigation.state.params.callback) {
    //           navigation.state.params.callback('hhh')
    //         }
    //       }}
    //       title="info"
    //       color="#fff"
    //     />
    //   )

    });

    componentDidMount() {
    //   const {state:{params:{id}}} = this.props.navigation;
    //   let formData = new FormData();
    //   formData.append('apikey', '0b2bdeda43b5688921839c8ecb20399b')
    //   formData.append('city','北京',)
    //   formData.append('client','something',)
    //   formData.append('udid','dddddddddddddddddddddd')

    //   fetch(`${movieInfo}/${id}`, {
    //     method: 'POST',
    //     headers: {
    //       'Accept': 'application/json',
    //       'Content-Type': 'multipart/form-data',
    //     },
    //     body:formData
    //   }).then((Response) => Response.json())
    //   .then((data) => {
    //     this.setState({
    //       ready: false,
    //       data: data,
    //     });
    //   })
    }

    render() {

        return (
          <View>
              <Text>hello world</Text>
          </View>
        ); 
    }
  }

  const styles = StyleSheet.create({
    poster:{
      backgroundColor: '#2a362c',
      height: 310,
      width: width,
      justifyContent: 'center',
      alignItems: 'center'
    },
    movieInfo:{
      paddingTop: 15,
      paddingLeft: 15,
      paddingRight: 15,
      flexDirection: 'row',
      // alignItems:'center',
      justifyContent:'space-between',
    },
    infoSquare:{
      backgroundColor: '#ffffff',
      width:85,
      height:85,
      marginBottom: 15,
      justifyContent: 'center',
      alignItems: 'center',
      shadowColor: '#9b9b9b',
      shadowOffset:{height:0,width:0},
      shadowRadius: 10,
      shadowOpacity: 0.5,
    },
    smallFont:{
      fontSize:11,
      color:'#9b9b9b',
    }
  });