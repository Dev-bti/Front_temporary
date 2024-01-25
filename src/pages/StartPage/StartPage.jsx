import React from "react";
import { Link } from "react-router-dom";
import PageContainer from "../../styles/PageContainer";
import ButtonStyle from "../../styles/ButtonStyle";
import PageStyle from "../../styles/PageStyle";

export default function StartPage() {
  return (
    <PageContainer>
      <PageStyle>
        <h1>여기는 시작 페이지입니다.</h1>
        <Link to="/questions">
          <ButtonStyle>다음</ButtonStyle>
        </Link>
      </PageStyle>
    </PageContainer>
  );
}
