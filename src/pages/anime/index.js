import Head from "next/head";
import React from "react";
import { Popular, TopRated, Upcoming } from "../../containers";
import { AnimePageContainer } from "../../styles/anime.styles";
import { Container } from "../../styles/shared";

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
