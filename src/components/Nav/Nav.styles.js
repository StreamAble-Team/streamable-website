import styled from "styled-components";

export const Container = styled.div`
  padding: 0 3rem;
  border-bottom: 4px solid ${({ theme }) => theme.base.navBg};
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
`;

export const Wrapper = styled.div`
  max-width: 1750px;
  margin: 0 auto;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  padding: 1rem 0;
  @media (max-width: 768px) {
    gap: 1rem;
  }
`;

export const ImageContainer = styled.div`
  width: 250px;
  height: 70px;
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
  margin-left: 5rem;
  flex: 1;
  & a {
    text-decoration: none;
    color: ${({ theme }) => theme.text.primary};
    font-size: 1.3rem;
    font-weight: 400;
    transition: all 0.15s ease-in-out;
    &:hover,
    &:focus,
    &.active {
      color: ${({ theme }) => theme.text.secondary};
    }
    &.active {
      padding-bottom: 0.25rem;
      font-weight: 600;
      border-bottom: 2px solid ${({ theme }) => theme.base.mainColor};
    }
  }
  @media (max-width: 768px) {
    display: none;
  }
`;
