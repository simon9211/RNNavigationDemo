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

 export default class MovieDetailScreen extends React.Component {

    constructor(props) {
      super(props);
      this.state = {
        num: 3,
        data: [],
        ready: true,
      };
    }

    static navigationOptions = ({ navigation }) => ({
      headerTitle: '电影',
      headerRight: <Button title="分享" onPress={() => alert('click the share btn')}/>,
      headerTintColor: '#fff',
      headerStyle: {
        backgroundColor: '#2a362c',
        opacity: 1,
      },
      // headerLeft: (
      //   <Button
      //     onPress={() => navigation.goBack()}
      //     title="info"
      //     color="#fff"
      //   />
      // ),

    });

    componentDidMount() {
      const {state:{params:{id}}} = this.props.navigation;
      let formData = new FormData();
      formData.append('apikey', '0b2bdeda43b5688921839c8ecb20399b')
      formData.append('city','北京',)
      formData.append('client','something',)
      formData.append('udid','dddddddddddddddddddddd')

      fetch(`${movieInfo}/${id}`, {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'multipart/form-data',
        },
        body:formData
      }).then((Response) => Response.json())
      .then((data) => {
        this.setState({
          ready: false,
          data: data,
        });
      })
    }

    render() {
      const {
        title,
        year,
        countries,
        genres,
        summary,
        ratings_count,
        mainland_pubdate,
        durations,
        photos,
        images,
        casts,
        rating,
        popular_comments
      } = this.state.data;

        return (
          <ScrollView bounces={false} scrollEventThrottle={1}>
            {this.state.ready?
            <ActivityIndicator size="large" style={{marginTop: 100}}/>
            :
            <View style={{backgroundColor:'#f4f9f5'}}>
              <View style={styles.poster}>
                <Image source={{uri: images.large}} style={{width: width/2, height: 280}}/>
              </View>
              <View style={styles.movieInfo}>
                <View>
                  <Text style={{fontSize:22, fontWeight:'600', marginBottom:5}}>{title}</Text>
                  <Text style={styles.smallFont}>{year} / {countries} / {genres}</Text>
                  <Text style={styles.smallFont}>上映时间：{mainland_pubdate}({countries})</Text>
                  <Text style={styles.smallFont}>片长：{durations}</Text>
                </View>
                <View style={styles.infoSquare}>
                  <Text style={styles.smallFont}>豆瓣评分</Text>
                  <Text style={{fontSize:20, fontWeight:'600'}}>{rating.average}</Text>
                  <View style={{marginBottom:3, marginTop:2}}>
                    <Star value={rating.stars} width={11} height={11}/>
                  </View>
                  <Text style={styles.smallFont}>{ratings_count}人</Text>
                </View>
              </View>

              <View style={{flexDirection: 'row', justifyContent: 'space-around', paddingLeft: 10, paddingRight: 10}}>
                <TouchableOpacity 
                  style={{
                    padding: 10,
                    paddingLeft: 50,
                    paddingRight: 50,
                    borderWidth: 1,
                    borderColor: 'orange',
                    borderRadius: 5,
                  }}

                  onPress={() => {
                    alert('want to see');
                  }}
                >
                  <Text style={{
                    color:'orange',
                    fontWeight: '900'
                  }}>想看</Text>
                </TouchableOpacity>              
                <TouchableOpacity 
                  style={{
                    padding: 10,
                    paddingLeft: 50,
                    paddingRight: 50,
                    borderWidth: 1,
                    borderColor: 'orange',
                    borderRadius: 5,
                    flexDirection: 'row'
                  }}

                  onPress={() => {
                    alert('have saw');
                  }}
                >
                  <Text style={{
                    color:'orange',
                    fontWeight:'900',
                    marginRight: 20
                  }}>看过</Text>
                  <Star value={'25'} width={11} height={11}/>
                </TouchableOpacity>  
              </View>
              <View style={{flexDirection: 'row', justifyContent: 'space-between', padding: 10}}>
                <Text style={{fontSize:15, fontWeight:'400', width: 60, textAlign:'left'}}>在线购票</Text>             
                <TouchableOpacity 
                  style={{
                    justifyContent: 'flex-end',
                  }}

                  onPress={() => {
                    alert('buy tickets');
                  }}
                >
                  <Text style={{
                    color:'red',
                    fontWeight:'900',
                  }}>¥32起></Text>
                </TouchableOpacity>  
              </View>
              <View>
                <Text style={{fontSize: 13, marginBottom: 12, marginLeft: 12, marginTop: 20, color:'#9b9b9b'}}>剧情介绍</Text>
                <View>
                  <Text style={{fontSize: 13, marginBottom: 12, marginLeft: 12, marginRight: 12, marginTop: 20}} numberOfLines={this.state.num} ellipsizeMode='tail'>{summary}</Text>
                  <TouchableOpacity onPress={()=>{
                    this.state.num === 0?this.setState({num:3}):this.setState({num:0});
                  }}>
                    <Text style={{color:"#2CBA48",marginLeft: 15}}>{this.state.num!=0?'展开':'合上'}</Text>
                  </TouchableOpacity>
                </View>
              </View>
              <View>
                <Text style={{fontSize: 13, marginBottom: 12, marginLeft: 12, marginTop: 20, color:'#9b9b9b'}}>演员</Text>
                <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                  <View style={{margin: 10, flexDirection:'row'}}>
                    {
                      casts.map((x,i) => {
                        return (
                          <View
                            style={{width:80, height: 160, justifyContent:'center', alignItems:'center', marginRight: 6}}
                            key={i}>
                            <Image 
                              source={{uri:x.avatars.large}}
                              style={{width: 80, height: 120}}
                              />
                            <Text
                              style={{lineHeight: 22}}
                              numberOfLines={1}
                              ellipsizeMode='tail'>{x.name}</Text>
                          </View>
                        );
                      })
                    }
                  </View>
                </ScrollView>
              </View>
            </View>
            }
          </ScrollView>
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