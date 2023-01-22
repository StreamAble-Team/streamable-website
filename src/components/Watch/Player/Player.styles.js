import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  background-color: #000;
`;

export const VideoContainer = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  z-index: 3;
  & video {
    width: 100%;
    height: 100%;
    object-fit: contain;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;
