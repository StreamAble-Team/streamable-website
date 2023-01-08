import { ThemeProvider } from "styled-components";
import { darkTheme } from "../assets/themes/dark";

export default function App({ Component, pageProps }) {
  return (
    <ThemeProvider theme={darkTheme}>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
