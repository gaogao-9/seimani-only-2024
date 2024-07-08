"use client";

import { useCallback, useEffect, useState } from "react";
import Image from "next/image";
import styled from "@emotion/styled";
import { keyframes } from "@emotion/react";
import { ResponsiveImage, isSmallSize } from "@/components/ResponsiveImage";
import { useTopImageContext } from "@/utils/useTopImageContext";

const isMobileMac = (): boolean => {
  if (typeof window === "undefined") return false;

  const ua = window.navigator.userAgent.toLowerCase();

  return (
    ua.indexOf("ipad") > -1 ||
    (ua.indexOf("macintosh") > -1 && "ontouchend" in document)
  );
};

const animationStartDelay = 0.5;

const BackgroundInAnimation = keyframes`
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

const RightSlideInAnimation = keyframes`
  0% {
    transform: translateX(120%) rotateZ(0deg);
  }
  50% {
    transform: translateX(0%)  rotateZ(-30deg);
  }
  100% {
    transform: translateX(0%) scale(1, 1);
  }
`;

const LeftSlideInAnimation = keyframes`
  0% {
    transform: translateX(-120%) rotateZ(0deg);
  }
  50% {
    transform: translateX(0%)  rotateZ(30deg);
  }
  100% {
    transform: translateX(0%) scale(1, 1);
  }
`;

const MoveAnimation = keyframes`
  0% {
    transform: translateY(0%);
    animation-timing-function: ease-out;
  }
  25% {
    transform: translateY(-1%);
    animation-timing-function: ease-in;
  }
  50% {
    transform: translateY(0%);
    animation-timing-function: linear;
  }
  75% {
    transform: translateY(1%);
    animation-timing-function: ease-in;
  }
  100% {
    transform: translateY(0%);
    animation-timing-function: ease-out;
  }
`;

const LogoInAnimation = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;

const ActorArea = styled.div`
  display: grid;

  [data-grid-area] {
    grid-area: 1/1;
  }
`;

const ImageWrapper = styled.div<{
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

const BackgroundImageWrapper = styled(ImageWrapper)`
  animation: 0.5s ease ${animationStartDelay + 0.1}s 1 running both
    ${BackgroundInAnimation};
  transform-origin: center bottom;
`;

const CartierImageWrapper = styled(ImageWrapper)`
  animation: 0.8s ease ${animationStartDelay + 1}s 1 running both
      ${RightSlideInAnimation},
    6s ease ${animationStartDelay + 2}s infinite running forwards
      ${MoveAnimation};
  transform-origin: center bottom;
`;

const JeaneImageWrapper = styled(ImageWrapper)`
  animation: 0.8s ease ${animationStartDelay + 1.2}s 1 running both
      ${LeftSlideInAnimation},
    6s ease ${animationStartDelay + 2}s infinite running forwards reverse
      ${MoveAnimation};
  transform-origin: center bottom;
`;

const EffectImageWrapper = styled(ImageWrapper)`
  animation: 0.5s ease ${animationStartDelay + 1.7}s 1 running both
    ${BackgroundInAnimation};
  transform-origin: center bottom;
`;

const logoImageSize = {
  w: 869,
  h: 604,
};

type LogoWrapperProps = {
  position: "bottom" | "right";
  offsetX: number;
  offsetY: number;
};

const LogoWrapper = styled(ImageWrapper)<LogoWrapperProps>`
  animation: 0.5s ease ${animationStartDelay + 2.3}s 1 running both
    ${LogoInAnimation};

  & img {
    transform: scale(0.45)
      translate(
        ${({ position, offsetX }) =>
          logoImageSize.w *
          ((position === "bottom" ? -0.01 : -0.7) + offsetX)}px,
        ${({ position, offsetY }) =>
          logoImageSize.h * ((position === "bottom" ? 0.6 : -0.25) + offsetY)}px
      );
  }
`;

const Page: React.FC = () => {
  const topImageContext = useTopImageContext();
  const [imageSize, setImageSize] = useState(() => {
    return isMobileMac() || isSmallSize()
      ? ({
          w: 600,
          h: 800,
        } as const)
      : ({
          w: 1200,
          h: 1600,
        } as const);
  });
  const [logoPosition, setLogoPosition] = useState<"bottom" | "right">(
    "bottom",
  );
  const [[logoOffsetX, logoOffsetY], setLogoOffset] = useState<
    [number, number]
  >([0, 0]);

  const onResize = useCallback((canvasSize: { w: number; h: number }) => {
    const imageRatio = logoImageSize.w / logoImageSize.h;
    const canvasRatio = canvasSize.w / canvasSize.h;
    const positionThrethold = 1.5;
    const rightOffsetThrethold = 3;

    if (canvasRatio <= positionThrethold && canvasRatio >= imageRatio) {
      const offsetRate =
        (canvasRatio - imageRatio) / (positionThrethold - imageRatio);

      setLogoOffset([0, offsetRate * -0.18]);
    }

    if (
      canvasRatio <= rightOffsetThrethold &&
      canvasRatio > positionThrethold
    ) {
      const offsetRate =
        (rightOffsetThrethold - canvasRatio) /
        (rightOffsetThrethold - positionThrethold);

      setLogoOffset([offsetRate * 0.11, offsetRate * 0.09]);
    }

    setLogoPosition(canvasRatio > positionThrethold ? "right" : "bottom");
  }, []);

  useEffect(() => {
    const resizeObserver = new ResizeObserver((entry) => {
      setImageSize(
        isMobileMac() || isSmallSize()
          ? ({
              w: 600,
              h: 800,
            } as const)
          : ({
              w: 1200,
              h: 1600,
            } as const),
      );
    });

    resizeObserver.observe(window.document.body);

    return () => {
      resizeObserver.unobserve(window.document.body);
    };
  }, []);

  if (!topImageContext.loaded) return <></>;

  return (
    <ActorArea>
      <ResponsiveImage
        rectWidth="100%"
        rectHeight={["calc(100vh - 60px)", "calc(100dvh - 60px)"]}
        landscapePositionX="center"
        landscapePositionY={0.4}
        portraitPositionX={0.47}
        portraitPositionY="bottom"
        imageWidth={imageSize.w}
        imageHeight={imageSize.h}
        minimumHeightThretholdRate={200 / 100}
        minimumWidthThretholdRate={45 / 100}
        data-grid-area="character"
      >
        <BackgroundImageWrapper width={imageSize.w} height={imageSize.h}>
          <Image
            src={
              isMobileMac() || isSmallSize()
                ? topImageContext.images["top.png"]
                : topImageContext.images["top.png"]
            }
            width={imageSize.w}
            height={imageSize.h}
            alt="トップ画像"
          />
        </BackgroundImageWrapper>
      </ResponsiveImage>
    </ActorArea>
  );
};

export default Page;
