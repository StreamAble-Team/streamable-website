import { rgba } from "polished";
import { FaBars, FaTimes } from "react-icons/fa";
import styled from "styled-components";

export const Container = styled.nav`
  position: relative;
  z-index: 1;
  padding: 0 3rem;
  border-bottom: 4px solid ${({ theme }) => theme.base.navBg};
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  height: 5.5rem;
  background: ${({ theme, isInfo }) =>
    isInfo ? rgba(theme.base.navBg, 0.7) : null};
  @media (max-width: 768px) {
    padding: 0 1rem;
  }
`;

export const Wrapper = styled.div`
  height: 100%;
  max-width: 1750px;
  margin: 0 auto;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  @media (max-width: 768px) {
    gap: 1rem;
  }
`;

export const ImageContainer = styled.div`
  display: flex;
  align-items: center;
  width: 15%;
  & * {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
  & img {
    pointer-events: none;
  }
  @media (max-width: 768px) {
    width: 40%;
  }
`;

export const Links = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 3rem;
  flex: 1;
  margin: 0 5rem;
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
    @media (max-width: 768px) {
      text-align: left;
      font-size: 1.5rem;
      text-align: left;
    }
  }
  @media (max-width: 768px) {
    display: ${({ show }) => (show ? "flex" : "none")};
    padding: 2rem 3rem;
    position: absolute;
    flex-direction: column;
    align-items: flex-start;
    right: 0;
    top: 5rem;
    width: 70%;
    height: 100vh;
    background-color: ${({ theme }) => theme.base.navBg};
    z-index: 100;
    margin: 0;
`;

export const MobileMenuContainer = styled.div`
  position: relative;
  display: none;
  flex-grow: 0;
  flex-shrink: 0;
  margin-left: 1rem;
  @media (max-width: 768px) {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

export const MobileMenuIcon = styled(FaBars)`
  display: ${({ show }) => (show ? "block" : "none")};
  font-size: 2rem;
  margin-top: 0.2rem;
`;

export const MobileMenuCloseIcon = styled(FaTimes)`
  display: ${({ show }) => (show ? "block" : "none")};
  font-size: 2rem;
  margin-top: 0.2rem;
`;
