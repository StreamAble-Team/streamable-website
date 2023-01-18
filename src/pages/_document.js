import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
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
        <meta property="og:title" content="StreamAble" />
        <meta
          property="og:description"
          content="Watch anime series and movies for free"
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta property="og:site_name" content="StreamAble" />
        <meta property="og:image" content="/logo.png" />
        <meta property="og:image:alt" content="StreamAble" />
        <meta property="og:image:type" content="small" />
        <meta
          name="keywords"
          content="watch animes, animes online, anime adsfree, adfree anime, anime"
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
