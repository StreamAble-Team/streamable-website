import styled from "styled-components";

export const Container = styled.div`
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
  margin: 0 !important;
  padding: 0 !important;
`;
