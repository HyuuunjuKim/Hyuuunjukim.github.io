import React from 'react';
import { MonitorAlign, Month } from '../../../types';
import { Project } from '../../molecules';
import {
  Container,
  Line,
  StartMonth,
  EndMonth,
  LineContainer,
  ProjectContainer,
} from './ProjectFrame.styles';

interface Project {
  id: number;
  src: string;
  title: string;
  description: string;
}

interface Props {
  startMonth?: Month | '';
  endMonth: Month;
  monitorAlign?: MonitorAlign;
  color?: string;
  projectList: Array<Project>;
}

const ProjectFrame = ({
  startMonth = '',
  endMonth,
  monitorAlign = MonitorAlign.LEFT,
  color = '#03BD9E',
  projectList = [],
}: Props) => (
  <Container>
    <LineContainer>
      {startMonth && <StartMonth>{startMonth}월</StartMonth>}
      <Line startMonth={startMonth} />
      <EndMonth>{endMonth}월</EndMonth>
    </LineContainer>
    <ProjectContainer>
      <Project
        monitorAlign={monitorAlign}
        src={projectList[0].src}
        title={projectList[0].title}
        description={projectList[0].description}
        color={color}
      />
      {projectList.length > 1 ? '점 놓기' : '점 필요 X'}
    </ProjectContainer>
  </Container>
);
export default ProjectFrame;
