import { useRouter } from "next/router";
import React from "react";
import useSWR from "swr";
import { api } from "../../../utils";
import { Container } from "../../../styles/shared";
import { InfoContainer } from "../../../containers";
import { Episodes } from "../../../components";
import Head from "next/head";

const Info = () => {
  const router = useRouter();
  const { id, dub } = router.query;

  if (!id) return null;
  const { data, error } = useSWR(
    `/api/anime/info/${id}?dub=${dub || false}`,
    api.fetcher
  );

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
        <meta property="og:image" content={data?.image || data?.cover} />
        <meta
          property="og:image:alt"
          content={
            !data
              ? "Streamable"
              : data?.title?.english ||
                data?.title?.romaji ||
                data?.title?.native
          }
        />
        <meta property="og:image:type" content="small" />
        <title>
          {!data
            ? "Streamable"
            : data?.title?.english ||
              data?.title?.romaji ||
              data?.title?.native}
        </title>
      </Head>
      <Container>
        <InfoContainer data={data} />
      </Container>
    </>
  );
};

export default Info;
