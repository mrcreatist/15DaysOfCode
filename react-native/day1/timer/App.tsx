import React from 'react';
import {SafeAreaView, ScrollView, StatusBar, Text} from 'react-native';
import {Colors, isDarkMode} from './util';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {TimerHome, TimerRun} from './components';

const Stack = createNativeStackNavigator();

const App = () => {
  const backgroundStyle = {
    backgroundColor: isDarkMode() ? Colors.dark : Colors.light,
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar barStyle={isDarkMode() ? 'light-content' : 'dark-content'} />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={backgroundStyle}>
        {/* <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen
              name="Home"
              component={TimerHome}
              options={{title: 'Welcome'}}></Stack.Screen>
            <Stack.Screen name="run" component={TimerRun}></Stack.Screen>
          </Stack.Navigator>
        </NavigationContainer> */}
        {/* <Text>I am here</Text> */}
        <TimerHome />
        <TimerRun />
      </ScrollView>
    </SafeAreaView>
  );
};

export default App;
