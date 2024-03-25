import React from "react";
import styled from "styled-components";
import {
  Border,
  Span,
  TitleText,
  Ul,
  Li,
  Lang,
  Lecture,
} from "../styles/ResultPageStyle";
import { IMGTABLE } from "../util/img";

const ResultContainer = styled.div`
  margin-top: 25px;
  width: 80%;
  text-align: center;
`;

const resultImg = {
  fronts: [
    IMGTABLE.lecture.lecture1,
    IMGTABLE.lecture.lecture2,
    IMGTABLE.lecture.lecture3,
  ],
  backs: [
    IMGTABLE.lecture.lecture4,
    IMGTABLE.lecture.lecture5,
    IMGTABLE.lecture.lecture6,
  ],
  fulls: [
    IMGTABLE.lecture.lecture1,
    IMGTABLE.lecture.lecture6,
    IMGTABLE.lecture.lecture7,
  ],
};

const LangsContainer = styled.div`
  margin-top: 20px;
  margin-bottom: 60px;
  width: 100%;
  display: flex;
  justify-content: space-evenly;
`;
const LangContainer = styled.div`
  width: 30%;
  height: 100%;
`;
const LangDetail = ({ img }) => {
  return (
    <LangContainer>
      <Lang src={img} />
    </LangContainer>
  );
};
const Langs = ({ type }) => {
  const firstLang =
    type == 0 || type == 1 ? IMGTABLE.recolang.html : IMGTABLE.recolang.c;
  const secondLang =
    type == 0 || type == 2 ? IMGTABLE.recolang.java : IMGTABLE.recolang.css;
  const thirdLang =
    type == 0 || type == 1
      ? IMGTABLE.recolang.javascript
      : IMGTABLE.recolang.python;
  return (
    <LangsContainer>
      <LangDetail img={firstLang} />
      <LangDetail img={secondLang} />
      <LangDetail img={thirdLang} />
    </LangsContainer>
  );
};

const LecturesContainer = styled.div`
  margin-top: 20px;
  margin-bottom: 40px;
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
`;
const LectureContainer = styled.div`
  width: 100%;
  height: 30%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const LectureBtn = styled.button`
  margin-bottom: 30px;
  width: 60%;
  height: 30px;
  background-color: #aad6d6;
  border-radius: 20px;
  border: none;
  font-size: 13px;
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    background-color: #2d424e;
    color: white;
  }
`;
const Lectures = ({ address, lectureImg }) => {
  const handleLecture = () => {
    window.location.href = address;
  };
  return (
    <LectureContainer>
      <Lecture src={lectureImg} />
      <LectureBtn onClick={handleLecture}>강의 바로가기</LectureBtn>
    </LectureContainer>
  );
};

const ResultText = ({ type, resultId, works, personalities, lectures }) => {
  return (
    <ResultContainer>
      <Border />
      <TitleText>
        <Span>{type}</Span>가 어울리는 당신은?
      </TitleText>
      <Border />
      <Ul>
        {works &&
          works.map((work, index) => {
            return <Li key={index}>💡 {work}</Li>;
          })}
      </Ul>
      <Border />
      <TitleText>
        {type}는 <Span>무슨 일</Span>을 할까?
      </TitleText>
      <Border />
      <Ul>
        {personalities &&
          personalities.map((personality, index) => {
            return <Li key={index}>➕ {personality}</Li>;
          })}
      </Ul>
      <Border />
      <TitleText>
        <Span>어떤 언어</Span>를 공부해야 할까?
      </TitleText>
      <Border />
      <Langs type={resultId} />
      <Border />
      <TitleText>
        미래 {type}를 위한 <Span>추천 강의</Span>
      </TitleText>
      <Border />
      <LecturesContainer>
        {lectures &&
          lectures.map((lecture, index) => {
            return (
              <Lectures
                address={lecture}
                key={index}
                lectureImg={
                  resultId === 0
                    ? resultImg.fulls[index]
                    : resultId === 1
                    ? resultImg.fronts[index]
                    : resultImg.backs[index]
                }
              />
            );
          })}
      </LecturesContainer>
    </ResultContainer>
  );
};

export default ResultText;
