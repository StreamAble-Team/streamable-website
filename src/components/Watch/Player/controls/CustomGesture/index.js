import { useMediaContext, useMediaRemote } from "@vidstack/player-react";
import React from "react";
import { Button } from "./styles";

const CustomGesture = () => {
  const remote = useMediaRemote();
  const { paused } = useMediaContext();

  const handleGesture = (e) => {
    if (paused) return remote.play(e);
    remote.pause(e);
  };

  return <Button onPointerUp={handleGesture}></Button>;
};

export default CustomGesture;
