"use client";

import { useEffect, useState } from "react";
import styled from "@emotion/styled";
import {
  Text,
  Button,
  Flex,
  Table,
  Tbody,
  Td,
  Tr,
  keyframes,
} from "@chakra-ui/react";
import { AnchorLink } from "@/components/AnchorLink";
import { Card } from "@/components/Card";

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
                !transitionEnded ? "menuHeaderTransition circle" : undefined
              }
            >
              サークル参加をする総理の皆さんへ
            </Card.Title>
          }
        >
          <StyledCardSection delay={delayCount++ / 10} title="はじめに">
            当イベントにて二次創作作品の頒布や展示を希望される総理には、サークル参加の事前申込をお願いしております。
            <br />
            下記の諸注意をお読みいただいた上で、所定の方法にてお申し込みください。
            <br />
            なお、ご不明な点がございましたら、お気軽に主催メールアドレス宛にお問い合わせください。
          </StyledCardSection>
          <StyledCardSection delay={delayCount++ / 10} title="イベント名">
            政剣マニフェスティアオンリー同人誌即売会
            <br />
            緊急交流イベント「漕ぎ出せ！ソクバイ海Ⅶ」
            <br />
            #アイムソウリー2024
          </StyledCardSection>
          <StyledCardSection delay={delayCount++ / 10} title="日程・会場">
            2024年9月15日（日曜日）
            <br />
            ハイライフプラザいたばし
          </StyledCardSection>
          <StyledCardSection
            delay={delayCount++ / 10}
            title="イベントスケジュール"
          >
            <Table>
              <Tbody>
                <Tr>
                  <Td>10:30</Td>
                  <Td>
                    【サークル】参加総理入場開始
                    <br />
                    【更衣室】開場
                  </Td>
                </Tr>
                <Tr>
                  <Td>12:30</Td>
                  <Td>
                    【一般】参加総理入場開始
                    <br />
                    【即売会】開始
                  </Td>
                </Tr>
                <Tr>
                  <Td>14:30</Td>
                  <Td>【即売会】終了</Td>
                </Tr>
                <Tr>
                  <Td>15:30</Td>
                  <Td>【アフターイベント】開始</Td>
                </Tr>
                <Tr>
                  <Td>18:00</Td>
                  <Td>【更衣室】閉鎖</Td>
                </Tr>
                <Tr>
                  <Td>20:00</Td>
                  <Td>【会場】完全撤収</Td>
                </Tr>
              </Tbody>
            </Table>
            <br />
            <br />
            ※その他詳細スケジュールは後日お知らせします
            <br />
            ※スケジュールは変更になることがあります
          </StyledCardSection>
          <StyledCardSection delay={delayCount++ / 10} title="サークル参加資格">
            ☆「政剣マニフェスティア」の二次創作作品を1点以上頒布または展示できること
            <br />
            ☆ 開催当日までメールで《確実に》連絡可能であること
            <br />
            ☆&quot;戦挙権&quot;を持っている（「政剣マニフェスティア」のプレイヤーである）こと
          </StyledCardSection>
          <StyledCardSection delay={delayCount++ / 10} title="サークル参加費用">
            1スペース&nbsp;4000円
            <br />
            [含まれるもの]
            <br />
            ・長机半分（幅750mm*奥行450mm）
            <br />
            ・イス1脚
            <br />
            ・入場証
            <Text as="span" fontWeight="400">
              1枚
            </Text>
            <br />
            ・パンフレット1部
            <br />
            ※追加入場証（イス付き）500円/1名+1脚
            <br />
            <br />
            ※複数スペース申込・合体申込可能
            <br />
            例）2スペース申込 8000円
            <br />
            [含まれるもの]
            <br />
            ・長机1つ分（幅1500mm*奥行450mm）
            <br />
            ・イス2脚
            <br />
            ・入場証
            <Text as="span" fontWeight="400">
              2枚
            </Text>
            <br />
            ・パンフレット2部
            <br />
            ※追加入場証（イス付き）500円/1名+1脚
            <br />
            <br />
            前回に引き続き、サークル参加についてはLivePocketでの事前決済と電子チケットを導入します。
            <br />
            電子チケット導入に伴い『参加費の決済』→『サークル情報の登録』という順番でお申し込みいただきます。
          </StyledCardSection>
          <StyledCardSection
            delay={delayCount++ / 10}
            title="QRコードチケットについて"
          >
            QRコードチケットは【1人1枚】必要です。
            <br />
            当日入場時に本チケットのQRコードをイベント本部にてご提示ください。
            <br />
            QRコードが表示された画面、もしくは画面を印刷したもので受付可能です。
            <br />
            <br />
            サークルが2名以上の場合、追加入場チケットを追加人数分ご購入ください。
            <br />
            <br />
            例1）1スペースで2名サークルの場合、サークル参加チケットを1枚＋サークル追加入場チケットを1枚
            <br />
            例2）2スペースで4名サークルの場合、サークル参加チケットを2枚＋サークル追加入場チケットを2枚
            <br />
            <br />
            サークル追加入場チケットについても、サークル主の方がご購入ください。
            <br />
            サークル参加チケットとサークル追加入場チケットの整理番号は、サークル参加フォームで記載する必要があります。
            <br />
            <br />
            サークル追加入場チケットは、以下のいずれかの手順でメンバーにお渡しください。
            <br />
            ・LivePocketの『友達に渡す』機能を利用して、サークル主からメンバーにサークル追加入場チケットをお渡しいただく
            <br />
            ・サークル主がQRコードが表示された画面を印刷し、サークル主からメンバーにサークル追加入場チケットのQRコードをお渡しいただく
            <br />
            『友達に渡す』機能の詳細手順はLivePocketのヘルプページをご参照ください。
            <br />
            <AnchorLink href="https://t.livepocket.jp/help/about_handover">
              https://t.livepocket.jp/help/about_handover
            </AnchorLink>
            <br />
            ※2スペース申込時の2スペース目のサークル参加チケットは、サークル追加入場チケットと同様、サークル主からメンバーにお渡しいただくことで、イベント当日の入場時にご利用いただけます。
          </StyledCardSection>
          <StyledCardSection delay={delayCount++ / 10} title="決済締切">
            2024年8月4日（日曜日）&nbsp;23:59:59まで
            <br />
            ※決済後のキャンセルはお受けできません。
          </StyledCardSection>
          <StyledCardSection delay={delayCount++ / 10} title="参加申込方法">
            1.【8/4まで】LivePocketページから「サークル参加チケット」をご購入ください。
            <br />
            2.【8/5まで】LivePocketページに記載された「サークル参加フォーム」からサークル情報をご登録ください。
          </StyledCardSection>
          <StyledCardSection
            delay={delayCount++ / 10}
            title="サークルカットについて"
          >
            psd形式のテンプレートを用意しております。ご活用ください。
            <br />
            作成上の注意事項は、サークルカットのテンプレート内にある「カット作成の注意点」に記載しております。必ずお読みください。
            <br />
            ※アナログ原稿およびオフラインでのサークルカット受付は行いません。
            <br />
            <br />
            <AnchorLink href="/assets/bin/cut_win.zip" target="_self">
              サークルカットテンプレート(ZIP形式)
            </AnchorLink>
          </StyledCardSection>
          <StyledCardSection
            delay={delayCount++ / 10}
            title="宅配便による搬入・搬出"
          >
            ヤマト運輸の宅急便をご利用いただけます。
            <br />
            伝票の記載例など、注意点は後日改めてご案内します。
          </StyledCardSection>
          <StyledCardSection delay={delayCount++ / 10} title="その他">
            ・イベント当日、戦挙管理委員（スタッフ）が頒布物の確認を行うことがあります。ご協力をお願いいたします。
            <br />
            ・頒布印刷物について、奥付または奥付に準ずる欄に著者名やサークル名の表記がない場合、頒布をお断りすることがあります。
            <br />
            ・申込フォームの「成人向け作品」欄にて「無」を選択されたサークル様は、形態を問わず成人向け作品の頒布および展示が禁止となります。変更がある場合は、事前に戦挙管理委員会までご連絡ください。
            <br />
            ・会場内電源の使用には、戦挙管理委員会に許可を得てください。無許可で使用を行なっていた場合、使用中止をお願いする場合がございます。
            <br />
            ・駐車場のご用意はできません。搬入・搬出時に車両を使用する場合は、事前に戦挙管理委員会までご相談ください。
            <br />
            ・飲食は可能ですが、会場を汚されないようにお願いいたします。
            <br />
            ・ゴミは所定の場所にお捨てください。また、ゴミの分別にご協力ください。
            <br />
            ・会場内非常口の前には荷物を置かないようにお願いいたします。
            <br />
            ・その他お困りの事や不明点がございましたら、最寄りの戦挙管理委員までお声がけください。
            <br />
            ・会場内におけるマスクの着用は任意とします。
          </StyledCardSection>
        </Card>
        <Card title="プライバシーポリシー">
          <Card.Section title="">
            戦挙管理委員会（以下「当会」といいます）は、個人情報の保護に関する法令等を遵守するとともに、本プライバシーポリシーを遵守します。
          </Card.Section>
          <Card.Section title="1. 個人情報の定義">
            個人情報とは、氏名、住所、生年月日、年齢、性別、電話番号、電子メールアドレス、IPアドレス、銀行口座番号のうち、1つあるいは2つ以上を組み合せることによって、特定の個人を識別できるものを指します。
          </Card.Section>
          <Card.Section title="2. 個人情報の取得">
            当会は、個人情報を、適正な手段により取得いたします。
          </Card.Section>
          <Card.Section title="3. 個人情報の利用目的">
            当会は、主催する即売会・イベント等において、個人情報を、以下の目的で利用し、ご本人の同意を頂いた範囲内においてのみ取り扱います。
            <br />
            (1) 即売会・イベント等の運営に必要な情報を処理するため
            <br />
            (2) 即売会・イベント等に関する重要事項を参加者に連絡するため
            <br />
            (3) 即売会・イベント等の運営上のトラブルを解決するため
          </Card.Section>
          <Card.Section title="4. 個人情報の第三者への提供">
            当会は、個人情報保護法その他の法令により認められる事由がある場合を除き、ご本人の同意なくして、第三者に提供・開示しません。
          </Card.Section>
          <Card.Section title="5. 個人情報の安全管理">
            当会は、個人情報を適切に管理し、個人情報の漏えい、滅失、毀損等に対する予防措置を講じます。
          </Card.Section>
          <Card.Section title="6. 個人情報の開示、訂正、苦情等">
            当会は、個人情報について、開示、訂正、苦情等について、ご本人からのお申出があった場合には、お申出頂いた方がご本人であることを確認の上、個人情報保護法の定めに従い、速やかに対応いたします。
          </Card.Section>
          <Card.Section title="7. プライバシーポリシーの変更">
            当会は、必要に応じて、本プライバシーポリシーの内容を改定することがあります。その場合、変更箇所を速やかに公表するものとします。
          </Card.Section>
          <Card.Section title="8. お問い合わせ窓口">
            戦挙管理委員会&nbsp;seimani.only[at]gmail.com
          </Card.Section>
        </Card>
        <Card title="サークル参加チケット販売">
          <Card.Section title="">
            <AnchorLink
              href="https://t.livepocket.jp/e/tabnvl"
              target="_blank"
              rel="noreferrer"
            >
              <Button as="span" colorScheme="blue">
                LivePocket&nbsp;イベントページ(サークル参加者向け)
              </Button>
            </AnchorLink>
          </Card.Section>
        </Card>
      </Flex>
    </>
  );
};

export default Page;
