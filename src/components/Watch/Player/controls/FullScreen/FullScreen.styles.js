import { FaCompress, FaExpand } from "react-icons/fa";
import styled from "styled-components";

export const Container = styled.div`
  position: relative;
  z-index: 2;
`;

export const MediaEnterFullscreen = styled(FaExpand)`
  font-size: ${({ theme }) => theme.videoPlayer.iconSize};
  cursor: pointer;
`;

export const MediaExitFullscreen = styled(FaCompress)`
  font-size: ${({ theme }) => theme.videoPlayer.iconSize};
  cursor: pointer;
`;
