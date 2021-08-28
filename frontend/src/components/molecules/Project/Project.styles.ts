import styled from '@emotion/styled';

interface TitleProps {
  color: string;
}

const Container = styled.div`
  display: flex;
`;

const Title = styled.div<TitleProps>`
  font-size: 3.2rem;
  font-weight: 500;
  margin-bottom: 2rem;

  ${({ color }) => color && `color: ${color}`};
`;

const Description = styled.div`
  margin-bottom: 2rem;
  width: 100%;
`;

const Detail = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
`;

const ProjectContainer = styled.div`
  display: flex;
  gap: 2.8rem;
  padding: 2rem;
`;

export { Container, Title, Description, Detail, ProjectContainer };
