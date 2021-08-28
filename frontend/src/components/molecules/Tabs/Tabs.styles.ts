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
`;

const buttonCSS = css`
  margin-bottom: 0.3rem;
  height: 100%;
  border-radius: 0;
  position: relative;
`;

const selectedButtonCSS = css`
  margin-bottom: 0;
  height: 100%;
  border-radius: 0;
  border-bottom: 0.3rem solid ${PALETTE.BLACK};
  color: ${PALETTE.BLACK};
`;

export { Container, buttonCSS, selectedButtonCSS };
