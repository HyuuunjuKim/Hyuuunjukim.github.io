import styled from '@emotion/styled';
import { PALETTE } from '../../constants';

const Container = styled.div`
  background-color: ${PALETTE.GRAY_100};
  padding: 4rem 16rem;
`;

const Title = styled.h2`
  margin-bottom: 3.2rem;
`;

const ProjectListContainer = styled.div`
  display: flex;
  overflow-y: auto;
  gap: 3.6rem;
`;

export { Container, Title, ProjectListContainer };
