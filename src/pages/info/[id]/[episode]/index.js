import axios from "axios";
import Head from "next/head";
import React from "react";
import { WatchContainer } from "../../../../containers";
import { Container, ContainerNoPadding } from "../../../../styles/shared";
import { api, utils } from "../../../../utils";
import { WebVTTParser } from "webvtt-parser";
import Four0FourContainer from "../../../../containers/404";

export const getServerSideProps = async (context) => {
  const { params, query, resolvedUrl } = context;
  const { id, episode } = params;
  let { dub, provider } = query;

  dub = !dub || dub === "false" || dub === false ? false : true;

  let data = {};
  let tree = null;

  await axios
    .get(
      `https://api.streamable.moe/api/anilist/info/${id}?dub=${dub}&provider=${
        provider ? provider : "gogoanime"
      }`
    )
    .then(async (res) => {
      data = {};
      if (!res?.data) return (data = null);
      if (!res.data?.episodes[episode - 1]) return (data = null);

      const { data: watchData } = await axios.get(
        `https://api.streamable.moe/api/anilist/watch/${
          res.data?.episodes[episode - 1].id
        }?provider=${provider}`
      );

      if (!watchData) data = null;

      const subtitlesEng =
        watchData?.subtitles?.find(
          (sub) => sub?.lang?.toLowerCase() === "english"
        ) || undefined;

      const parser = new WebVTTParser();
      const webVtt = (await subtitlesEng?.url)
        ? axios.get(subtitlesEng?.url || "")
        : null;

      const parsedTree = (await webVtt?.data)
        ? parser.parse(webVtt?.data, "metadata")
        : null;
      await parsedTree?.cues?.forEach((cue) => {
        cue.text = cue?.text?.replace(/\\h/g, "\n");
      });

      tree = parsedTree;

      data = {
        ...res?.data,
        ...watchData,
      };
    })
    .catch((err) => {
      console.log(err);
    });

  return {
    props: {
      data,
      tree: JSON.parse(JSON.stringify(tree)),
    },
  };
};

const EpisodePage = (props) => {
  const { data, tree } = props;

  const parsed = utils.textSanitizer(data?.description);

  if (!data) return <Four0FourContainer />;
  return (
    <>
      <Head>
        <meta name="description" content={parsed} />
        <meta name="keywords" content={parsed} />
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
      <ContainerNoPadding>
        <WatchContainer data={data} tree={tree} />
      </ContainerNoPadding>
    </>
  );
};

export default EpisodePage;
