import React from 'react';
import { ButtonBackgroundType, MonitorAlign, Month } from '../../../types';
import { Button, MonitorFrame } from '../../atoms';
import {
  Container,
  Title,
  Description,
  Detail,
  Line,
  StartMonth,
  EndMonth,
  LineContainer,
  ProjectContainer,
} from './Project.styles';

interface Props {
  startMonth?: Month | '';
  endMonth: Month;
  monitorAlign?: MonitorAlign;
  src: string;
  title: string;
  description: string;
  color?: string;
}

const Project = ({
  startMonth = '',
  endMonth,
  monitorAlign = MonitorAlign.LEFT,
  src,
  title,
  description,
  color = '#03BD9E',
}: Props) => (
  <Container>
    <LineContainer>
      {startMonth && <StartMonth>{startMonth}월</StartMonth>}
      <Line startMonth={startMonth} />
      <EndMonth>{endMonth}월</EndMonth>
    </LineContainer>
    <ProjectContainer>
      {monitorAlign === MonitorAlign.LEFT && <MonitorFrame src={src} />}
      <Detail>
        <Title color={color}>{title}</Title>
        <Description>{description}</Description>
        <Button backgroundType={ButtonBackgroundType.OUTLINE} color={color}>
          코드 보러가기
        </Button>
      </Detail>
      {monitorAlign === MonitorAlign.RIGHT && <MonitorFrame src={src} />}
    </ProjectContainer>
  </Container>
);
export default Project;
