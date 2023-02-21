import styled, { css } from "styled-components";
import { FaRegClosedCaptioning, FaClosedCaptioning } from "react-icons/fa";

import { ClosedCaptionsOnIcon, ClosedCaptionsIcon } from "@vidstack/react";

const sharedStyles = css`
  font-size: ${({ theme }) => theme.videoPlayer.iconSize};
  @media (max-width: 768px) {
    font-size: ${({ theme }) => theme.videoPlayer.iconSizeMobile};
  }
`;

export const MediaCaptionsOnIcon = styled(ClosedCaptionsIcon)`
  ${sharedStyles}
`;

export const MediaCaptionsOffIcon = styled(ClosedCaptionsOnIcon)`
  ${sharedStyles}
`;
