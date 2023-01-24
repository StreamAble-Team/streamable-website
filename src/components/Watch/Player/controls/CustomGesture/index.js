import { useMediaRemote, useMediaState } from "@vidstack/react";
import React from "react";
import { Button } from "./styles";

const CustomGesture = () => {
  const remote = useMediaRemote();
  const { paused } = useMediaState();

  const handleGesture = (e) => {
    if (paused) return remote.play(e);
    remote.pause(e);
  };

  return <Button onPointerUp={handleGesture}></Button>;
};

export default CustomGesture;
