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
  ActivityIndicator,
  TextInput
} from 'react-native';
import { StackNavigator } from 'react-navigation';
import Search from 'react-native-search-box'

const { width, height } = Dimensions.get('window');

 export default class SearchMovieScreen extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            txt: 'i am content!'
        }
    }
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

    render() {
        return (
          <View style={styles.header}>
                <View style={{backgroundColor: '#F5F5F5', padding:5, height:30, width:300, lineHeight: 25, borderRadius:10, flexDirection:'row', alignItems:'center', flex:1}}>
                     <Image 
                        source={ require('./resource/search.png') }
                        style={{marginLeft:5, width: 20, height: 20}}
                        />
                    <TextInput 
                        style={styles.search} 
                        multiline={true}
                        numberOfLines={1}
                        placeholder='i am placeholder'
                        value={this.state.txt}
                        onChangeText={(text) => this.setState({txt: text})}
                        />
                </View>
                
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
        // backgroundColor:'red',
    },
    search: {
        flex: 1,
        height:30,
        marginLeft:10,
        marginRight:20,
        color: '#8B8B8B',
        
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