import React, {useState, useEffect} from 'react';
import {Button, Text, TextInput, View} from 'react-native';
import {ROUTE} from '../constant';
import {WeatherModel} from '../model';

export const Home = (props: any) => {
  const [weather, setWeather]: any = useState(null);
  const [city, setCity] = useState('');

  const API_KEY = '3da971b1454718615b2aa3b8ebe8c0c0';

  const getWeatherFromAPI = () => {
    return fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`,
    ).then(res => res.json());
  };

  const getWeather = () => {
    if (city) {
      getWeatherFromAPI().then((res: WeatherModel) => setWeather(res));
    }
  };

  const WeatherPlan = () => {
    return (
      <View>
        <Text>{weather.weather[0].main}</Text>
        <Text>country: {weather.sys.country}</Text>
        <Text>sunrise: {weather.sys.sunrise}</Text>
        <Text>sunset: {weather.sys.sunset}</Text>
        <Text>temp: {weather.main.temp}</Text>
        <Text>temp_max: {weather.main.temp_max}</Text>
        <Text>temp_min: {weather.main.temp_min}</Text>
      </View>
    );
  };

  return (
    <View>
      <TextInput
        placeholder="Enter City"
        onChangeText={newCity => setCity(newCity)}></TextInput>
      <Button title="Go!" onPress={() => getWeather()}></Button>
      {/* <Text>{weather}</Text> */}
      {weather && <WeatherPlan />}
      <Button
        title="About"
        onPress={() => props.navigation.navigate(ROUTE.about)}></Button>
    </View>
  );
};
