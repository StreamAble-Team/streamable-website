import useSWR from "swr";
import { api } from "../utils";

export default function Home() {
  const { data, error } = useSWR("/api/anime/TopRated", api.fetcher);
  console.log(data);
  return <></>;
}
