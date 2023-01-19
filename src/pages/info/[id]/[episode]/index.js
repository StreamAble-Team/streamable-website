import axios from "axios";
import Head from "next/head";
import React from "react";
import { WatchContainer } from "../../../../containers";
import { Container } from "../../../../styles/shared";
import { api, utils } from "../../../../utils";

export const getServerSideProps = async (context) => {
  const { params, query, resolvedUrl } = context;
  const { id, episode } = params;
  let { dub } = query;
  const { SERVER_URL: serverURL } = process.env;

  dub = !dub || eval(dub) === false ? false : true;

  let data = {};

  await axios
    .get(`${serverURL}/api/anime/info/${id}?dub=${dub}`)
    .then(async (res) => {
      data = {};
      if (!res.data) return null;
      const { data: watchData } = await axios.get(
        `${serverURL}/api/anime/watch/` + res.data?.episodes[episode - 1].id
      );
      data = {
        ...res.data,
        ...watchData,
      };
    });

  return {
    props: {
      data,
    },
  };
};

const EpisodePage = (props) => {
  const { data } = props;

  const parsed = utils.textSanitizer(data?.description);

  const proxy = `https://cors.proxy.consumet.org`;

  if (!data) return null;
  return (
    <>
      <Head>
        <meta property="og:title" content="StreamAble" />
        <meta property="og:description" content={parsed} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta property="og:image" content={data?.image || data?.cover} />
        <meta
          property="og:image:alt"
          content={
            data?.title?.english || data?.title?.romaji || data?.title?.native
          }
        />
        <meta property="og:image:type" content="small" />
        <title>
          {data?.title?.english || data?.title?.romaji || data?.title?.native}
        </title>
      </Head>
      <Container>
        <WatchContainer data={data} />
      </Container>
    </>
  );
};

export default EpisodePage;
