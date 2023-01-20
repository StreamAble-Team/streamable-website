import styled from "styled-components";

export const SubtitlesContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  padding-bottom: 130px;
`;

export const SubtitlesWrapper = styled.div``;

export const Subtitle = styled.p`
  background: rgba(0, 0, 0, 0.5);
  color: white;
  font-size: 1.4rem;
  padding: 4px 12px;
  border-radius: 6px;
  @media (max-width: 768px) {
    font-size: 1.1rem;
  }
`;
