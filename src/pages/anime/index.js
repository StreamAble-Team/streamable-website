import Head from "next/head";
import React from "react";
import { Popular, TopRated, Upcoming } from "../../containers";
import { Container } from "../../styles/shared";
import { AnimePageContainer } from "./anime.styles";

const AnimePage = () => {
  return (
    <>
      <Head>
        <title>Streamable - Anime</title>
      </Head>
      <Container>
        <AnimePageContainer>
          <TopRated />
          <Popular />
          <Upcoming />
        </AnimePageContainer>
      </Container>
    </>
  );
};

export default AnimePage;
