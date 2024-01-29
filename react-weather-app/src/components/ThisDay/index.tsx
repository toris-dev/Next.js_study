import React from 'react';
import { useParams } from 'react-router-dom';
import useWeather from '../../utils/useWeather';
import CurrentTime from './CurrentTime';

const ThisDay: React.FC = () => {
  const { id } = useParams();
  const { data, isLoading } = useWeather(id ? id : 'seoul');

  const temperature = Math.round(data?.main.temp || 0);
  const cityName = data?.name;

  // 날씨에 따른 아이콘 설정
  const weatherIcon = data?.weather[0].main;
  const weatherId = data?.weather[0].id;

  let imageSrc = './images/mainly_cloudy.svg';

  // 조건부 렌더링, 함수를 정의하여 따로 만들 수 있지만 귀차니즘
  if (weatherIcon === 'Clear') {
    imageSrc = './images/weatherIcons/clear-sky.svg';
  }
  if (weatherIcon === 'Clouds' && (weatherId || 0) >= 803) {
    imageSrc = './images/weatherIcons/broken-clouds.svg';
  }
  if (weatherIcon === 'Clouds' && (weatherId || 0) < 803) {
    imageSrc = './images/weatherIcons/few-clouds.svg';
  }
  if (weatherIcon === 'Atmosphere') {
    imageSrc = './images/weatherIcons/mist.svg';
  }
  if (weatherIcon === 'Rain') {
    imageSrc = './images/weatherIcons/rain.svg';
  }
  if (weatherIcon === 'Rain' && (weatherId || 0) > 505) {
    imageSrc = './images/weatherIcons/shower-rain.svg';
  }
  if (weatherIcon === 'Snow') {
    imageSrc = './images/weatherIcons/snow.svg';
  }
  if (weatherIcon === 'Thunderstorm') {
    imageSrc = './images/weatherIcons/thunderstorm.svg';
  }
  return (
    <div>
      {temperature}
      {cityName}
      {isLoading}
      {imageSrc}
      <CurrentTime />
    </div>
  );
};

export default ThisDay;
