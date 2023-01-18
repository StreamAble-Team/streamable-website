import Head from "next/head";
import useSWR from "swr";
import { Banner } from "../components";
import { TopRated, Upcoming } from "../containers";
import { Container } from "../styles/shared";
import { api } from "../utils";

export default function Home() {
  const { data, error } = useSWR("/api/anime/trending", api.fetcher);

  return (
    <>
      <Head>
        <meta property="og:title" content="StreamAble" />
        <meta
          property="og:description"
          content="Watch anime series and movies for free"
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta property="og:site_name" content="StreamAble" />
        <meta property="og:image" content="/logo.png" />
        <meta property="og:image:alt" content="StreamAble" />
        <meta property="og:image:type" content="small" />
        <title>Streamable - Home</title>
      </Head>
      <Container>
        <Banner data={data} />
        <TopRated />
        <Upcoming />
      </Container>
    </>
  );
}
