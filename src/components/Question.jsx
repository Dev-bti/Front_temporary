import React from "react";
import styled from "styled-components";
import { IMGTABLE } from "../util/img.js";

const QUESTION_IMAGE = {
  signup_Image: IMGTABLE.question.login,
  calculator_Image: IMGTABLE.question.calculator,
};

const QuestionContainer = styled.div`
  position: relative;
  width: 85%;
  height: 38%;
  margin-top: 15px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const QuestionImage = styled.img`
  width: 60%;
  height: 66%;
  margin-top: 10px;
`;

const QuestionText = styled.div`
  position: absolute;
  top: 71%;
  width: 90%;
  height: 23%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 5px;
  text-align: center;
  line-height: 25px;
  font-size: 14px;
`;

const BorderLine = styled.div`
  position: absolute;
  width: 100%;
  border: 1px solid white;
  top: 96%;
`;

const Question = ({ question }) => {
  const { question_Image, question_Sentence } = question;
  const imgSrc = QUESTION_IMAGE[question_Image];

  return (
    <QuestionContainer>
      {question_Image && <QuestionImage src={imgSrc} />}
      <QuestionText>{question_Sentence}</QuestionText>
      <BorderLine />
    </QuestionContainer>
  );
};

export default Question;
