import React from "react";
import { Link } from "react-router-dom";
import PageContainer from "../../styles/PageContainer";
import PageStyle from "../../styles/PageStyle";
import ProgressBar from "../../components/ProgressBar";
import ProgressIndex from "../../components/ProgressIndex";

export default function QuestionPage() {
  return (
    <PageContainer>
      <PageStyle>
        <ProgressBar />
        <ProgressIndex />
        <h1>여기는 질문 페이지입니다.</h1>
        <Link to="/result">
          <button>다음</button>
        </Link>
      </PageStyle>
    </PageContainer>
  );
}
