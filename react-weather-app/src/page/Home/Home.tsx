import AllDays from '../../components/AllDays';
import Header from '../../components/Header';
import ThisDay from '../../components/ThisDay';
import ThisDayInfo from '../../components/ThisDayInfo';
import { HomeWrapper, ThisDayBlock } from './styled';

const Home = () => {
  return (
    <HomeWrapper>
      <Header />
      <ThisDayBlock>
        <ThisDay />
        <ThisDayInfo />
      </ThisDayBlock>
      <AllDays />
    </HomeWrapper>
  );
};

export default Home;
