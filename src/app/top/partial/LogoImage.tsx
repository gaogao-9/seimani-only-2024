"use client";

import Image from "next/image";
import styled from "@emotion/styled";
import { keyframes } from "@emotion/react";
import { ImageWrapper } from "./ImageWrapper";

const animationStartDelay = 0.5;

const LogoInAnimation = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;

type LogoWrapperProps = {
  position: "bottom" | "right";
  offsetX: number;
  offsetY: number;
};

export const originalLogoImageSize = {
  w: 800,
  h: 928,
} as const;

export const logoImageSize = {
  w: originalLogoImageSize.w / 4,
  h: originalLogoImageSize.h / 4,
};

export const LogoWrapper = styled(ImageWrapper)`
  animation: 0.5s ease ${animationStartDelay + 1}s 1 running both
    ${LogoInAnimation};
`;

export const LogoImage = styled(Image)`
  transition: transform 0.45s ease;
`;

export const createLogoWrapperTransformStyle = ({
  position,
  offsetX,
  offsetY,
}: LogoWrapperProps) =>
  `translate(${
    originalLogoImageSize.w * ((position === "bottom" ? 0.5 : 0.26) + offsetX) -
    logoImageSize.w / 2
  }px, ${
    originalLogoImageSize.h *
      ((position === "bottom" ? 0.85 : 0.85) + offsetY) -
    logoImageSize.h / 2
  }px)`;
