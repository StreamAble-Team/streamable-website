import { Splide, SplideSlide } from "@splidejs/react-splide";
import React from "react";
import { BoxCard } from "../../components";

const CardRow = ({ data, splideRef, key }) => {
  return (
    <Splide
      ref={splideRef}
      options={{
        type: "loop",
        perPage: 4,
        perMove: 1,
        arrows: false,
        pagination: false,
        autoWidth: true,
        gap: "1.4rem",
        breakpoints: {
          1380: {
            perPage: 4,
          },
          1044: {
            perPage: 3,
          },
          890: {
            perPage: 2,
          },
          640: {
            perPage: 2,
          },
          430: {
            perPage: 1,
          },
        },
      }}
    >
      {data.map((anime) => (
        <SplideSlide>
          <BoxCard key={`${key}-${anime.id}`} {...anime} />
        </SplideSlide>
      ))}
    </Splide>
  );
};

export default CardRow;
