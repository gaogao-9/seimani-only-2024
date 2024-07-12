import styled from "@emotion/styled";

export const ImageWrapper = styled.div<{
  width?: number;
  height?: number;
  playstate?: "running" | "paused";
}>`
  position: absolute;
  top: 0;
  left: 0;
  width: ${({ width }) => (width ? `${width}px` : "100%")};
  height: ${({ height }) => (height ? `${height}px` : "100%")};
  transform-origin: center center;
  transform-style: preserve-3d;
  animation-play-state: ${({ playstate = "running" }) => playstate};
`;
