import React from "react";
import { Link } from "react-router-dom";
import PageContainer from "../../styles/PageContainer";
import ButtonStyle from "../../styles/ButtonStyle";
import PageStyle from "../../styles/PageStyle";

export default function StartPage() {
  return (
    <PageContainer>
      <PageStyle>
        <div className="mainTitle"></div>
        <p>나의 Dev-BTI</p>
        <p>
          프론트엔드 / 백엔드 / 풀스택
          <br />
          나는 어떤 개발자 유형일까?
        </p>
        <Link to="/questions">
          <ButtonStyle>다음</ButtonStyle>
        </Link>
      </PageStyle>
    </PageContainer>
  );
}
