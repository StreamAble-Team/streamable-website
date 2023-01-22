import { FaCompress, FaExpand } from "react-icons/fa";
import styled from "styled-components";

export const Container = styled.div`
  position: relative;
  z-index: 2;
`;

export const MediaEnterFullscreen = styled(FaExpand)`
  font-size: ${({ theme }) => theme.videoPlayer.iconSize};
  cursor: pointer;
  @media (max-width: 768px) {
    font-size: ${({ theme }) => theme.videoPlayer.iconSizeMobile};
  }
`;

export const MediaExitFullscreen = styled(FaCompress)`
  font-size: ${({ theme }) => theme.videoPlayer.iconSize};
  cursor: pointer;
  @media (max-width: 768px) {
    font-size: ${({ theme }) => theme.videoPlayer.iconSizeMobile};
  }
`;
