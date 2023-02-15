import { rgba } from "polished";
import styled from "styled-components";

export const SliderWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 30px;
`;

export const OpSkipTime = styled.div`
  position: absolute;
  height: 4px;
  background-color: ${({ theme }) => rgba("#c0b7eb", 1)};
  left: ${(props) => props.fromLeft}%;
  width: ${(props) => props.width}%;
  z-index: 1;
`;

export const VideoTime = styled.h4``;
