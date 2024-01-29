import React, { useState } from "react";
import { Link } from "react-router-dom";
import PageContainer from "../../styles/PageContainer";
import PageStyle from "../../styles/PageStyle";
import ProgressIndex from "../../components/ProgressIndex";
import ProgressBar from "../../components/ProgressBar";
import Question from "../../components/Question";
import AnswerBtn from "../../components/AnswerBtn";

export default function QuestionPage() {
  const [curQuestion, setCurQuestion] = useState({
    text: "여기는 질문이 들어갈 영역입니다.여기는 질문이 들어갈 영역입니다.여기는 질문이 들어갈 영역입니다.",
    img: "src/assets/question/question_calculator.png",
    answer: [
      "1. 친구 자취방의 분위기와 어울릴만한 인테리어 소품",
      "2. 자취에 필요한 화장지나 수건 같은 실용적인 물건",
      "3. 히히히히히히히 하하하하하하 헤헤헤헤헤헤호호",
    ],
  });
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
        <Question
          text={curQuestion.text}
          img={curQuestion.img ? curQuestion.img : null}
        />
        <AnswerBtn items={curQuestion.answer} />
        <Link to="/result">
          <button>다음</button>
        </Link>
      </PageStyle>
    </PageContainer>
  );
}
