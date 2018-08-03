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
 
    }

    _navigationPop() {
        if (this.props.navigation) {
            this.props.navigation.goBack()
        }
    }

    render() {
        const {navigation} = this.props.navigation;
            return (
          <View style={styles.header}>
                <TouchableOpacity 
                    style={styles.search} 
                    onPress={() => navigate('SearchIng')}
                    >
                    <Text style={{
                        textAlign: 'center',
                        lineHeight: 25,
                        color: '#8B8B8B'
                    }}>  电影/电视剧/影人</Text>
                </TouchableOpacity>
                <Button style={{width: 50, height:20, marginright:10, fontSize:12, backgroundColor:'#ff0000'}} title="取消" onPress={()=> this.props.navigation.goBack()}/>
          </View>
        ); 
    }
  }

  const styles = StyleSheet.create({
    header: {
        height: 60,
        flexDirection: 'row',
        paddingLeft: 15,
        paddingRight: 10,
        paddingTop: 25,
    },
    search: {
        backgroundColor: '#F5F5F5',
        flex:6,
        height:30,
        borderRadius:10,
        justifyContent:'center',
        alignItems:'center',
    },
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