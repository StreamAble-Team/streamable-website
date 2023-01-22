import styled from "styled-components";

import { FaPlay, FaPause } from "react-icons/fa";

export const Container = styled.div``;

export const MediaPlay = styled(FaPlay)`
  font-size: ${({ theme }) => theme.videoPlayer.iconSize};
  cursor: pointer;
  @media (max-width: 768px) {
    font-size: ${({ theme }) => theme.videoPlayer.iconSizeMobile};
  }
`;

export const MediaPause = styled(FaPause)`
  font-size: ${({ theme }) => theme.videoPlayer.iconSize};
  cursor: pointer;
  @media (max-width: 768px) {
    font-size: ${({ theme }) => theme.videoPlayer.iconSizeMobile};
  }
`;
