import React from "react";
import styled from "styled-components";

const TitleBox = styled.div`
  width: 100%;
  height: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 10px;
  margin-bottom: 20px;
`;

const TitleP = styled.p`
  margin-top: 50px;
  margin-bottom: 10px;
  font-size: 1.1rem;
`;

const TitleH = styled.h1`
  margin-bottom: 20px;
  font-size: 1.8rem;
  font-weight: 400;
`;

const TitleImg = styled.img`
  width: 60%;
  height: 260px;
`;

const ResultTitle = ({ adjective, result, resultId }) => {
  let imgPath = "";

  switch (resultId) {
    case 0:
      imgPath = "src/assets/result/fullstack.png";
      break;
    case 1:
      imgPath = "src/assets/result/frontend.png";
      break;
    case 2:
      imgPath = "src/assets/result/backend.png";
      break;
    default:
      imgPath = "";
  }

  return (
    <TitleBox>
      <TitleP>나의 개발자 유형은</TitleP>
      <TitleH>{`${adjective} ${result}`}</TitleH>
      <TitleImg src={imgPath} alt="Developer Type" />
    </TitleBox>
  );
};

export default ResultTitle;
