import React from "react";
import { AppContainer } from "../../containers";
import { Container } from "../../styles/shared";
import Head from "next/head";

const AppPage = () => {
  return (
    <>
      <Head>
        <title>Streamable | App</title>
        <meta name="description" content="Streamable App" />
        <meta
          name="keywords"
          content="Streamable, App, Android, Anime, Streamable.moe"
        />
      </Head>
      <Container>
        <AppContainer />
      </Container>
    </>
  );
};

export default AppPage;
