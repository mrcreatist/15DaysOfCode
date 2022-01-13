import React from 'react';
import {Button, Text, View} from 'react-native';
import {ROUTE} from '../constant';

export const TimerHome = (props: any) => {
  function _runTimer(link: string) {
    props.navigation.navigate(link);
  }

  return (
    <View>
      <Text>Timer Home Works!</Text>
      <Button onPress={() => _runTimer(ROUTE.run)} title="Run Timer"></Button>
      <Button onPress={() => _runTimer(ROUTE.developer)} title="About"></Button>
    </View>
  );
};
