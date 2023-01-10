import { useRouter } from "next/router";
import React from "react";
import useSWR from "swr";
import { api } from "../../utils";
import { Container } from "../../styles/shared";
import { InfoContainer } from "../../containers";

const Info = () => {
  const router = useRouter();
  const { id } = router.query;

  if (!id) return null;
  const { data, error } = useSWR(`/api/anime/info/${id}`, api.fetcher);

  return (
    <Container>
      <InfoContainer data={data} />
    </Container>
  );
};

export default Info;
