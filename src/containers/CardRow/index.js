import { Splide, SplideSlide } from "@splidejs/react-splide";
import React from "react";
import { Card } from "../../components";

const CardRow = ({ data, splideRef, key }) => {
  return (
    <Splide
      ref={splideRef}
      options={{
        type: "loop",
        perPage: 6,
        perMove: 1,
        arrows: false,
        pagination: false,
        gap: "2.3rem",
        breakpoints: {
          1380: {
            perPage: 5,
          },
          1044: {
            perPage: 4,
          },
          890: {
            perPage: 3,
          },
          640: {
            perPage: 2,
          },
        },
      }}
    >
      {data.map((anime) => (
        <SplideSlide>
          <Card key={`${key}-${anime.id}`} {...anime} />
        </SplideSlide>
      ))}
    </Splide>
  );
};

export default CardRow;
