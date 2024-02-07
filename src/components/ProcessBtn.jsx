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

const ProcessBtn = ({ questionID, onClickFunction }) => {
  const [handleNextBtn, handlePrevBtn, handleResultRedirect] = onClickFunction;
  return (
    <ButtonContainer>
      {2 <= questionID && questionID <= 10 && (
        <Button onClick={handlePrevBtn}>이전 질문</Button>
      )}
      {1 <= questionID && questionID <= 9 ? (
        <Button onClick={handleNextBtn}>다음 질문</Button>
      ) : (
        <Button>
          <Link to="/result" onClick={handleResultRedirect}>
            결과 보기
          </Link>
        </Button>
      )}
    </ButtonContainer>
  );
};

export default ProcessBtn;
