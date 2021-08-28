import { css } from '@emotion/react';
import styled from '@emotion/styled';

interface ContainerProps {
  width: string;
  color: string;
}

const Container = styled.div<ContainerProps>`
  ${({ width, color }) =>
    width &&
    color &&
    css`
      width: ${width};
      height: ${width};
      border-radius: 50%;
      background-color: ${color};
    `}
`;

export { Container };
