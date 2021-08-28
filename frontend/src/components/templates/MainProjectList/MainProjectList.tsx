import React from 'react';
import { Container, Title, ProjectListContainer } from './MainProjectList.styles';
import { CVI, Prolog } from '../../../assets/image';
import { MainProject } from '../../organisms';

const MainProjectList = () => (
  <Container>
    <Title>Main Project</Title>
    <ProjectListContainer>
      <MainProject src={CVI} title="백신 중앙 정보원(CVI)" />
      <MainProject src={Prolog} title="Prolog" />
      <MainProject src={Prolog} title="Prolog" />
    </ProjectListContainer>
  </Container>
);

export default MainProjectList;
