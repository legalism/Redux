import React, {Component} from 'react';
import {Image,StyleSheet} from 'react-native';
import {StackNavigator,TabNavigator} from 'react-navigation';
import CardStackStyleInterpolator from 'react-navigation/src/views/CardStackStyleInterpolator';
import Home from './pages/Home'
import Find from './pages/Find'
import Message from './pages/Message'
import Me from './pages/Me'
import Detail from './pages/Detail'
import VideoView from './pages/VideoView'

/**
 * 界面组件
 */

const Tabs = TabNavigator(
  //RouteConfigs
  {
    Home: {
      screen: Home,
      navigationOptions: {
        tabBarLabel: '首页',
        tabBarIcon: ({tintColor}) =>
          <Image
            style={[styles.tabBarImage, /*{tintColor: tintColor}*/]}
            source={require('../images/mode.png')}
          />,
      }
    },

    Find: {
      screen: Find,
      navigationOptions: {
        tabBarLabel: '发现',
        tabBarIcon: ({tintColor}) =>
          <Image
            style={[styles.tabBarImage, /*{tintColor: tintColor}*/]}
            source={require('../images/mode.png')}
          />,
      }
    },

    Message: {
      screen: Message,
      navigationOptions: {
        tabBarLabel: '消息',
        tabBarIcon: ({tintColor}) =>
          <Image
            style={[styles.tabBarImage, /*{tintColor: tintColor}*/]}
            source={require('../images/mode.png')}
          />,
      }

    },

    Me: {
      screen: Me,
      navigationOptions: {
        tabBarLabel: '我的',
        tabBarIcon: ({tintColor}) =>
          <Image
            style={[styles.tabBarImage, /*{tintColor: tintColor}*/]}
            source={require('../images/mode.png')}
          />,
      }
    }
  },
  //TabNavigatorConfig
  {
    initialRouteName: 'Home',
    animationEnabled: true,
    tabBarPosition: 'bottom',
    swipeEnabled: true,
    backBehavior: 'none',
    tabBarOptions: {
      activeTintColor: 'orange',
      inactiveTintColor: 'gray',
      showIcon: true,
      indicatorStyle: {
        height: 0,
      },
      style: {
        backgroundColor: 'white',
      },
      tabStyle: {
        height: 56,
      },
      labelStyle: {
        fontSize: 12,
        marginBottom: 8,
        marginTop: 6,
      },
      pressColor: 'gray',
      pressOpacity: 0.8,
      upperCaseLabel: false,
      iconStyle: {
        height: 32,
      },
    },

  }
);

/**
 * 路由导航
 */
const AppNavigator = StackNavigator(
  //RouteConfigs
  {
    Tabs: {
      screen: Tabs,
      path: '',
      navigationOptions: {
        title: "导航",
        header: null,
        cardStack: {
          gesturesEnabled: false,
        }
      }
    },
    Detail: {screen: Detail},
    VideoView: {screen: VideoView},
  },

  //StackNavigatorConfig
  {
    navigationOptions: {
      headerBackTitle: null,
      headerTintColor: '',
      showIcon: true
    },
    modal: 'card',
    headerMode: 'screen',
    transitionConfig: () => ({
      screenInterpolator: CardStackStyleInterpolator.forHorizontal,
    })
  }
);

const styles = StyleSheet.create({
  tabBarImage: {
    width: 24,
    height: 24,
    marginTop: 8,
  },
  tabBar: {
    backgroundColor: 'white',
  },
  tabBarLabel: {
    fontSize: 12,
    marginBottom: 8,
    marginTop: 6,
  },
  tabBarItem: {
    height: 56,
  },
  tabBarIcon: {
    height: 32,
  },
});

export default AppNavigator;