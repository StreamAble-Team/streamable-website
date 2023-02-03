import styled from "styled-components";

export const VideoControlsWrapper = styled.div`
  width: 100%;
  height: 100%;
  // position: relative;
  // z-index: 3;
`;

export const VideoControlsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: flex-end;
  position: absolute;
  bottom: 0;
  right: 0;
  width: 100%;
  height: 100%;
  opacity: 1;
  background: transparent;
  transition: opacity ease 300ms;
  padding-bottom: 20px;
  /* Position above media provider. */
  z-index: 3;
`;

export const PlayPauseWrapper = styled.div`
  position: relative;
  z-index: 3;
  display: flex;
  width: 340px;
  height: 40px;
  align-items: center;
  gap: 32px;
`;

export const BottomContainer = styled.div`
  width: calc(100% - 48px);
  margin: 0 24px;
  display: flex;
  gap: 4px;
  justify-content: space-between;
  align-items: center;
  &::after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 105px;
    background: linear-gradient(
      180deg,
      rgba(0, 0, 0, 0) 0%,
      rgba(0, 0, 0, 0.5) 100%
    );
    pointer-events: none;
    z-index: 1;
  }
`;

export const MediaButtons = styled.div`
  width: 340px;
  display: flex;
  justify-content: flex-end;
  position: relative;
  z-index: 3;
`;
