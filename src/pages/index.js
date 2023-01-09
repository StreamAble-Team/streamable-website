import useSWR from "swr";
import { Banner } from "../components";
import { TopRated, Upcoming } from "../containers";
import { Container } from "../styles/shared";
import { api } from "../utils";
import "@splidejs/react-splide/css";

export default function Home() {
  const { data, error } = useSWR("/api/anime/trending", api.fetcher);

  return (
    <Container>
      <Banner data={data} />
      <TopRated />
      <Upcoming />
    </Container>
  );
}
