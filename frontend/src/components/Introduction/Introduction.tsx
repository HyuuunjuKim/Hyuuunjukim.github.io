import React from 'react';
import { Container, ProfileImage, Introduce } from './Introduction.styles';
import { Me } from '../../assets/image';

const Introduction = () => {
  return (
    <Container>
      <ProfileImage src={Me} />
      <Introduce>소개 멘트</Introduce>
    </Container>
  );
};

export default Introduction;
