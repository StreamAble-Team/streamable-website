import { useRouter } from "next/router";
import React from "react";
import useSWR from "swr";
import { api, utils } from "../../../utils";
import { Container } from "../../../styles/shared";
import { InfoContainer } from "../../../containers";
import { Episodes } from "../../../components";
import Head from "next/head";
import axios from "axios";

export const getServerSideProps = async (context) => {
  const { params, query, resolvedUrl } = context;
  const { id } = params;
  let { dub } = query;
  const { SERVER_URL: serverURL } = process.env;

  dub = !dub || eval(dub) === false ? false : true;

  const { data } = await axios.get(
    `${serverURL}/api/anime/info/${id}?dub=${dub}`
  );

  return {
    props: {
      data,
    },
  };
};

const Info = (props) => {
  const { data } = props;

  if (!data) return null;

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
