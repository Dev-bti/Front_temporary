import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const ButtonContainer = styled.div`
  margin-bottom: 60px;
  width: 100%;
  display: flex;
  justify-content: space-evenly;
`;

const Button = styled.button`
  width: 40%;
  height: 50px;
  background-color: #84e0e0;
  cursor: pointer;
  border-radius: 20px;
  border: none;
  cursor: pointer;
  font-size: 1rem;
  transition: all 0.2s ease;

  &:hover {
    background-color: #2d8c93;
    color: white;
  }
`;

const ResultBtn = () => {
  return (
    <ButtonContainer>
      <Button>
        <Link to="/">테스트 다시하기</Link>
      </Button>
      <Button>결과 공유</Button>
    </ButtonContainer>
  );
};

export default ResultBtn;
