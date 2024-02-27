import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const ButtonContainer = styled.div`
  width: 85%;
  height: 20%;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`;

const Button = styled.button`
  width: 40%;
  height: 30%;
  border: none;
  border-radius: 15px;
  background-color: #d9d9d9;
  cursor: pointer;
  transition: background-color 0.2s ease;

  &:hover {
    background-color: #a8a8a8;
  }
`;

const ProcessBtn = ({ questionID, functions }) => {
  const [handleNextBtnClick, handlePrevBtnClick] = functions;
  return (
    <ButtonContainer>
      {2 <= questionID && questionID <= 10 && (
        <Button onClick={handlePrevBtnClick}>이전 질문</Button>
      )}
      <Button onClick={handleNextBtnClick}>
        {1 <= questionID && questionID <= 9 ? "다음 질문" : "결과 보기"}
      </Button>
    </ButtonContainer>
  );
};

export default ProcessBtn;
