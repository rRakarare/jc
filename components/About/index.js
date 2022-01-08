import React from "react";
import { FaAdn } from "react-icons/fa";
import {
  InfoContainer,
  InfoWrapper,
  InfoRow,
  Column1,
  Column2,
  TextWrapper,
  ImgWrap,
  TopLine,
  Heading,
  Subtitle,
  BtnWrap,
  Img,
} from "./about-styles";



const About = () => {
  return (
    <>
      <InfoContainer lightBg={true} id={"about"}>
        <InfoWrapper>
          <InfoRow imgStart={true}>
            <Column1>
              <TextWrapper>
                <TopLine>Über mich</TopLine>
                <Heading lightText={false}>Janina Couturier</Heading>
                <Subtitle lightText={false}>Personal Coach</Subtitle>
                <Subtitle lightText={false}>
    <FaAdn/>
                </Subtitle>
                </TextWrapper>
            </Column1>
            <Column2>
              <ImgWrap>
                <Img src={"/jc_profile.jpg"} alt={"aboutme"} width={200} height={200}/>
              </ImgWrap>
            </Column2>
          </InfoRow>
        </InfoWrapper>
      </InfoContainer>
    </>
  );
};

export default About;
