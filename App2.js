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
import { createStackNavigator, createBottomTabNavigator, createDrawerNavigator } from 'react-navigation';
import Ionicons from 'react-native-vector-icons/Ionicons'

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

  render() {
    return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Home!</Text>
        <Button 
          title="go to settings"
          onPress={() => this.props.navigation.navigate('Settings')}
        />
        <Button 
          title="go to Detail"
          onPress={() => this.props.navigation.navigate('Detail')}
        />
    </View>
    );
  }
}

class SettingsScreen extends React.Component {
    render() {
        return (
          <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>Settings!</Text>
            <Button 
                title="go to Home"
                onPress={() => this.props.navigation.navigate('Home')}
            />
            <Button 
                title="go to Detail"
                onPress={() => this.props.navigation.navigate('Detail')}
            />
          </View>
        );
    };
}

class DetailScreen extends React.Component {

  render() {
      return (
        <View style={{flex: 1, justifyContent: 'center', alignItems:'center'}}>
          <Text>
              Details
          </Text>
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

class MyHomeScreen extends React.Component {
    static navigationOptions = {
        drawerLabel: 'Home',
        drawerIcon: ({ tintColor }) => (
        <Image 
            source={require('./src/resource/react-navigation.png')}
            style={[styles.icon, {tintColor: tintColor}]}
        />
        ),
    };

    render() {
        return (
            <Button
              onPress={() => {
                // this.props.navigation.navigate('Notifications');
                this.props.navigation.openDrawer();
                // this.props.navigation.dispatch(DrawerActions.openDrawer()); // crash
              }}
              title="go to notifications"
            />
        );
    }
}

class MyNotificationsScreen extends React.Component {
    static navigationOptions = {
        drawerLabel: 'Notifications',
        drawerIcon: ({ tintColor }) => (
            <Image 
                source={require('./src/resource/react-navigation.png')}
                style={[styles.icon, {tintColor: tintColor}]}
            />
        ),
    };

    render() {
        return (
            <Button
                onPress={() => {
                    // this.props.navigation.goBack()
                    this.props.navigation.openDrawer();
                }}
                title="go back home"
            />
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

const HomeStack = createStackNavigator({
    Home: HomeScreen,
    Detail: DetailScreen,
});

const SettingsStack = createStackNavigator({
    Settings: SettingsScreen,
    Detail: DetailScreen,
});

const TabRootStack = createBottomTabNavigator(
    {
        Home: HomeStack,
        Settings: SettingsStack,
    }//,
    // {
    //     navigationOptions: ({ navigation }) => ({
    //         tabBarIcon: ({ focused, tintColor }) => {
    //             const { routeName } = navigation.state;
    //             let iconName;
    //             if (routeName === 'Home') {
    //                 iconName = `ios-information-circle${focused ? '' : '-outline'}`;
    //             } else {
    //                 iconName = `ios-options${focused ? '' : '-outline'}`;
    //             }
    //             return <Ionicons name={iconName} size={25} color={tintColor} />
    //         },
    //     }),
    //     tabBarOptions: {
    //         activeTintColor: 'tomato',
    //         inactiveTintColor: 'gray',
    //     },
    // }
);

const DrawNavigator = createDrawerNavigator({
    Home: {
        screen: MyHomeScreen,
    },
    Notifications: {
        screen: MyNotificationsScreen,
    },
});

type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
      //<RootStack />
      //<TabRootStack />
      <DrawNavigator />
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
  icon: {
      width: 24,
      height: 24
  },
});
