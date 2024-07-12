"use client";

import { useCallback, useMemo, useState } from "react";
import styled from "@emotion/styled";
import { ResponsiveImage } from "@/components/ResponsiveImage";
import { useTopImageContext } from "@/utils/useTopImageContext";
import {
  createLogoWrapperTransformStyle,
  LogoImage,
  logoImageSize,
  LogoWrapper,
  originalLogoImageSize,
} from "./partial/LogoImage";
import {
  TopImage,
  TopImageWrapper,
  originalTopImageSize,
  topImageSize,
} from "./partial/TopImage";

const ActorArea = styled.div`
  display: grid;

  [data-grid-area] {
    grid-area: 1/1;
  }
`;

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

  const logoImageTransformStyle = useMemo(
    () => ({
      transform: createLogoWrapperTransformStyle({
        position: logoPosition,
        offsetX: logoOffsetX,
        offsetY: logoOffsetY,
      }),
    }),
    [logoPosition, logoOffsetX, logoOffsetY],
  );

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
        imageWidth={originalTopImageSize.w}
        imageHeight={originalTopImageSize.h}
        minimumHeightThretholdRate={200 / 100}
        minimumWidthThretholdRate={45 / 100}
        data-grid-area="character"
      >
        <TopImageWrapper
          width={originalTopImageSize.w}
          height={originalTopImageSize.h}
        >
          <TopImage
            src={topImageContext.images["top.png"]}
            width={topImageSize.w}
            height={topImageSize.h}
            alt="トップ画像"
          />
        </TopImageWrapper>
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
          <LogoImage
            src={topImageContext.images["logo.png"]}
            width={logoImageSize.w}
            height={logoImageSize.h}
            style={logoImageTransformStyle}
            alt="ロゴ"
          />
        </LogoWrapper>
      </ResponsiveImage>
    </ActorArea>
  );
};

export default Page;
