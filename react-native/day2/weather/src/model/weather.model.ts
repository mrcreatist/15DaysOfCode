export class WeatherModel {
  coord: WeatherCoordModel;
  weather: Array<WeatherDataModel>;
  base: string;
  main: WeatherMainModel;
  visibility: number;
  wind: WeatherWindModel;
  clouds: WeatherCloudModel;
  dt: number;
  sys: WeatherSysModel;
  timezone: number;
  id: number;
  name: string;
  cod: number;
}

interface WeatherSysModel {
  type: number;
  id: number;
  message: number;
  country: string;
  sunrise: number;
  sunset: number;
}

interface WeatherCloudModel {
  all: number;
}

interface WeatherWindModel {
  speed: number;
  deg: number;
}

interface WeatherMainModel {
  temp: number;
  feels_like: number;
  temp_min: number;
  temp_max: number;
  pressure: number;
  humidity: number;
}

interface WeatherDataModel {
  id: number;
  main: string;
  description: String;
  icon: String;
}

interface WeatherCoordModel {
  lon: number;
  lat: number;
}
