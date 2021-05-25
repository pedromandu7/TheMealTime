import React from 'react';
import {NavigationContainer, StackRouter} from '@react-navigation/native';
import {View} from 'react-native';
import StackRoutes from './stack.routes';

// import { Container } from './styles';

const Routes = () => {
  return (
    <NavigationContainer>
      <StackRoutes />
    </NavigationContainer>
  );
};

export default Routes;
