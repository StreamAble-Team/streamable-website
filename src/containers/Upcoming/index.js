import React, { useRef } from "react";
import useSWR from "swr";
import { Card } from "../../components";
import { api } from "../../utils";
import {
  Arrow,
  Arrows,
  Container,
  LeftArrow,
  RightArrow,
  Title,
  TitleWrapper,
} from "../styles";
import CardRow from "../CardRow";

const Upcoming = () => {
  const splideRef = useRef(null);
  const { data, error } = useSWR(
    "https://api.streamable.moe/api/anilist/upcoming",
    api.fetcher
  );

  if (!data || error) return null;
  return (
    <Container>
      <TitleWrapper>
        <Title>Upcoming</Title>
        <Arrows>
          <Arrow onClick={() => splideRef.current.splide.go("<")}>
            <LeftArrow />
          </Arrow>
          <Arrow onClick={() => splideRef.current.splide.go(">")}>
            <RightArrow />
          </Arrow>
        </Arrows>
      </TitleWrapper>
      <CardRow data={data?.results} splideRef={splideRef} key={`upcoming`} />
    </Container>
  );
};

export default Upcoming;
