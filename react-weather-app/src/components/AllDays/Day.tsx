import React from 'react';
import { IDay } from '../../utils/useWeatherForecast';
import { BottomPart, DayWrapper, TopPart } from './styled';

interface DayProps {
  day: IDay;
}

const Day: React.FC<DayProps> = ({ day }) => {
  const { date, forecast } = day;
  const temp = Math.max(...forecast.map((x) => x.main.temp)).toFixed();
  const lowestTemp = Math.min(...forecast.map((x) => Math.round(x.main.temp)));

  const weekDays = new Date(date);
  const dayOfWeeks = weekDays.toDateString().substring(0, 3);

  const dates = date.split('-').join('.').substring(5);
  return (
    <DayWrapper>
      <TopPart>
        <div>
          <h2>{dayOfWeeks}</h2>
          <h3>{dates}</h3>
        </div>
      </TopPart>
      <BottomPart>
        <h2>{temp}°</h2>
        <h3>{lowestTemp}°</h3>
      </BottomPart>
    </DayWrapper>
  );
};

export default Day;
