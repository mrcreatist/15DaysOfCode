import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import {ROUTE} from './constant';
import {About, Home} from './component';

const Stack = createNativeStackNavigator();

export const Weather = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name={ROUTE.home} component={Home}></Stack.Screen>
        <Stack.Screen name={ROUTE.about} component={About}></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
};
