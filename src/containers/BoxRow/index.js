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
        gap: "2rem",
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
      {data.map((anime) => (
        <SplideSlide>
          <BoxCard key={`${key}-${anime.id}`} {...anime} />
        </SplideSlide>
      ))}
    </Splide>
  );
};

export default CardRow;
