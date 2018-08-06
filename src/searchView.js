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

const { width, height } = Dimensions.get('window');

 export default class SearchMovieScreen extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            keywords: '',
            historySearchs: [],
            hotSearchs: ['小偷家族', '复仇者联盟3: 无限2战争', '西红柿首富', '灭绝', '死侍2', '我不是药神', '面对邪恶', '血猎', '吸血鬼传说', '纯洁心灵。逐梦演艺圈']
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
          <View style={styles.container}>
            <View style={styles.header}>
                <View style={styles.searchBar}>
                     <Image 
                        source={ require('./resource/search.png') }
                        style={{marginLeft:5, width: 20, height: 20}}
                        />
                    <TextInput 
                        style={styles.search} 
                        multiline={true}
                        underlineColorAndroid='transparent'
                        numberOfLines={1}
                        placeholder='搜索影视'
                        value={this.state.keywords}
                        onChangeText={(text) => this.setState({txt: text})}
                        />
                </View>
                
                <Button style={{width: 50, height:20, marginright:10, fontSize:12, backgroundColor:'#ff0000'}} title="取消" onPress={()=> this.props.navigation.goBack()}/>
          </View>
          </View>
        ); 
    }
  }

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      // justifyContent: 'center',
      // alignItems: 'center',
      // backgroundColor: '#F5FCFF',
    },
    header: {
        height: 60,
        flexDirection: 'row',
        paddingLeft: 15,
        paddingRight: 10,
        paddingTop: 25,
    },
    searchBar: {
      backgroundColor: '#F5F5F5', 
      padding:5, 
      height:30, 
      width:300, 
      lineHeight: 25, 
      borderRadius:10, 
      flexDirection:'row', 
      alignItems:'center', 
      flex:1,
    },
    search: {
        flex: 1,
        // height:30,
        marginLeft:10,
        marginRight:20,
        color: '#8B8B8B',
        padding:0, // 适配Android输入框
    },
  
  });