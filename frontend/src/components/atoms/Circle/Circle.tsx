import React from 'react';
import { PALETTE } from '../../../constants';
import { Container } from './Circle.styles';

interface Props {
  width?: string;
  color?: string;
}

const Circle = ({ width = '1.6rem', color = PALETTE.GRAY_300 }: Props) => (
  <Container width={width} color={color} />
);

export default Circle;
