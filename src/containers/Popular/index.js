import React, { useRef } from "react";
import useSWR from "swr";
import { BoxRow, CardRow } from "..";
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

const Popular = () => {
  const splideRef = useRef(null);
  const { data, error } = useSWR(
    "https://api.streamable.moe/api/anilist/popular",
    api.fetcher
  );

  if (!data || error) return null;
  return (
    <Container>
      <TitleWrapper>
        <Title>Popular</Title>
        <Arrows>
          <Arrow onClick={() => splideRef.current.splide.go("<")}>
            <LeftArrow />
          </Arrow>
          <Arrow onClick={() => splideRef.current.splide.go(">")}>
            <RightArrow />
          </Arrow>
        </Arrows>
      </TitleWrapper>
      <CardRow data={data?.results} splideRef={splideRef} key={`top-rated`} />
    </Container>
  );
};

export default Popular;
