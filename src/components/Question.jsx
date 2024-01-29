import React from "react";
import styled from "styled-components";

const questionImage = {
  num6: "src/assets/question/question_login.png",
  num9: "src/assets/question/question_calculator.png",
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
  margin-top: 5px;
  text-align: center;
  line-height: 25px;
  font-size: 15px;
`;

const BorderLine = styled.div`
  position: absolute;
  width: 100%;
  border: 1px solid white;
  top: 96%;
`;

const Question = ({ questionNum, text }) => {
  return (
    <QuestionContainer>
      {questionNum === 6 ? (
        <QuestionImage src={questionImage.num6} />
      ) : questionNum === 9 ? (
        <QuestionImage src={questionImage.num9} />
      ) : null}
      <QuestionText>{text}</QuestionText>
      <BorderLine />
    </QuestionContainer>
  );
};

export default Question;
