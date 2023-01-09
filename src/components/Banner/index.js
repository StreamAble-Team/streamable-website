import React, { useEffect, useState } from "react";
import LeftSideBanner from "./Left";
import RightSideBanner from "./Right";
import { Container } from "./styles";

const Banner = ({ data }) => {
  const [index, setIndex] = useState(0);
  const [total, setTotal] = useState(5);

  // useEffect(() => {
  //   data.results.splice(0, total);
  // }, []);

  if (!data) return null;

  return (
    <Container>
      <LeftSideBanner data={data.results[index]} index={index} />
      <RightSideBanner
        data={data.results}
        total={total}
        index={index}
        setIndex={setIndex}
      />
    </Container>
  );
};

export default Banner;
