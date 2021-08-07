import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import {navigationRef} from './navigationService';

import Home from '../Stories/container/HomeContainer';
import Details from '../Stories/container/DetailsContainer';
import Screens from '../Stories/screens/ScreenNames';

const Stack = createStackNavigator();

mainNavigator = () => {
  return (
    <NavigationContainer ref={navigationRef}>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name={Screens.Home} component={Home} />
        <Stack.Screen name={Screens.Details} component={Details} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default mainNavigator;
