import styled from '@emotion/styled';
import { PALETTE } from '../../../constants';

const Container = styled.div`
  padding: 4rem 16rem;
`;

const Title = styled.h2``;

const TabsWrapper = styled.div`
  border-bottom: 0.1rem solid ${PALETTE.GRAY_300};
  height: fit-content;
`;

const TabDescription = styled.div`
  margin: 3.2rem 0;
`;

export { Container, Title, TabsWrapper, TabDescription };
