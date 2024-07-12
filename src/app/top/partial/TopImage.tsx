"use client";

import Image from "next/image";
import styled from "@emotion/styled";
import { keyframes } from "@emotion/react";
import { ImageWrapper } from "./ImageWrapper";

const animationStartDelay = 0.5;

const TopInAnimation = keyframes`
  0% {
    transform: translateY(-120%) scale(0.8, 1.2);
  }
  50% {
    transform: scale(1.2, 0.8);
  }
  100% {
    transform: translateY(0%) scale(1, 1);
  }
`;

export const originalTopImageSize = {
  w: 1200,
  h: 1600,
} as const;

export const topImageSize = originalTopImageSize;

export const TopImageWrapper = styled(ImageWrapper)`
  animation: 0.5s ease ${animationStartDelay + 0}s 1 running both
    ${TopInAnimation};
  transform-origin: center bottom;
`;

export const TopImage = Image;
