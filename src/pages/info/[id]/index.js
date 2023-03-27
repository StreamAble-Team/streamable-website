import { useRouter } from "next/router";
import React from "react";
import { api, utils } from "../../../utils";
import { InfoContainer } from "../../../containers";
import Head from "next/head";

export const getServerSideProps = async (context) => {
  const { params, query, resolvedUrl } = context;
  const { id } = params;
  let { dub, provider } = query;

  dub = !dub || dub === "false" || dub === false ? false : true;

  const data = await api
    .getData(
      `anilist/info/${id}?dub=${dub}&provider=${
        provider ? provider : "gogoanime"
      }`
    )
    .catch((err) => {
      console.log(err);
    });

  const providers = await api.getData(`utils/providers/anime`).catch((err) => {
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

  const proxy = `https://proxy.vnxservers.com`;

  if (!data) return null;
  return (
    <>
      <Head>
        <meta name="description" content={parsed} />
        <meta name="keywords" content="Streamable" />
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
