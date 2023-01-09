import React from "react";
import Item from "./Item";
import { Container } from "./Right.styles";

const RightSideBanner = ({ data, total, index, setIndex }) => {
  if (!data) return null;
  return (
    <Container>
      {data.map((item, i) => {
        if (i < total) {
          return (
            <Item
              key={item.id}
              {...item}
              index={i}
              active={i === index}
              setIndex={setIndex}
            />
          );
        }
      })}
    </Container>
  );
};

export default RightSideBanner;
