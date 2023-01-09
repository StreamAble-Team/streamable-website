import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 125px;
  background: ${({ theme }) => theme.base.navBg};
  display: flex;
  justify-content: space-between;
  gap: 1rem;
  border-radius: 1rem;
  overflow: hidden;
  opacity: ${({ active }) => (active ? 1 : 0.5)};
  border-bottom: ${({ active, theme }) =>
    active ? `1px solid ${theme.base.mainColor}` : "none"};
  transition: all 0.2s ease-in-out;
  cursor: pointer;
  &:hover,
  &:focus {
    opacity: 1;
  }
`;

export const LeftContainer = styled.div`
  width: 32%;
`;

export const RightContainer = styled.div`
  width: 68%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 0.5rem;
  padding: 0.8rem 0.3rem;
`;

export const ImageContainer = styled.div`
  width: 100%;
  height: 100%;
  overflow: hidden;
`;

export const Image = styled.div`
  width: 100%;
  height: 100%;
  background: url(${({ src }) => src});
  background-size: cover;
  background-position: bottom;
  background-repeat: no-repeat;
`;

export const Title = styled.h1`
  font-size: 1.3rem;
  font-weight: 700;
  color: ${({ theme }) => theme.text.primary};
  font-family: ${({ theme }) => theme.text.fonts.secondary};
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
`;

export const Subtitle = styled.h2`
  font-size: 1.2rem;
  font-weight: 400;
  color: ${({ theme }) => theme.text.secondary};
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
`;

export const Rating = styled.p``;
