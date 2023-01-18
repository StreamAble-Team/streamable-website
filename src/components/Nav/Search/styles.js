import styled from "styled-components";

export const SearchContainer = styled.div`
  position: relative;
  width: 350px;
  transition: width 0.3s ease-in-out;
  @media (max-width: 768px) {
    width: 150px;
    margin-right: 0.5rem;
    &:focus-within,
    &:focus {
      width: 800px;
    }
  }
`;
