import React, {useState} from 'react';
import {Button, Text, View} from 'react-native';

const timerUtil: any = {
  incrementTime: (time: string) => {
    let timer: Array<string> = time.split(':');
    let hr: number = +timer[0];
    let min: number = +timer[1];
    let sec: number = +timer[2];
    let ms: number = +timer[3];

    if (ms + 1 === 60) {
      if (sec + 1 === 60) {
        if (min + 1 === 60) {
          hr++;
          min = 0;
        } else min++;
        sec = 0;
      } else sec++;
      ms = 0;
    } else ms++;

    const result =
      timerUtil.timeToString(hr) +
      ':' +
      timerUtil.timeToString(min) +
      ':' +
      timerUtil.timeToString(sec) +
      ':' +
      timerUtil.timeToString(ms);

    console.log(result);
    return result;
  },

  timeToString: (time: number) => {
    const pad = '00';
    const str = '' + time;
    return pad.substring(0, pad.length - str.length) + str;
  },
};

export const TimerRun = () => {
  const defaultTime = '00:00:00:00';
  const [time, setTime] = useState(defaultTime);
  const [timeLog, setTimeLog]: [Array<string>, Function] = useState([]);

  const gapFunction = () => setInterval(() => _addTime(), 100);
  const _addTime = () => setTime(time => timerUtil.incrementTime(time));
  const [gap, setGap]: [any, Function] = useState();
  const [gapSwitch, setGapSwitch] = useState(false);

  const _onStart = () => {
    if (!gapSwitch) {
      setGap(gapFunction);
      setGapSwitch(true);
    }
  };

  const _onPause = () => {
    clearInterval(gap);
    setGapSwitch(false);
  };

  const _onStop = () => {
    clearInterval(gap);
    setGap(null);
    setGapSwitch(false);
    setTime(defaultTime);
  };

  const _onLap = () => {
    setTimeLog((timeLog: Array<string>) => [...timeLog, time]);
  };

  return (
    <View>
      <Text>{time}</Text>
      <Button title="Start" onPress={_onStart}></Button>
      <Button title="Pause" onPress={_onPause}></Button>
      <Button title="Stop" onPress={_onStop}></Button>
      <Button title="Lap" onPress={_onLap}></Button>
      {timeLog.map((log, index) => (
        <Text key={index}>{log}</Text>
      ))}
    </View>
  );
};
