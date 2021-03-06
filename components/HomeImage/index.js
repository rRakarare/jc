import {
  HeroContainer,
  HeroBg,
  VideoBg,
  HeroContent,
  HeroCap,
  HeroText,
  HeroBtnWrapper,
  HeroImage
} from "./homeimage-styles";

const HomeImage = () => {
  return (
    <HeroContainer id="home">
      <HeroBg>
        <VideoBg layout="fill" src={"/cover.jpg"} />
      </HeroBg>
      <HeroContent>
        <HeroImage src="/jc_vec_trans.svg" height={120} width={120}/>
        <HeroCap>Personal Coaching für jeden</HeroCap>
        <HeroText>To be fit is an attitude</HeroText>
        <HeroBtnWrapper></HeroBtnWrapper>
      </HeroContent>
    </HeroContainer>
  );
};

export default HomeImage;
