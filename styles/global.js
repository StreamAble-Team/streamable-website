import { rgba } from "polished";
import { createGlobalStyle } from "styled-components";
import { MediaBufferingIcon } from "../src/components/Watch/Buffering/Buffering.styles";

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
