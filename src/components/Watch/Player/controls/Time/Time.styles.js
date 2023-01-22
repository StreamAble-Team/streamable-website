import styled from "styled-components";
import { Time } from "@vidstack/player-react";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: -3px;
  margin-left: -0.5rem;
`;

export const MediaTime = styled(Time)`
  font-size: 1rem;
`;

export const Separator = styled.div`
  margin: 0 0.5rem;
  font-size: 1.3rem;
  font-weight: 700;
`;
