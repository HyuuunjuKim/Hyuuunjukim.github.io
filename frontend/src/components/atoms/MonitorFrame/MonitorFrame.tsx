import React from 'react';
import { Container, Image, Top, Circle } from './MonitorFrame.styles';

interface Props {
  src?: string;
}

const MonitorFrame = ({ src = '' }: Props) => (
  <Container>
    <Top>
      <Circle color="#ED6A5E" />
      <Circle color="#E9DC6C" />
      <Circle color="#61C554" />
    </Top>
    <Image src={src} />
  </Container>
);

export default MonitorFrame;
