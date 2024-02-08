import React from "react";
import styled from "styled-components";

const ResultTextContainer = styled.div`
  width: 80%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 35px;
`;

const ResultTextTitle = styled.p`
  margin: 15px;
  font-size: 1.1rem;
`;

const ResultTitleSpan = styled.span`
  font-weight: bold;
  color: #43aab1;
`;

const ResultBorder = styled.div`
  width: 100%;
  border: 1px solid lightgray;
`;

const ResultLists = styled.ul`
  margin-top: 20px;
  width: 100%;
  list-style-type: none;
`;

const ResultList = styled.li`
  width: 100%;
  margin-bottom: 25px;
`;

const ResultText = () => {
  return (
    <ResultTextContainer>
      <ResultBorder />
      <ResultTextTitle>
        <ResultTitleSpan>프론트엔드 개발자</ResultTitleSpan>가 어울리는 당신은?
      </ResultTextTitle>
      <ResultBorder />
      <ResultLists>
        <ResultList>
          안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕
        </ResultList>
        <ResultList>안녕</ResultList>
        <ResultList>안녕</ResultList>
      </ResultLists>
    </ResultTextContainer>
  );
};

export default ResultText;
