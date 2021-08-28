import React from 'react';
import { ButtonBackgroundType, MonitorAlign } from '../../../types';
import { Button, MonitorFrame } from '../../atoms';
import { Container, Title, Description, Detail } from './Project.styles';

interface Props {
  monitorAlign?: MonitorAlign;
  src: string;
  title: string;
  description: string;
  color?: string;
}

const Project = ({
  monitorAlign = MonitorAlign.LEFT,
  src,
  title,
  description,
  color = '#03BD9E',
}: Props) => (
  <Container>
    {monitorAlign === MonitorAlign.LEFT && <MonitorFrame src={src} />}
    <Detail>
      <Title color={color}>{title}</Title>
      <Description>{description}</Description>
      <Button backgroundType={ButtonBackgroundType.OUTLINE} color={color}>
        코드 보러가기
      </Button>
    </Detail>
    {monitorAlign === MonitorAlign.RIGHT && <MonitorFrame src={src} />}
  </Container>
);
export default Project;
