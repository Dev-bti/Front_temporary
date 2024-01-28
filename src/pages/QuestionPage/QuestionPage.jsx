import React, { useState } from "react";
import { Link } from "react-router-dom";
import PageContainer from "../../styles/PageContainer";
import PageStyle from "../../styles/PageStyle";
import ProgressIndex from "../../components/ProgressIndex";
import ProgressBar from "../../components/ProgressBar";

export default function QuestionPage() {
  const [curQuestionIndex, setCurQuestionIndex] = useState(1);
  const totalQuestions = 10;

  const progress = (curQuestionIndex / totalQuestions) * 100;

  // 다음 질문으로 가는 버튼(n.1-9)
  const handleNextBtn = () => {
    if (curQuestionIndex < totalQuestions) {
      setCurQuestionIndex((prev) => prev + 1);
    }
  };
  // 이전 질문으로 가는 버튼(n.2-10)
  const handlePrevBtn = () => {
    if (curQuestionIndex > 0) {
      setCurQuestionIndex((prev) => prev - 1);
    }
  };
  // 결과 화면으로 가는 버튼(n.10)
  const handleResultBtn = () => {
    <Link to="/result" />;
  };
  return (
    <PageContainer>
      <PageStyle>
        <ProgressBar progress={progress} />
        <ProgressIndex
          curIndex={curQuestionIndex}
          totalIndex={totalQuestions}
        />
        <h1>여기는 질문 페이지입니다.</h1>
        <Link to="/result">
          <button>다음</button>
        </Link>
      </PageStyle>
    </PageContainer>
  );
}
