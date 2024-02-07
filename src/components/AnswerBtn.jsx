import React from "react";
import styled from "styled-components";

const AnswerContainer = styled.div`
  width: 85%;
  height: 20%;
  margin-top: 10px;
  display: flex;
  flex-direction: column;
`;

const AnswerList = styled.button`
  width: 100%;
  height: 38px;
  background-color: #c7e1e1;
  margin-bottom: 10px;
  border-radius: 10px;
  padding-left: 10px;
  padding-right: 10px;
  text-align: center;
  line-height: 38px;
  font-size: 14px;
  color: #252525;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    background-color: #4c8181;
    color: #fff;
  }

  &:focus {
    background-color: #4c8181;
    color: #fff;
  }
`;

const AnswerBtn = ({ items, onClickFunction }) => {
  return (
    <AnswerContainer>
      {items &&
        items.map((item) => (
          <AnswerList
            key={item.answer_ID}
            onClick={() => onClickFunction(item.answer_Front, item.answer_Back)}
          >
            {item.answer_Sentence}
          </AnswerList>
        ))}
    </AnswerContainer>
  );
};

export default AnswerBtn;
