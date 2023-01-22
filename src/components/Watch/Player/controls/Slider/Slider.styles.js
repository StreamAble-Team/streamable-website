import { rgba } from "polished";
import styled from "styled-components";

const height = "1rem",
  thumbWidth = "1rem",
  trackHeight = ".5rem";

export const Container = styled.div`
  width: 100%;
  height: ${height};
  margin-bottom: 1rem;
`;

export const Wrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  margin: 0 auto;
`;

export const SliderTrack = styled.div`
  background-color: ${({ theme }) => rgba("#141414", 0.8)};
  width: 100%;
  height: ${trackHeight};
  position: absolute;
  top: 50%;
  left: 0;
  z-index: 0;
  transform: translateY(-50%);
`;

export const SliderTrackFill = styled(SliderTrack)`
  background-color: ${({ theme }) => theme.base.mainColor};
  transform-origin: left center;
  transform: translateY(-50%) scaleX(var(--vds-fill-rate));
  will-change: transform;
  z-index: 1; /** above track. */
`;

export const SliderTrackFillBuffer = styled(SliderTrack)`
  background-color: ${({ theme }) => rgba(theme.base.mainColor, 0.3)};
  width: ${({ bufferedAmount }) => bufferedAmount}%;
  transition: width 0.1s ease-in-out;
  will-change: width;
  z-index: 1; /** above track. */
`;

export const SliderThumbContainer = styled.div`
  position: absolute;
  top: 0;
  left: var(--vds-fill-percent);
  width: ${thumbWidth};
  height: 100%;
  transform: translateX(-50%); /** re-center along x-axis. */
  z-index: 2; /** above track fill. */
  will-change: left;
`;

export const SliderThumb = styled.div`
  position: absolute;
  top: 50%;
  left: 0;
  width: ${thumbWidth};
  height: ${thumbWidth};
  border-radius: 9999px;
  background-color: ${({ theme }) => theme.base.mainColor};
  transform: translateY(-50%);
`;
