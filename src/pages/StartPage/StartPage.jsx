import React from "react";
import PageContainer from "../../styles/PageContainer";
import PageStyle from "../../styles/PageStyle";
import {
  Jaeseung,
  Joohyun,
  MainTitle,
  Title,
  TitleSpan,
  Description,
  Button,
  StyledLink,
} from "../../styles/StartPageStyle";

export default function StartPage() {
  const image = {
    jaeseung: "./src/assets/dev/dev_jaeseung.png",
    joohyun: "./src/assets/dev/dev_joohyun.png",
  };

  return (
    <PageContainer>
      <PageStyle startPage>
        <Jaeseung src={image.jaeseung} alt="Jaeseung"></Jaeseung>
        <Joohyun src={image.joohyun} alt="Joohyun"></Joohyun>
        <MainTitle>
          <Title>
            나의 <TitleSpan>Dev</TitleSpan>-BTI
          </Title>
          <Description>
            프론트엔드 / 백엔드 / 풀스택
            <br />
            나는 어떤 개발자 유형일까?
          </Description>
          <StyledLink to="/questions">
            <Button>알아보러 가기</Button>
          </StyledLink>
        </MainTitle>
      </PageStyle>
    </PageContainer>
  );
}
