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
