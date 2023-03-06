import { rgba } from "polished";
import { createGlobalStyle } from "styled-components";
import { MediaBufferingIcon } from "../src/components/Watch/Buffering/Buffering.styles";
import { VideoControlsContainer } from "../src/components/Watch/controls/controls.slider";
import { SubtitlesWrapper } from "../src/components/Watch/Subtitles/Subtitles.styles";

const GlobalStyle = createGlobalStyle`
    body {
      font-family: ${({ theme }) => theme.text.fonts.primary}, sans-serif;
      background-color: ${({ theme }) => theme.base.bg};
      color: ${({ theme }) => theme.text.primary};
    }
    ::-webkit-scrollbar {
      width: 8px;             
    }
    ::-webkit-scrollbar-track {
      background-color: ${({ theme }) => theme.base.navBg};
    }
    ::-webkit-scrollbar-thumb {
      background-color: ${({ theme }) => rgba(theme.base.mainColor, 0.5)};
      border-radius: 1rem;
    }
    media-player {
      position: relative;
    }

    media-player:not([can-play]) ${MediaBufferingIcon},
    media-player[waiting] ${MediaBufferingIcon} {
      opacity: 1;
      animation: spin 1s linear infinite;
    }

    media-player:not([can-play]) ${VideoControlsContainer},
    media-player[user-idle] ${VideoControlsContainer} {
      opacity: 0;
    }

    media-player:not([can-play]) ${SubtitlesWrapper},
    media-player[user-idle] ${SubtitlesWrapper} {
      padding-bottom: 40px;
    }

    @keyframes spin {
      to {
        transform: rotate(360deg);
      }
    }
`;

export default GlobalStyle;
