import styled from "styled-components";

export const Container = styled.div`
  margin-top: 0.7rem;
  position: absolute;
  padding: 1rem;
  border-radius: 0.5rem;
  width: 100%;
  background-color: ${({ theme }) => theme.base.navBg};
  z-index: 100;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;
