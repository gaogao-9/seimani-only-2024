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
          <StyledCardSection delay={delayCount++ / 10} title="色紙大募集">
            今回も全国の皆さんから色紙を募集します！
            <br />
            会場を政霊たちのイラストで華やかに飾りましょう！
            <br />
            募集条件や宛先は後日お知らせします。
          </StyledCardSection>
          <StyledCardSection delay={delayCount++ / 10} title="ホワイトボード">
            こちらも毎回恒例のホワイトボード！
            <br />
            来場の記念に総理の皆さんからヒトコト～クダサイ～オネガイ～
          </StyledCardSection>
        </Card>
        <Card title={<Card.Title>アフターイベント</Card.Title>}>
          <StyledCardSection
            delay={delayCount++ / 10}
            title="オンリーイベントでオンリー総理を探せ！"
          >
            毎年多種多様な総理たちが集うソクバイ海。多くの総理がいるオンリー会場の中で、一人しかいない個性の総理を探しましょう！
            <br />
            予め会場内の総理たちに総理の特徴を一つ書いてもらい、その中から書いて貰った特徴を持つ総理がいらっしゃるか聞いていきます。
            <br />
            特徴を持つ総理がオンリー会場に一人だけだった場合、一人だけの総理を当てた側と当てられた側の二名には景品をプレゼント！
          </StyledCardSection>
          <StyledCardSection
            delay={delayCount++ / 10}
            title="再復刻&nbsp;政マニアック！クイズ大会！"
          >
            二度あることは三度ある！&nbsp;智で智を洗え！&nbsp;政マニに関するクイズ大会！
            <br />
            アフター全員参加の○×クイズ大会です。こちらも最後まで残った一人には豪華景品をプレゼント。
            <br />
            政マニに関する復習をして、目指せ！クイズ王総理！
          </StyledCardSection>
        </Card>
      </Flex>
    </>
  );
};

export default Page;
