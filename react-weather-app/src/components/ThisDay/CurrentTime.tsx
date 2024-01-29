import { useTime } from '../../utils/useTime';

const options: Intl.DateTimeFormatOptions = {
  hour: 'numeric',
  minute: 'numeric',
  second: 'numeric',
};

const CurrentTime = () => {
  const currentTime = useTime(1000);
  const time = new Intl.DateTimeFormat('ko-kr', options).format(currentTime);
  return <div>{time}</div>;
};

export default CurrentTime;
