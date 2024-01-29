import OpenWeatherMap from 'openweathermap-ts';

const openWeather = new OpenWeatherMap({
  apiKey: process.env.REACT_APP_WEATHER_KEY || 'xxxxx',
});

openWeather.setUnits('metric');

export default openWeather;
