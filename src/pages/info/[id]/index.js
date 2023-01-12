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

  if (!data) return null;
  return (
    <>
      <Head>
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
