import styled from "styled-components";

export const Container = styled.div`
  width: 20%;
  height: 100%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: flex-start;
  gap: 1rem;
  overflow: auto;
  &::-webkit-scrollbar {
    display: none;
  }
  @media (max-width: 768px) {
    width: 100%;
    height: 50%;
    flex-direction: column;
  }
`;
