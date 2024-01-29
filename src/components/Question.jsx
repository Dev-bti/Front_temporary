import React from "react";
import styled from "styled-components";

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

const Question = ({ text, img }) => {
  return (
    <QuestionContainer>
      {img && <QuestionImage src={img} />}
      {/* <QuestionImage src={img} /> */}
      <QuestionText>{text}</QuestionText>
      <BorderLine />
    </QuestionContainer>
  );
};

export default Question;
