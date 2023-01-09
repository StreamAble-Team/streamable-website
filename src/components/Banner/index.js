import React, { useEffect, useRef, useState } from "react";
import { Timer } from "../../utils";
import LeftSideBanner from "./Left";
import RightSideBanner from "./Right";
import { Container } from "./styles";

const Banner = ({ data }) => {
  const [index, setIndex] = useState(0);
  const [total, setTotal] = useState(5);
  const active = useRef();
  const interval = 5000;

  const intervalRef = new Timer(() => {
    setIndex((prev) => {
      if (prev < total - 1) return prev + 1;
      return 0;
    });
  }, interval);

  useEffect(() => {
    intervalRef.start();
    return () => {
      intervalRef.clear();
    };
  }, [intervalRef]);

  if (!data) return null;

  return (
    <Container
      onMouseEnter={() => intervalRef.pause()}
      onMouseLeave={() => intervalRef.resume()}
    >
      <LeftSideBanner data={data.results[index]} index={index} />
      <RightSideBanner
        data={data.results}
        total={total}
        index={index}
        setIndex={setIndex}
        setActive={active}
      />
    </Container>
  );
};

export default Banner;
