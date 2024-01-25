import React from "react";
import { Link } from "react-router-dom";
import PageContainer from "../../styles/PageContainer";
import PageStyle from "../../styles/PageStyle";

export default function ResultPage() {
  return (
    <PageContainer>
      <PageStyle>
        <h1>여기는 결과 페이지입니다.</h1>
        <Link to="/">
          <button>처음으로</button>
        </Link>
      </PageStyle>
    </PageContainer>
  );
}
