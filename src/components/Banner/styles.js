import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  margin: 2rem auto;
  height: 400px;
  display: flex;
  flex-direction: row
  justify-content: space-between;
  align-items: center;
  gap: 2rem;
  overflow: hidden;
  position: relative;
  @media (max-width: 1600px) {
    height: 400px;
  }
  @media (max-width: 768px) {
    flex-direction: column;
    width: 100%;
    gap: 1rem;
  }
`;
