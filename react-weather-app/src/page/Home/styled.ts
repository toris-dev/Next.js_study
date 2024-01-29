import styled from 'styled-components';
import { Container } from '../../Container.styled';

export const HomeWrapper = styled.div`
  padding: 16px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const ThisDayBlock = styled(Container)`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 50p[x];

  @media (max-width: 980px) {
    flex-direction: column;
    gap: 20px;
  }
`;
