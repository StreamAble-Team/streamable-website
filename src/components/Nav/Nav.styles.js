import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  padding: 1rem 2rem;
  border-bottom: 1px solid ${({ theme }) => theme.base.navBg};
`;

export const ImageContainer = styled.div`
  width: 340px;
  height: 60px;
  margin: 0 20px;
  & * {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
`;

export const Links = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  gap: 4rem;
  margin-left: 2rem;
  flex: 1;
  & a {
    text-decoration: none;
    color: ${({ theme }) => theme.text.primary};
    font-size: 1.5rem;
    font-weight: 600;
    transition: all 0.2s ease-in-out;
    &:hover {
      color: ${({ theme }) => theme.text.secondary};
    }
    &.active {
      color: ${({ theme }) => theme.text.secondary};
    }
  }
`;
