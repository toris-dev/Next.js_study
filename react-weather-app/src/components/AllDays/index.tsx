import { useParams } from 'react-router-dom';
import useWeatherForecast from '../../utils/useWeatherForecast';
import Day from './Day';
import { AllDaysWrapper } from './styled';

const AllDays = () => {
  const { id } = useParams();
  const { days, isLoading } = useWeatherForecast(id ? id : 'seoul');
  console.log(days);
  return (
    <AllDaysWrapper>
      {days.map((day) => (
        <Day key={day.date} day={day} />
      ))}
    </AllDaysWrapper>
  );
};

export default AllDays;
