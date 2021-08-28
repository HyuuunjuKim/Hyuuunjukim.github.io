import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { PALETTE } from '../../../constants';
import { Month } from '../../../types';

interface TitleProps {
  color: string;
}

interface LineProps {
  startMonth: Month | '';
}

const Container = styled.div`
  display: flex;
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

const Line = styled.div<LineProps>`
  height: 100%;
  position: relative;
  width: 0.4rem;
  background-color: ${PALETTE.GRAY_300};

  ${({ startMonth }) =>
    startMonth &&
    css`
      &::before {
        content: '';
        width: 1.6rem;
        height: 1.6rem;
        border-radius: 50%;
        background-color: ${PALETTE.GRAY_300};
        position: absolute;
        left: -0.6rem;
        top: -0.6rem;
      }
    `}

  &::after {
    content: '';
    width: 1.6rem;
    height: 1.6rem;
    border-radius: 50%;
    background-color: ${PALETTE.GRAY_300};
    position: absolute;
    left: -0.6rem;
    bottom: -0.6rem;
  }
`;

const LineContainer = styled.div`
  position: relative;
  height: auto;
  width: 10rem;
`;

const StartMonth = styled.div`
  position: absolute;
  top: -1rem;
  left: 1.6rem;
`;

const EndMonth = styled.div`
  position: absolute;
  bottom: -1rem;
  left: 1.6rem;
`;

const ProjectContainer = styled.div`
  display: flex;
  gap: 2.8rem;
  padding: 2rem;
`;

export {
  Container,
  Title,
  Description,
  Detail,
  Line,
  StartMonth,
  EndMonth,
  LineContainer,
  ProjectContainer,
};
