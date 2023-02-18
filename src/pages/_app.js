import Head from "next/head";
import { ThemeProvider } from "styled-components";
import GlobalStyle from "../../styles/global";
import { darkTheme } from "../assets/themes/dark";
import { NavBar } from "../components";
import Script from "next/script";
import NextNProgress from "nextjs-progressbar";

import "vidstack/styles/base.css";
import "vidstack/styles/ui/buttons.css";
import "vidstack/styles/ui/sliders.css";

import "../styles/reset.css";
import "../../styles/load.css";
import "@splidejs/react-splide/css";

import favicon from "../../public/favicon.ico";
import { FooterContainer } from "../containers";

export default function App({ Component, pageProps }) {
  const G_TAG = process.env.NEXT_PUBLIC_ANALYTICS_ID;
  const Adsense_tag = process.env.NEXT_PUBLIC_ANDENSE_TID;
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
      <Script
        id="Adsense-id"
        async="true"
        strategy="beforeInteractive"
        src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-${Adsense_tag}`}
      />
      <Head>
        <meta charSet="utf-8" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="true"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;500;600;700;800&family=Roboto:wght@300;400;500;700;900&display=swap"
          rel="stylesheet"
        />
        <meta
          name="keywords"
          content="Streamable, Anime, Manga, Moe, Cartoons, Comics, Animation, Anime Streaming, Stream, Manga Streaming, Watch Anime, Watch Cartoons, Watch Comics, Video, Entertainment, Online Video, Streaming, Streamable.moe, Streamable Moe, Anime Online, Cartoons Online, Comics Online, Anime Videos, Cartoon Videos, Comic Videos, Streaming Service, Watch Videos, Online Streaming, Anime Watch, Cartoon Watch, Comic Watch, Streamable Videos, Anime Episodes, Cartoon Episodes, Comic Episodes, Streamable Anime, Streamable Cartoons, Streamable Comics, Anime Series, Cartoon Series, Comic Series, Anime TV, Cartoon TV, Comic TV, Streamable TV, Streamable Entertainment"
        />
        <meta
          name="description"
          content="Streamable.moe is a top-notch anime streaming platform that offers the best viewing experience for anime fans."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href={`/favicon.ico`} />
        <title>Streamable</title>
      </Head>
      <NextNProgress color="#7d5fff" />
      <ThemeProvider theme={darkTheme}>
        <NavBar />
        <GlobalStyle />
        <Component {...pageProps} />
        <FooterContainer />
      </ThemeProvider>
    </>
  );
}
