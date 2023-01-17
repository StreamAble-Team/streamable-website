import { rgba } from "polished";
import { FaVolumeMute, FaVolumeUp } from "react-icons/fa";
import styled from "styled-components";

const height = "4rem",
  thumbWidth = "1rem",
  trackHeight = ".5rem";

export const Container = styled.div`
  position: relative;
  width: 100%;
  max-width: 200px;
  overflow: hidden;
  z-index: 2;
`;

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  // gap: 1rem;
`;

export const MediaMute = styled(FaVolumeMute)`
  font-size: ${({ theme }) => theme.videoPlayer.iconSize};
  cursor: pointer;
`;

export const MediaUnmute = styled(FaVolumeUp)`
  font-size: ${({ theme }) => theme.videoPlayer.iconSize};
  cursor: pointer;
`;

export const SliderContainer = styled.div`
  position: relative;
  width: 100%;
  margin-top: -5px;
`;

export const SliderTrack = styled.div`
  background-color: ${({ theme }) => rgba(theme.base.navBg, 0.8)};
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
