import styled from 'styled-components';
import { Container } from '../../Container.styled';

export const HeaderWrapper = styled(Container)`
  font-size: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 980px) {
    flex-direction: column;
    gap: 20px;
  }
`;

export const Logo = styled.div`
  display: flex;
  flex: 1;
  justify-content: flex-start;
  align-items: center;
  gap: 20px;

  h2 {
    font-weight: 700;
    font-size: 25px;
    line-height: 30px;
    text-transform: uppercase;
    color: #4793ff;
  }
`;
