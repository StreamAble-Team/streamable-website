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
    api.fetcher,
    {
      revalidateOnFocus: false,
    }
  );

  let { data: watchData, mutate: mutateWatch } = useSWR(
    !infoData ? null : `/api/anime/watch/` + infoData?.episodes[episode - 1].id,
    api.fetcher,
    {
      revalidateOnFocus: false,
    }
  );

  const data = { ...infoData, ...watchData };

  const parser = new DOMParser();
  const parsed = parser.parseFromString(data?.description, "text/html").body
    .textContent;

  const proxy = `https://cors.proxy.consumet.org`;

  if (!data) return null;
  return (
    <>
      <Head>
        <meta property="og:title" content="StreamAble" />
        <meta property="og:description" content={parsed} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          property="og:image"
          content={`${proxy}/${data?.image || data?.cover}`}
        />
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
