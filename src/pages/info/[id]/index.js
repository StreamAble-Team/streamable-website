import { useRouter } from "next/router";
import React from "react";
import useSWR from "swr";
import { api, utils } from "../../../utils";
import { ContainerNoPadding } from "../../../styles/shared";
import { InfoContainer } from "../../../containers";
import { Episodes } from "../../../components";
import Head from "next/head";
import axios from "axios";

export const getServerSideProps = async (context) => {
  const { params, query, resolvedUrl } = context;
  const { id } = params;
  let { dub } = query;

  dub = !dub || eval(dub) === false ? false : true;

  const { data } = await axios
    .get(`https://api.streamable.moe/api/anilist/info/${id}?dub=${dub}`)
    .catch((err) => {
      console.log(err);
    });

  const { data: providers } = await axios
    .get(`https://api.streamable.moe/api/utils/providers/anime`)
    .catch((err) => {
      console.log(err);
    });

  return {
    props: {
      data,
      providers,
    },
  };
};

const Info = (props) => {
  const { data, providers } = props;

  if (!data) return null;

  const parsed = utils.textSanitizer(data?.description);

  const proxy = `https://cors.streamable.moe`;

  if (!data) return null;
  return (
    <>
      <Head>
        <meta property="og:title" content="StreamAble" />
        <meta property="og:description" content={parsed} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          property="og:image"
          content={`https://streamable.moe/api/image/og?id=${data?.id}`}
        />
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
      <InfoContainer data={data} providers={providers} />
    </>
  );
};

export default Info;
