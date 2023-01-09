import React from "react";
import useSWR from "swr";
import { Card } from "../../components";
import { api } from "../../utils";
import { Container, Title, Wrapper } from "../styles";
import { Splide, SplideSlide } from "@splidejs/react-splide";

const Upcoming = () => {
  const { data, error } = useSWR("/api/anime/upcoming", api.fetcher);

  if (!data || error) return null;
  return (
    <Container>
      <Title>Upcoming</Title>
      <Splide
        options={{
          type: "loop",
          perPage: 6,
          perMove: 1,
          arrows: false,
          pagination: false,
          breakpoints: {
            1024: {
              perPage: 4,
            },
            768: {
              perPage: 3,
            },
            640: {
              perPage: 2,
            },
          },
        }}
      >
        {data.results.map((anime) => (
          <SplideSlide>
            <Card key={anime.id} {...anime} />
          </SplideSlide>
        ))}
      </Splide>
    </Container>
  );
};

export default Upcoming;
