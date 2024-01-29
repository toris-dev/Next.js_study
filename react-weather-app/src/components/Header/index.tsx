import { Link } from 'react-router-dom';
import CitySelect from './CitySelect/CitySelect';
import { HeaderWrapper, Logo } from './styled';

const Header = () => {
  return (
    <HeaderWrapper as="header">
      <Logo>
        <Link to="/">
          <img src="./images/logo.svg" alt="logo" />
        </Link>
        <h2>날씨 앱</h2>
      </Logo>
      <CitySelect />
    </HeaderWrapper>
  );
};

export default Header;
