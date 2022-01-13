import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {TimerHome, TimerRun, TimerDeveloper} from './components';
import {ROUTE} from './constant';

const Stack = createNativeStackNavigator();

export const Timer = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name={ROUTE.home} component={TimerHome}></Stack.Screen>
        <Stack.Screen name={ROUTE.run} component={TimerRun}></Stack.Screen>
        <Stack.Screen
          name={ROUTE.developer}
          component={TimerDeveloper}></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
};
