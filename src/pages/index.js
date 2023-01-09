import useSWR from "swr";
import { Banner } from "../components";
import { Container } from "../styles/shared";
import { api } from "../utils";

export default function Home() {
  const { data, error } = useSWR("/api/anime/trending", api.fetcher);

  return (
    <Container>
      <Banner data={data} />
    </Container>
  );
}
