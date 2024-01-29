import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import PageContainer from "../../styles/PageContainer";
import PageStyle from "../../styles/PageStyle";
import ProgressIndex from "../../components/ProgressIndex";
import ProgressBar from "../../components/ProgressBar";
import Question from "../../components/Question";
import AnswerBtn from "../../components/AnswerBtn";
import ProcessBtn from "../../components/ProcessBtn";

export default function QuestionPage() {
  const [entireQuestion, setEntireQuestion] = useState([]);
  const [curQuestion, setCurQuestion] = useState(null);
  const [curQuestionIndex, setCurQuestionIndex] = useState(1);
  const totalQuestions = 10;

  const progress = (curQuestionIndex / totalQuestions) * 100;

  useEffect(() => {
    fetch("src/data/dummy-data_question.json")
      .then((res) => res.json())
      .then((data) => {
        setEntireQuestion(data);
      });
  }, []);

  useEffect(() => {
    const foundQuestion = entireQuestion.find(
      (question) => question.question_ID === curQuestionIndex
    );
    setCurQuestion(foundQuestion);
  }, [curQuestionIndex, entireQuestion]);

  const handleNextBtn = () => {
    if (curQuestionIndex < totalQuestions) {
      setCurQuestionIndex((prev) => prev + 1);
    }
  };

  const handlePrevBtn = () => {
    if (curQuestionIndex > 0) {
      setCurQuestionIndex((prev) => prev - 1);
    }
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
          questionNum={curQuestion?.question_ID}
          text={curQuestion?.question_Sentence}
        />
        <AnswerBtn items={curQuestion?.answers} />
        <ProcessBtn
          questionID={curQuestion?.question_ID}
          onClickFunction={[handleNextBtn, handlePrevBtn]}
        />
      </PageStyle>
    </PageContainer>
  );
}
