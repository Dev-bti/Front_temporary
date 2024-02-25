import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import {
  Border,
  TitleText,
  Span,
  P,
  SmallP,
  BigP,
} from "../styles/ResultPageStyle";

const ResultDeveloper = () => {
  return (
    <DeveloperContainer>
      <Border />
      <TitleText>
        <Span>Dev.BTI</Span> 만든 사람
      </TitleText>
      <Border />
      <PeopleContainers>
        <Developer developer={Jaeseung} />
        <Developer developer={Joohyun} />
      </PeopleContainers>
    </DeveloperContainer>
  );
};

export default ResultDeveloper;

// Devloper information
const Jaeseung = {
  img: "./src/assets/dev/dev_jaeseung.png",
  name: "김재승",
  field: "백엔드",
  major: "컴퓨터공학과 19",
  github: "rlawotmd",
  github_link: "https://github.com/rlawotmd",
  insta: "@jaessssskkk",
  insta_link: "https://www.instagram.com/jaessssskkk/",
};
const Joohyun = {
  img: "./src/assets/dev/dev_joohyun.png",
  name: "최주현",
  field: "프론트엔드",
  major: "컴퓨터공학과 20",
  github: "reinexxism",
  github_link: "https://github.com/reinexxism",
  insta: "@hynnnzu",
  insta_link: "https://www.instagram.com/hynnnzu/",
};

const DeveloperContainer = styled.div`
  width: 80%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 15px;
`;

const PeopleContainers = styled.div`
  width: 100%;
  margin-top: 20px;
  display: flex;
`;

const PeopleContainer = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Img = styled.img`
  width: 80%;
  height: 180px;
  margin-bottom: 10px;
`;
const IconImg = styled.img`
  width: 30px;
  height: 30px;
  margin-right: 10px;
`;
const IconContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  margin-bottom: 6px;
`;

const Developer = ({ developer }) => {
  return (
    <PeopleContainer>
      <Img src={developer.img} />
      <P>
        <Span>{developer.field}</Span> 개발
      </P>
      <BigP>
        {developer.major} {developer.name}
      </BigP>
      <IconContainer>
        <IconImg src="./src/assets/dev/dev_github.png" />
        <Link to={developer.github_link}>
          <SmallP>{developer.github}</SmallP>
        </Link>
      </IconContainer>
      <IconContainer>
        <IconImg src="./src/assets/dev/dev_instagram.png" />
        <Link to={developer.insta_link}>
          <SmallP>{developer.insta}</SmallP>
        </Link>
      </IconContainer>
    </PeopleContainer>
  );
};
