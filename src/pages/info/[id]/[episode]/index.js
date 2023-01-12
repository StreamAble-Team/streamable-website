import Head from "next/head";
import { useRouter } from "next/router";
import React from "react";
import useSWR from "swr";
import { WatchContainer } from "../../../../containers";
import { Container } from "../../../../styles/shared";
import { api } from "../../../../utils";

const EpisodePage = () => {
  const router = useRouter();
  const { id, episode, dub = false } = router.query;

  if (!id) return null;

  let { data: infoData, mutate: mutateInfo } = useSWR(
    `/api/anime/info/${id}?dub=${dub || false}`,
    api.fetcher
  );

  let { data: watchData, mutate: mutateWatch } = useSWR(
    !infoData ? null : `/api/anime/watch/` + infoData?.episodes[episode - 1].id,
    api.fetcher
  );

  const data = { ...infoData, ...watchData };

  if (!data) return null;
  return (
    <>
      <Head>
        <title>
          {data?.title?.english || data?.title?.romaji || data?.title?.native}
        </title>
      </Head>
      <Container>
        <WatchContainer data={data} />
        {/* <WatchContainer /> */}
      </Container>
    </>
  );
};

export default EpisodePage;
