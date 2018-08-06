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
  TouchableOpacity,
  FlatList
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { StackNavigator, TabNavigator } from 'react-navigation';

 export default class SearchInput extends React.Component {

    static defeaultProps = {
        city: true
    }

    componentDidMount() {
        console.log(this.props);
    }
    
    render() {
        const { navigate } = this.props.navigation || {};
        return (
            <View style={styles.header}>
                {this.props.city&&
                    <TouchableOpacity 
                        style={styles.city} 
                        onPress={() => alert('welcome to beijing!')}
                    >
                        <Text style={{alignContent:'flex-start'}}>
                            Beijing 
                            <Image 
                                source={ require('./resource/pull.png') }
                                style={{marginLeft:5, width: 10, height: 10}}
                            />
                        </Text>
                    </TouchableOpacity>
                }

                <TouchableOpacity 
                    style={styles.search} 
                    onPress={() => navigate('SearchIng')}
                    // onPress={() => navigate('MovieDetail', {
                    //     id: item.value.id,
                    //     callback: (data) => {
                    //         alert(data)
                    //         //this.setState({childState: data})
                    //     }
                    // })}
                    >
                    <Image 
                    source={ require('./resource/search.png') }
                    style={{  width: 20, height: 20}}
                    />
                    <Text style={{
                        textAlign: 'center',
                        lineHeight: 25,
                        color: '#8B8B8B'
                    }}>  电影/电视剧/影人</Text>
                </TouchableOpacity>
            </View>
        );
    }
}


const styles = StyleSheet.create({
    header: {
        height: 35,
        flexDirection: 'row',
        paddingLeft: 20,
        paddingRight: 20,
    },
    city: {
        flex: 1,
        height: 30,
        marginRight: 8,
        justifyContent: 'center',
        alignItems: 'center',
    },
    search: {
        backgroundColor: '#F5F5F5',
        flex:6,
        height:30,
        marginLeft: 10,
        borderRadius:10,
        justifyContent:'flex-start',
        alignItems:'center',
        flexDirection: 'row',
        marginLeft:10,
    }
});