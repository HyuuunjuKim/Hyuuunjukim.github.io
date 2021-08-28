import styled from '@emotion/styled';
import { MonitorAlign } from '../../../types';

interface TitleProps {
  color: string;
}

const Container = styled.div`
  display: flex;
  gap: 2.8rem;
`;

const Title = styled.div<TitleProps>`
  font-size: 3.2rem;
  font-weight: 500;
  margin-bottom: 2rem;

  ${({ color }) => color && `color: ${color}`};
`;

const Description = styled.div`
  margin-bottom: 2rem;
`;

const Detail = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
`;

export { Container, Title, Description, Detail };
