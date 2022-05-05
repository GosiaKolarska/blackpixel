import React from "react";
import mobile from "../../images/mobile.png";
import web from "../../images/web.png";
import wordpress from "../../images/wordpress.png";
import {
  InfoContainer,
  InfoWrapper,
  InfoRow,
  ColumnImg,
  Column,
  TextWrapper,
  TopLine,
  TechnologyLineList,
  TechnologyLineItem,
  BottomLine,
} from "./infoElements";

const InfoSection = () => {
  return (
    <>
      <InfoContainer>
        <InfoWrapper>
          <InfoRow>
            <Column>
              <ColumnImg src={mobile} alt="mobile development" />
              <TextWrapper>
                <TopLine>Mobile Development</TopLine>
                <TechnologyLineList>
                  <TechnologyLineItem>cross-platform</TechnologyLineItem>
                  <TechnologyLineItem>security</TechnologyLineItem>
                  <TechnologyLineItem>scalabillity</TechnologyLineItem>
                  <TechnologyLineItem>react native</TechnologyLineItem>
                  <TechnologyLineItem>ionic</TechnologyLineItem>
                </TechnologyLineList>
                <BottomLine>
                  Service that aimed at building iOS & Android applications that
                  effectively complement or substitute web solutions.
                </BottomLine>
              </TextWrapper>
            </Column>
            <Column>
              <ColumnImg src={web} alt="web development" />
              <TextWrapper>
                <TopLine>Web Development</TopLine>
                <TechnologyLineList>
                  <TechnologyLineItem>scalabillity</TechnologyLineItem>
                  <TechnologyLineItem>html</TechnologyLineItem>
                  <TechnologyLineItem>css</TechnologyLineItem>
                  <TechnologyLineItem>javascript</TechnologyLineItem>
                  <TechnologyLineItem>jquery</TechnologyLineItem>
                  <TechnologyLineItem>react</TechnologyLineItem>
                  <TechnologyLineItem>bootstrap</TechnologyLineItem>
                  <TechnologyLineItem>security</TechnologyLineItem>
                </TechnologyLineList>
                <BottomLine>
                  With a program development process and commitment to quality
                  coding, we build stable, highly efficient and scalable
                  applications.
                </BottomLine>
              </TextWrapper>
            </Column>
            <Column>
              <ColumnImg src={wordpress} alt="wordpress development" />
              <TextWrapper>
                <TopLine>CMS Development</TopLine>
                <TechnologyLineList>
                  <TechnologyLineItem>joomla</TechnologyLineItem>
                  <TechnologyLineItem>drupal</TechnologyLineItem>
                  <TechnologyLineItem>wordpress</TechnologyLineItem>
                  <TechnologyLineItem>php</TechnologyLineItem>
                  <TechnologyLineItem>woocommerce</TechnologyLineItem>
                  <TechnologyLineItem>shopify</TechnologyLineItem>
                </TechnologyLineList>
                <BottomLine>
                  We implement tailored solutions that facilitate the creation,
                  storage, organization, modification and publishing of web
                  content.
                </BottomLine>
              </TextWrapper>
            </Column>
          </InfoRow>
        </InfoWrapper>
      </InfoContainer>
    </>
  );
};

export default InfoSection;
