import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    body {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: ${({ theme }) => theme.text.fonts.primary}, sans-serif;
        background-color: ${({ theme }) => theme.base.bg};
        color: ${({ theme }) => theme.text.primary};
    }
`;

export default GlobalStyle;
