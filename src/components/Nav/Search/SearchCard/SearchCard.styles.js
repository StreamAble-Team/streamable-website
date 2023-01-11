import Link from "next/link";
import styled from "styled-components";

export const ImageContainer = styled.div`
  width: 40px;
  height: 100%;
  background-image: url(${(props) => props.src});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  border-radius: 0.5rem;
  transition: transform 0.2s ease-in-out;
`;

export const TitleContainer = styled.div`
  padding-right: 3rem;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  padding-left: 1rem;
  overflow: hidden;
  flex: 1;
`;

export const Title = styled.h3`
  width: 100%;
  font-size: 1rem;
  font-weight: 500;
  color: ${({ theme }) => theme.text.primary};
  transition: color 0.2s ease-in-out;

  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
`;

export const Genres = styled.div`
  width: 100%;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
`;

export const Genre = styled.span`
  font-size: 0.8rem;
  color: ${({ theme }) => theme.text.secondary};
  margin-right: 0.35rem;
  &:last-child {
    margin-right: 0;
  }
`;

export const ReleaseDateContainer = styled.div`
  height: 100%;
  display: flex;
  flex-direction: row;
  align-items: flex-end;
`;

export const ReleaseDate = styled.span`
  font-size: 0.8rem;
  color: ${({ theme }) => theme.text.secondary};
`;

export const Container = styled(Link)`
  width: 100%;
  height: 50px;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  overflow: hidden;
  cursor: pointer;
  &:hover ${ImageContainer}, &:focus ${ImageContainer} {
    // transform: scale(1.05);
  }
  &:hover ${Title}, &:focus ${Title} {
    color: ${({ theme }) => theme.base.mainColor};
  }
`;
