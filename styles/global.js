import { rgba } from "polished";
import { createGlobalStyle } from "styled-components";
import { MediaBufferingIcon } from "../src/components/Watch/Player/Buffer/Buffer.styles";
import { ControlsContainer } from "../src/components/Watch/Player/controls/Controls.styles";
import {
  MediaEnterFullscreen,
  MediaExitFullscreen,
} from "../src/components/Watch/Player/controls/FullScreen/FullScreen.styles";
import {
  MediaPause,
  MediaPlay,
} from "../src/components/Watch/Player/controls/PlayButton/PlayButton.styles";
import {
  MediaMute,
  MediaUnmute,
  SliderThumbContainer,
} from "../src/components/Watch/Player/controls/Volume/Volume.styles";

const GlobalStyle = createGlobalStyle`
    body {
      font-family: ${({ theme }) => theme.text.fonts.primary}, sans-serif;
      background-color: ${({ theme }) => theme.base.bg};
      color: ${({ theme }) => theme.text.primary};
    }
    body::-webkit-scrollbar {
      width: 8px;             
    }
    body::-webkit-scrollbar-track {
      background-color: ${({ theme }) => theme.base.navBg};
    }
    body::-webkit-scrollbar-thumb {
      background-color: ${({ theme }) => rgba(theme.base.mainColor, 0.5)};
      border-radius: 1rem;
    } 
    vds-poster {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      z-index: 0;
      opacity: 0;
      object-fit: cover;
    }
    vds-poster[img-loaded] {
      opacity: 1;
    }
    
    /* Hide poster if it fails to load. */
    vds-poster[img-error] {
      display: none;
    }
    vds-time-slider {
      --height: 48px;
      --thumb-width: 24px;
      --track-height: 4px;
    
      display: flex;
      align-items: center;
      width: 100%;
      height: var(--height);
      /** Prevent thumb flowing out of slider. */
      margin: 0 calc(var(--thumb-width) / 2);
      cursor: pointer;
      padding: 2rem;
    }
    vds-volume-slider {
      --height: 48px;
      --thumb-width: 24px;
      --track-height: 4px;
    
      display: flex;
      align-items: center;
      width: 100%;
      max-width: 200px;
      height: var(--height);
      margin: 0 calc(var(--thumb-width) / 2);
      cursor: pointer;
      position: relative;
    }

    vds-time-slider[dragging] ${SliderThumbContainer} {
      left: var(--vds-pointer-percent);
    }
    vds-media[paused] ${MediaPause} {
      display: none;
    }
    vds-media:not([paused]) ${MediaPlay}  {
      display: none;
    }
    vds-media[started] vds-poster {
      opacity: 0;
    }
    vds-media[fullscreen] ${MediaEnterFullscreen} {
      display: none;
    }
    vds-media:not([fullscreen]) ${MediaExitFullscreen} {
      display: none;
    }
    vds-gesture.anywhere {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
    }

    vds-gesture.right-25 {
      position: absolute;
      top: 0;
      right: 0;
      width: 25%;
      height: 100%;
    }
    vds-media:not([muted]) ${MediaMute} {
      display: none;
    }
    vds-media[muted] ${MediaUnmute} {
      display: none;
    }
    vds-media[hide-ui] ${ControlsContainer},
    /* Hide controls while media is loading, or user is idle. */
    vds-media:not([can-play]) ${ControlsContainer},
    vds-media[user-idle] ${ControlsContainer}{
      opacity: 0;
      visibility: hidden;
      cursor: none !important;
    }
    
    vds-media:not([can-play]) ${MediaBufferingIcon},
    vds-media[waiting] ${MediaBufferingIcon} {
      opacity: 1;
      animation: spin 1s linear infinite;
    }

    @keyframes spin {
      to {
        transform: rotate(360deg);
      }
    }
`;

export default GlobalStyle;
