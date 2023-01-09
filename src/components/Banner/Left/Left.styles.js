import styled from "styled-components";

export const Container = styled.div`
  width: 80%;
  height: 100%;
  border-radius: 1rem;
  overflow: hidden;
`;

export const Item = styled.div`
  width: 100%;
  height: 100%;
  background: url(${({ background }) => background});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
`;

export const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  color: #fff;
`;

export const ItemContainer = styled.div`
  width: 55%;
  height: 100%;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-start;
`;

export const Title = styled.h1`
  font-family: ${({ theme }) => theme.text.fonts.secondary};
  font-size: 2rem;
  font-weight: 800;
  margin-bottom: 1rem;
  text-transform: lowercase;

  &:first-letter {
    text-transform: uppercase;
  }
`;

const numberOfLines = 5;
export const Description = styled.p`
  font-family: ${({ theme }) => theme.text.fonts.primary};
  font-size: 1rem;
  font-weight: 400;
  margin-top: 1rem;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: ${numberOfLines};
  line-clamp: ${numberOfLines};
  -webkit-box-orient: vertical;
  overflow: hidden;
  height: 112px;
`;
