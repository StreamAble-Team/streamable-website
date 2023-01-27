import React from "react";
import Item from "./Item";
import { Container } from "./Right.styles";

const RightSideBanner = ({ data, total, index, setIndex, setActive }) => {
  if (!data) return null;
  return (
    <Container>
      {data.map((item, i) => {
        if (i < total) {
          return (
            <Item
              setRef={i === 1 ? setActive : null}
              key={`Banner-${item.id}`}
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
