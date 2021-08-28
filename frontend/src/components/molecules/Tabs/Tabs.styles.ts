import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { PALETTE } from '../../../constants';

const Container = styled.div`
  display: flex;
  height: 5.2rem;
  width: 100%;
  justify-content: flex-start;
  align-items: center;
  line-height: 1.5;
  padding: 0 3.2rem;
`;

const buttonCSS = css`
  border-radius: 0;
  position: relative;
`;

const selectedButtonCSS = css`
  border-radius: 0;
  border-bottom: 0.2rem solid ${PALETTE.BLACK};
  color: ${PALETTE.BLACK};
`;

export { Container, buttonCSS, selectedButtonCSS };
