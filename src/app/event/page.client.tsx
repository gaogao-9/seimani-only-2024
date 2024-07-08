"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import styled from "@emotion/styled";
import { AspectRatio, Flex, keyframes } from "@chakra-ui/react";
import { Card } from "@/components/Card";
import { AnchorLink } from "@/components/AnchorLink";

const TextFadeIn = keyframes`
  0% {
    transform: translateY(20%);
    opacity: 0;
  }
  100% {
    transform: translateY(0%);
    opacity: 1;
  }
`;

const animationStartDelay = 0.6;

const StyledCardSection = styled(Card.Section)<{ delay: number }>`
  animation: 0.5s ease calc(${({ delay }) => delay}s + ${animationStartDelay}s)
    1 running both ${TextFadeIn};
  transform-origin: center;
`;

const Page: React.FC = () => {
  const [transitionEnded, setTransitionEnded] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      window.sessionStorage.setItem("navigationStatus", "navigationEnd");
    }, 100);
    setTimeout(() => {
      setTransitionEnded(true);
    }, 200);
  }, []);

  let delayCount = 0;

  return (
    <>
      <Flex
        maxW="1200px"
        marginX="auto"
        flexDirection="column"
        align="center"
        justify="center"
      >
        <Card
          title={
            <Card.Title
              className={
                !transitionEnded ? "menuHeaderTransition event" : undefined
              }
            >
              イベント情報
            </Card.Title>
          }
        >
          <StyledCardSection delay={(delayCount++) / 10} title="色紙大募集">
            今回も全国の皆さんから色紙を募集します！
            <br />
            会場を政霊たちのイラストで華やかに飾りましょう！
            <br />
            募集条件や宛先は後日お知らせします。
          </StyledCardSection>
          <StyledCardSection delay={(delayCount++) / 10} title="ホワイトボード">
            こちらも毎回恒例のホワイトボード！
            <br />
            来場の記念に総理の皆さんからヒトコト～クダサイ～オネガイ～
          </StyledCardSection>
          <StyledCardSection delay={(delayCount++) / 10} title="アフターイベント">
            即売会パートの後に開催予定！
            <br />
            企画詳細は後日お知らせします。
          </StyledCardSection>
        </Card>
      </Flex>
    </>
  );
};

export default Page;
