import React, {useState} from 'react';
import {Platform, View, Text, Image} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {
  TouchableHighlight,
  TouchableWithoutFeedback,
} from 'react-native-gesture-handler';
import {Icon} from 'react-native-elements';
import Svg, {SvgFromUri} from 'react-native-svg';

// import { Container } from './styles';
// import Icon from 'react-native-vector-icons/FontAwesome5';
import Home from '../screens/homeScreen';
import Upload from '../screens/upload';
import HomeScreen from '../screens/homeScreen';
import Notification from '../screens/notification';
import Profile from '../screens/profile';
import Scan from '../screens/scan';
// import homeSvg from '../assets/icons/homeSVG/homeSvg.svg';
// import { Image } from 'react-native-elements/dist/image/Image';

const TabNavigator = createBottomTabNavigator();

const AuthRoute = ({navigation}: any) => {
  return (
    <TabNavigator.Navigator
      tabBarOptions={{
        activeTintColor: '#1FCC79',
        inactiveTintColor: 'gray',
        labelPosition: 'below-icon',
        style: {height: 60},
      }}>
      <TabNavigator.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: ({focused, size, color}) => 
            focused ? (
              <TouchableWithoutFeedback
                onPress={() => navigation.navigate('Home')}
                style={{zIndex: -1}}>
                <Image
                  source={require('../assets/icons/homeGreen.png')}
                  style={{
                    height: 30,
                    width: 25,
                    // borderRadius: 25,
                    // marginBottom: 40,
                  }}
                />
              </TouchableWithoutFeedback>
            ) : (
              <TouchableWithoutFeedback
                onPress={() => navigation.navigate('Home')}
                style={{zIndex: -1}}>
                <Image
                  source={require('../assets/icons/homeGray.png')}
                  style={{
                    height: 30,
                    width: 25,
                    // borderRadius: 30,
                    // marginBottom: 40,
                  }}
                />
              </TouchableWithoutFeedback>
            ),
        }}
      />

      <TabNavigator.Screen
        name="Upload"
        component={Upload}
        options={{
          tabBarIcon: ({focused, size, color}) => 
            focused ? (
              <TouchableWithoutFeedback
                onPress={() => navigation.navigate('Upload')}
                style={{zIndex: -1}}>
                <Image
                  source={require('../assets/icons/uploadGreen.png')}
                  style={{
                    height: 30,
                    width: 25,
                    // borderRadius: 25,
                    // marginBottom: 40,
                  }}
                />
              </TouchableWithoutFeedback>
            ) : (
              <TouchableWithoutFeedback
                onPress={() => navigation.navigate('Upload')}
                style={{zIndex: -1}}>
                <Image
                  source={require('../assets/icons/uploadGray.png')}
                  style={{
                    height: 30,
                    width: 25,
                    // borderRadius: 30,
                    // marginBottom: 40,
                  }}
                />
              </TouchableWithoutFeedback>
            ),
        }}
      />

      <TabNavigator.Screen
        name="Scan"
        component={Scan}
        options={{
          tabBarIcon: ({focused, size, color}) => (
            <TouchableWithoutFeedback
              onPress={() => navigation.navigate('Scan')}
              style={{zIndex: -1}}>
              {/* <SvgFromUri uri={('../assets/icons/homeSVG/Iconly/Bold/Home.svg')}/> */}
              <Image
                source={require('../assets/icons/Scan.png')}
                style={{
                  height: 60,
                  width: 60,
                  borderRadius: 30,
                  marginBottom: 40,
                }}
              />
            </TouchableWithoutFeedback>
          ),
        }}
      />

      <TabNavigator.Screen
        name="Notification"
        component={Notification}
        options={{
          tabBarIcon: ({focused, size, color}) => 
            focused ? (
              <TouchableWithoutFeedback
                onPress={() => navigation.navigate('Notification')}
                style={{zIndex: -1}}>
                <Image
                  source={require('../assets/icons/notificationGreen.png')}
                  style={{
                    height: 30,
                    width: 25,
                    // borderRadius: 25,
                    // marginBottom: 40,
                  }}
                />
              </TouchableWithoutFeedback>
            ) : (
              <TouchableWithoutFeedback
                onPress={() => navigation.navigate('Notification')}
                style={{zIndex: -1}}>
                <Image
                  source={require('../assets/icons/notificationGray.png')}
                  style={{
                    height: 30,
                    width: 25,
                    // borderRadius: 30,
                    // marginBottom: 40,
                  }}
                />
              </TouchableWithoutFeedback>
            ),
        }}
      />

      <TabNavigator.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarIcon: ({focused, size, color}) =>
            focused ? (
              <TouchableWithoutFeedback
                onPress={() => navigation.navigate('Profile')}
                style={{zIndex: -1}}>
                <Image
                  source={require('../assets/icons/profileGreen.png')}
                  style={{
                    height: 30,
                    width: 25,
                    // borderRadius: 25,
                    // marginBottom: 40,
                  }}
                />
              </TouchableWithoutFeedback>
            ) : (
              <TouchableWithoutFeedback
                onPress={() => navigation.navigate('Profile')}
                style={{zIndex: -1}}>
                <Image
                  source={require('../assets/icons/profileGray.png')}
                  style={{
                    height: 30,
                    width: 25,
                    // borderRadius: 30,
                    // marginBottom: 40,
                  }}
                />
              </TouchableWithoutFeedback>
            ),
        }}
      />
    </TabNavigator.Navigator>
  );
};

export default AuthRoute;
