import { styled } from "styled-components";

export const MediaBufferingContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  /* prevent blocking lower elements (e.g., gestures). */
  pointer-events: none;
  /** place above poster (optional). */
  z-index: 3;
`;

export const MediaBufferingIcon = styled.svg`
  width: 96px;
  height: 96px;
  color: white;
  opacity: 0;
  transition: opacity 200ms ease;
`;

export const MediaBufferingTrack = styled.circle`
  opacity: 0.25;
`;

export const MediaBufferingTrackFill = styled.circle`
  opacity: 0.75;
  stroke-dasharray: 100;
  stroke-dashoffset: 50;
`;
