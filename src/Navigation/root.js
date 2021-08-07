import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import {rootNavigationRef} from './navigationService';

import Login from '../Stories/container/RootContainer/login';
import Screens from '../Stories/screens/ScreenNames';

const Stack = createStackNavigator();

mainNavigator = () => {
  return (
    <NavigationContainer ref={rootNavigationRef}>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name={Screens.Login} component={Login} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default mainNavigator;
