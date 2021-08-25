import React from 'react';
import { Container, Image, Title } from './MainProject.styles';

interface Props {
  src: string;
  title: string;
}

const MainProject = ({ src, title }: Props) => (
  <Container>
    <Image src={src} />
    <Title>{title}</Title>
  </Container>
);
export default MainProject;
