import Head from "next/head";
import { ThemeProvider } from "styled-components";
import GlobalStyle from "../../styles/global";
import { darkTheme } from "../assets/themes/dark";
import { NavBar } from "../components";
import "@vidstack/player/hydrate.js";
import "../styles/reset.css";
import "@splidejs/react-splide/css";

export default function App({ Component, pageProps }) {
  return (
    <ThemeProvider theme={darkTheme}>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Streamable</title>
      </Head>
      <NavBar />
      <GlobalStyle />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
