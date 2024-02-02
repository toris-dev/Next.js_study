import { useParams } from 'react-router-dom';
import useWeather from '../../utils/useWeather';
import { ImgWrapper, ThisDayInfoWrapper } from './styled';

const nameInfo = ['온도', '기압', '습도', '바람'];

const imgInfo = [
  './images/temperature.svg',
  './images/pressure.svg',
  './images/humidity.svg',
  './images/wind.svg',
];

const ThisDayInfo: React.FC = () => {
  const { id } = useParams();
  const { data, isLoading } = useWeather(id ? id : 'seoul');

  const temp = `${Math.round(data?.main.temp || 0)}°C feels like${Math.round(data?.main.feels_like || 0)}°C`;
  const perssureMetric = Math.round((data?.main.pressure || 0) / 1.333);
  const pressure = `${perssureMetric} mmHg - ${perssureMetric < 748 ? 'low' : perssureMetric > 770 ? 'high' : 'nomarl'}`;
  const humidity = `${data?.main.humidity} %`;
  const wind = `${Math.round((data?.wind.speed || 0) * 10)} mph`;
  const dataInfo = [temp, pressure, humidity, wind];
  return (
    <ThisDayInfoWrapper>
      <div>
        {imgInfo.map((img, key) => (
          <ImgWrapper key={key}>
            <img src={img} alt="icon" key={key} />
          </ImgWrapper>
        ))}
      </div>
      <div>
        {nameInfo.map((info, index) => (
          <h2 key={index}>{info}</h2>
        ))}
      </div>
      <div>
        {dataInfo.map((info, index) => (
          <p key={index}>{info}</p>
        ))}
      </div>
    </ThisDayInfoWrapper>
  );
};

export default ThisDayInfo;
