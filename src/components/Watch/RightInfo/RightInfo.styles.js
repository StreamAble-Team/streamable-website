import { rgba } from "polished";
import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  min-width: 100px;
  max-width: 400px;
  height: 100%;
  background-image: url(${({ src }) => src});
  border: 4px solid ${({ theme }) => theme.base.navBg};
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  border-radius: 0.5rem;
  overflow: hidden;
  @media (max-width: 768px) {
    max-width: 100%;
    margin-bottom: 1rem;
  }
`;

export const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  max-width: 100%;
  min-width: 300px;
  min-height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  background-color: ${({ theme }) => rgba(theme.base.navBg, 0.75)};
  padding: 1rem 1.5rem;
  overflow: hidden;
`;

export const Title = styled.h1`
  width: 100%;
  font-size: 1.6rem;
  font-weight: 600;
  color: ${({ theme }) => theme.text.primary};
  // margin-bottom: 1rem;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
`;

export const Description = styled.p`
  width: 100%;
  font-size: 1rem;
  font-weight: 400;
  color: ${({ theme }) => theme.text.secondary};
  margin-bottom: 1rem;
  max-lines: 7;
  -webkit-line-clamp: 7;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-box-orient: vertical;
`;

export const Episode = styled.span`
  width: 100%;
  font-size: 1.1rem;
  font-weight: 400;
  color: ${({ theme }) => theme.text.secondary};
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
  margin-bottom: 0.55rem;
`;

export const Genres = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  gap: 0.5rem;
  margin-bottom: 1rem;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

export const Genre = styled.span`
  width: fit-content;
  font-size: 1rem;
  font-weight: 400;
  color: ${({ theme }) => theme.text.secondary};
`;
