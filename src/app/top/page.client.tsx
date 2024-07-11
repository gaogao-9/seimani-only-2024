"use client";

import { useCallback, useEffect, useMemo, useState } from "react";
import Image from "next/image";
import styled from "@emotion/styled";
import { css } from "@emotion/css";
import { keyframes } from "@emotion/react";
import { ResponsiveImage, isSmallSize } from "@/components/ResponsiveImage";
import { useTopImageContext } from "@/utils/useTopImageContext";

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
  animation: 0.5s ease ${animationStartDelay + 0}s 1 running both
    ${BackgroundInAnimation};
  transform-origin: center bottom;
`;

const originalLogoImageSize = {
  w: 800,
  h: 923,
} as const;

const logoImageSize = {
  w: originalLogoImageSize.w / 4,
  h: originalLogoImageSize.h / 4,
};

type LogoWrapperProps = {
  position: "bottom" | "right";
  offsetX: number;
  offsetY: number;
};

const LogoWrapper = styled(ImageWrapper)`
  animation: 0.5s ease ${animationStartDelay + 1}s 1 running both
    ${LogoInAnimation};
`;

const createLogoWrapperTranslateStyle = ({
  position,
  offsetX,
  offsetY,
}: LogoWrapperProps) => css`
  transition: transform 0.45s ease;
  transform: translate(
      ${originalLogoImageSize.w * ((position === "bottom" ? 0.5 : 0.26) + offsetX) - logoImageSize.w / 2}px,
      ${originalLogoImageSize.h * ((position === "bottom" ? 0.85 : 0.85) + offsetY) - logoImageSize.h / 2}px
    );
`;

const imageSize = {
  w: 1200,
  h: 1600,
} as const;

const Page: React.FC = () => {
  const topImageContext = useTopImageContext();
  const [logoPosition, setLogoPosition] = useState<"bottom" | "right">(
    "bottom",
  );
  const [[logoOffsetX, logoOffsetY], setLogoOffset] = useState<
    [number, number]
  >([0, 0]);

  const onResize = useCallback((canvasSize: { w: number; h: number }) => {
    const imageRatio = logoImageSize.w / logoImageSize.h;
    const canvasRatio = canvasSize.w / canvasSize.h;
    const positionThrethold = 1.2;
    const rightOffsetThrethold = 3;
    const offsetPosition = canvasRatio > positionThrethold ? "right" : "bottom";

    if (canvasRatio <= positionThrethold && canvasRatio >= imageRatio) {
      const offsetRate =
        (canvasRatio - imageRatio) / (positionThrethold - imageRatio);

      setLogoOffset([0, offsetRate * 0]);
    } else if (offsetPosition === "bottom") {
      // オフセット条件に当てはまらないがポジションがbottomの場合は0位置として更新
      setLogoOffset([0, 0]);
    }

    if (offsetPosition === "right" && canvasRatio <= rightOffsetThrethold) {
      const offsetRate =
        (rightOffsetThrethold - canvasRatio) /
        (rightOffsetThrethold - positionThrethold);

      setLogoOffset([offsetRate * -0.1, 0]);
    } else if (offsetPosition === "right") {
      // オフセット条件に当てはまらないがポジションがrightの場合は0位置として更新
      setLogoOffset([0, 0]);
    }

    setLogoPosition(canvasRatio > positionThrethold ? "right" : "bottom");
  }, []);

  if (!topImageContext.loaded) return <></>;

  return (
    <ActorArea>
      <ResponsiveImage
        rectWidth="100%"
        rectHeight={["calc(100vh - 60px)", "calc(100dvh - 60px)"]}
        landscapePositionX="center"
        landscapePositionY={0.4}
        portraitPositionX={0.51}
        portraitPositionY="bottom"
        imageWidth={imageSize.w}
        imageHeight={imageSize.h}
        minimumHeightThretholdRate={200 / 100}
        minimumWidthThretholdRate={45 / 100}
        data-grid-area="character"
      >
        <BackgroundImageWrapper width={imageSize.w} height={imageSize.h}>
          <Image
            src={topImageContext.images["top.png"]}
            width={imageSize.w}
            height={imageSize.h}
            alt="トップ画像"
          />
        </BackgroundImageWrapper>
      </ResponsiveImage>
      <ResponsiveImage
        rectWidth="100%"
        rectHeight={["calc(100vh - 60px)", "calc(100dvh - 60px)"]}
        landscapePositionX={0.5}
        landscapePositionY="bottom"
        portraitPositionX={0.5}
        portraitPositionY="bottom"
        imageWidth={originalLogoImageSize.w}
        imageHeight={originalLogoImageSize.h}
        minimumHeightThretholdRate={300 / 100}
        minimumWidthThretholdRate={45 / 100}
        data-grid-area="logo"
        onResize={onResize}
      >
        <LogoWrapper
          width={originalLogoImageSize.w}
          height={originalLogoImageSize.h}
        >
          <Image
            src={topImageContext.images["logo.png"]}
            width={logoImageSize.w}
            height={logoImageSize.h}
            className={createLogoWrapperTranslateStyle({
              position: logoPosition,
              offsetX: logoOffsetX,
              offsetY: logoOffsetY,
            })}
            alt="ロゴ"
          />
        </LogoWrapper>
      </ResponsiveImage>
    </ActorArea>
  );
};

export default Page;
