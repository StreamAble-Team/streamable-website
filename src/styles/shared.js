import styled from "styled-components";

export const Container = styled.div`
  position: relative;
  width: 100%;
  max-width: 1750px;
  margin: 0 auto;
  padding: 0 3rem;
  padding-bottom: 3rem;
  @media (max-width: 768px) {
    padding: 0 1rem;
  }
`;

export const ContainerNoPadding = styled(Container)`
  padding: 0;
  overflow: hidden;
`;
