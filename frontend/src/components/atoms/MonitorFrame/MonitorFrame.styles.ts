import styled from '@emotion/styled';

const Container = styled.div`
  min-width: 52rem;
  height: 30.8rem;
  border-radius: 0.6rem;
  display: flex;
  flex-direction: column;
  box-shadow: 0 0 1rem 0.8rem rgba(0, 0, 0, 0.06);
`;
const Image = styled.img`
  width: 100%;
  height: 28.9rem;
  object-fit: contain;
  border-bottom-left-radius: 0.6rem;
  border-bottom-right-radius: 0.6rem;
`;

const Top = styled.div`
  background-color: #35373a;
  width: 100%;
  height: 1.6rem;
  border-top-left-radius: 0.6rem;
  border-top-right-radius: 0.6rem;
  display: flex;
  align-items: center;
  padding-left: 0.8rem;
  gap: 0.4rem;
`;

const Circle = styled.div`
  width: 0.8rem;
  height: 0.8rem;
  border-radius: 50%;

  ${({ color }) => `background-color: ${color ? color : `#eeeeee`}`};
`;

export { Container, Image, Top, Circle };
