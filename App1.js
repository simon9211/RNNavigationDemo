/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  YellowBox,
  Platform,
  StyleSheet,
  Text,
  View,
  Button,
  Image
} from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';

YellowBox.ignoreWarnings(['Warning: isMounted(...) is deprecated', 'Module RCTImageLoader'])
const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

class LogoTitle extends React.Component {
  render() {
    return (
      <View style={{ width: 100, height: 30, flex: 0, backgroundColor: 'red', alignItems:'center'}}> 
        <View style={{flexWrap:'wrap'}}>
          <Image source={ require('./src/resource/react-navigation.png') }
          style={{  width: 30, height: 30}}
          />
          <Text style={{width: 30, height: 30, color:'white', alignContent:'center'}}>
            title
          </Text>
        </View>
      </View>
    );
  }
}

class HomeScreen extends React.Component {
  /*
  // static navigationOptions = {
  //     //title: 'Home',
  //     headerTitle: <LogoTitle/>,
  //     headerRight: (
  //       <Button
  //         onPress={() => alert('this is a button')}
  //         title="Info"
  //         color="#fff"
  //       />
  //     )
  // };
  // */
  static navigationOptions = ({ navigation }) => {
    const params = navigation.state.params || {};

    return {
      //title: navigation.state.params.otherParam,
      headerTitle: <LogoTitle/>,
      headerLeft: (
        <Button
          onPress={() => navigation.navigate('MyModal')}
          title="info"
          color="#fff"
        />
      ),
      headerRight: (
        <Button onPress={params.increaseCount} title="+1" color="#fff" />
      ),
    };
  };

  componentWillMount() {
    this.props.navigation.setParams({ increaseCount: this._increaseCount });
  }

  state = {
    count: 0,
  };

  _increaseCount = () => {
    this.setState({ count: this.state.count + 1 });
  };


  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text style={{fontSize: 23, color: '#ff0000'}}>
          Home Screen
        </Text>
        <Button 
          title='go to details'
          onPress={() => {
            this.props.navigation.navigate('Detail', {
              itemId: 86,
              otherParam: 'anything you want here',
            });
          }}
        />
        <Button 
          title='update the title'
          onPress={() => {
            navigationOptions.title = 'updated!'
          }}
        />
      </View>
    )
  }
}

class DetailScreen extends React.Component {
  static navigationOptions = ({ navigation, navigationOptions }) => {
    const { params } = navigation.state || {};
    return {
      title: params.otherParam ? params.otherParam : 'A Nested Details Screen',
      headerStyle: {
        backgroundColor: navigationOptions.headerTintColor,
      },
      headerTintColor: navigationOptions.headerStyle.backgroundColor,
    };
  };
  render() {
    const { navigation } = this.props;
    // const itemId = navigation.getParam('itemId', 'NO-ID');
    // const otherParam = navigation.getParam('otherParam', 'some default');
    // same as up
    const {itemId, otherParam } = navigation.state.params;
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text style={{fontSize: 23, color: '#00ff00'}}>
          Detail Screen
        </Text>
        <Text>itemId: {JSON.stringify(itemId)}</Text>
        <Text>otherParam: {JSON.stringify(otherParam)}</Text>
        <Button 
          title='go to Detail... again'
          onPress={() => this.props.navigation.push('Detail',{
            itemId: Math.floor(Math.random() * 100 ),
          })}
        />
        <Button 
          title='go to Home'
          onPress={() => this.props.navigation.navigate('Home')}
        />
        <Button 
          title='go back...'
          // 返回上一routes
          // onPress={() => this.props.navigation.goBack()}
          // 返回根root routes
          onPress={() => this.props.navigation.popToTop()}
        />
        <Button 
          title='update the title'
          onPress={() => {
            this.props.navigation.setParams({otherParam: 'updated!'});
          }}
        />
         <Button
          onPress={() => navigation.navigate('MyModal')}
          title="info"
          color="#fff"
        />
      </View>
    );
  }
}

class ModalScreen extends React.Component {
  render() {
    return (
      <View style={{flex: 1, alignItems: 'center', justifyContent:'center'}}>
        <Text style={{ fontSize: 30 }}> this is a modal!</Text>
        <Button 
          onPress={() => this.props.navigation.goBack()}
          title="Dismiss"
        />
      </View>
    );
  }
}

const MainStack = createStackNavigator (
  {
    Home: {
      screen: HomeScreen,
    },
    Detail: {
      screen: DetailScreen,
    },
  },
  {
      initialRouteName: 'Home',
      navigationOptions: {
        headerStyle: {
          backgroundColor: '#f4511e',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }
    }
);

const RootStack = createStackNavigator (
  {
    Main: {
      screen: MainStack,
    },
    MyModal: {
      screen: ModalScreen,
    } 
  },
  {
    mode: 'modal',
    headerMode: 'none',
  }
);

type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
      <RootStack />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
