import React from "react";
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
  List,
  ListItem
} from "./info-styles";



const InfoSection = ({
  lightBg,
  id,
  imgStart,
  topLine,
  lightText,
  darkText,
  headline,
  buttonLabel,
  description,
  img,
  alt,
  bullets
}) => {
  return (
    <>
      <InfoContainer lightBg={lightBg} id={id}>
        <InfoWrapper>
          <InfoRow imgStart={imgStart}>
            <Column1>
              <TextWrapper>
                <TopLine>{topLine}</TopLine>
                <Heading lightText={lightText}>{headline}</Heading>
                <Subtitle lightText={lightText}>{description}</Subtitle>
                <List>
                  {bullets.map((item,i) => (
                    <ListItem key={i} lightText={lightText}>{item}</ListItem>
                  ))}
                </List>
              </TextWrapper>
            </Column1>
            <Column2>
              <ImgWrap>
                <Img src={img} alt={alt} width={350} height={350}/>
              </ImgWrap>
            </Column2>
          </InfoRow>
        </InfoWrapper>
      </InfoContainer>
    </>
  );
};

export default InfoSection;
