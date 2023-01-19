import Head from "next/head";
import { ThemeProvider } from "styled-components";
import GlobalStyle from "../../styles/global";
import { darkTheme } from "../assets/themes/dark";
import { NavBar } from "../components";
import Script from "next/script";
import NextNProgress from "nextjs-progressbar";

import "@vidstack/player/hydrate.js";
import "../styles/reset.css";
import "@splidejs/react-splide/css";

import favicon from "../../public/favicon.ico";

export default function App({ Component, pageProps }) {
  const G_TAG = process.env.NEXT_PUBLIC_ANALYTICS_ID;
  return (
    <>
      <Script
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=G-${G_TAG}`}
      />
      <Script
        id="google-analytics"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-${G_TAG}', {
            page_path: window.location.pathname,
          });
          `,
        }}
      />
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href={`/favicon.ico`} />
        <title>Streamable</title>
      </Head>
      <NextNProgress color="#7d5fff" />
      <ThemeProvider theme={darkTheme}>
        <NavBar />
        <GlobalStyle />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}
