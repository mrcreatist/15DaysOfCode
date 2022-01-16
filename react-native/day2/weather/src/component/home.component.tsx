import React, {useState, useEffect} from 'react';
import {Button, Text, TextInput, View} from 'react-native';
import {ROUTE} from '../constant';

export const Home = (props: any) => {
  const [data, setData] = useState();
  const [city, setCity] = useState('');

  const API_KEY = '3da971b1454718615b2aa3b8ebe8c0c0';
  const res = `{
  "coord": {
    "lon": -122.08,
    "lat": 37.39
  },
  "weather": [
    {
      "id": 800,
      "main": "Clear",
      "description": "clear sky",
      "icon": "01d"
    }
  ],
  "base": "stations",
  "main": {
    "temp": 282.55,
    "feels_like": 281.86,
    "temp_min": 280.37,
    "temp_max": 284.26,
    "pressure": 1023,
    "humidity": 100
  },
  "visibility": 16093,
  "wind": {
    "speed": 1.5,
    "deg": 350
  },
  "clouds": {
    "all": 1
  },
  "dt": 1560350645,
  "sys": {
    "type": 1,
    "id": 5122,
    "message": 0.0139,
    "country": "US",
    "sunrise": 1560343627,
    "sunset": 1560396563
  },
  "timezone": -25200,
  "id": 420006353,
  "name": "Mountain View",
  "cod": 200
  }`;

  const getWeatherFromAPI = () => {
    // return fetch(
    //   `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`,
    // ).then(res => res.json());
    // console.log(JSON.parse(res));
    return new Promise(resolve => resolve(JSON.parse(res)));
  };

  const getWeather = () => {
    getWeatherFromAPI().then(res => console.log(res));
  };

  return (
    <View>
      <TextInput
        placeholder="Enter City"
        onChangeText={newCity => setCity(newCity)}></TextInput>
      <Button title="Go!" onPress={() => getWeather()}></Button>
      <Text>Welcome</Text>
      <Text>{JSON.stringify(data)}</Text>
      <Button
        title="About"
        onPress={() => props.navigation.navigate(ROUTE.about)}></Button>
    </View>
  );
};
