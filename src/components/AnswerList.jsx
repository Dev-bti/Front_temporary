import React from "react";
import styled from "styled-components";

const AnswerContainer = styled.div`
  width: 85%;
  height: 20%;
  margin-top: 10px;
  display: flex;
  flex-direction: column;
`;

const AnswerListItem = styled.button`
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

  &.selected {
    background-color: #4c8181;
    color: #fff;
  }
`;

const AnswerList = ({ items, handleAnswerSelect, currentAnswerType }) => {
  return (
    <AnswerContainer>
      {items &&
        items.map((item) => (
          <AnswerListItem
            className={
              currentAnswerType === identifyAnswerType(item) ? "selected" : ""
            }
            key={item.answer_ID}
            onClick={() => handleAnswerSelect(identifyAnswerType(item))}
          >
            {item.answer_Sentence}
          </AnswerListItem>
        ))}
    </AnswerContainer>
  );
};

const identifyAnswerType = (item) => {
  const { answer_Front } = item;

  switch (answer_Front) {
    case 10:
      return "front";
    case 5:
      return "full";
    case 0:
      return "back";
  }
};

export default AnswerList;
