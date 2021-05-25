import React from 'react';
import {StyleSheet} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';

// import { Container } from './styles';
import AuthRoute from './tab.routes';
import HomeScreen from '../screens/homeScreen';
import StartScreen from '../screens/startScreen';

const stackRoutes = createStackNavigator();

const AppRoutes: React.FC = () => {
  return (
    <stackRoutes.Navigator
      headerMode="none"
      initialRouteName="StartScreen"
      screenOptions={{
        cardStyle: {
          backgroundColor: 'blue',
        },
      }}>
      <stackRoutes.Screen name="StartScreen" component={StartScreen} />

      <stackRoutes.Screen name="HomeScreen" component={AuthRoute} />
    </stackRoutes.Navigator>
  );
};

export default AppRoutes;
