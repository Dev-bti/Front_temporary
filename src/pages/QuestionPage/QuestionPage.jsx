import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import PageContainer from "../../styles/PageContainer";
import PageStyle from "../../styles/PageStyle";
import ProgressIndex from "../../components/ProgressIndex";
import ProgressBar from "../../components/ProgressBar";
import Question from "../../components/Question";
import AnswerBtn from "../../components/AnswerBtn";
import ProcessBtn from "../../components/ProcessBtn";

export default function QuestionPage() {
  const [entireQuestion, setEntireQuestion] = useState([]);
  const [curQuestionIndex, setCurQuestionIndex] = useState(1);
  const totalQuestions = 10;
  const [score, setScore] = useState({ frontScore: 0, backScore: 0 });
  const progress = (curQuestionIndex / totalQuestions) * 100;
  const curQuestion = entireQuestion[curQuestionIndex - 1];
  const navigate = useNavigate();

  useEffect(() => {
    fetch("http://3.37.128.95:8080/question", { method: "GET" })
      .then((res) => {
        if (!res.ok) {
          throw new Error(`HTTP error! Status: ${res.status}`);
        }
        return res.json();
      })
      .then((data) => {
        setEntireQuestion(data);
      })
      .catch((error) => {
        console.error("Error fetching data : ", error);
      });
  }, []);

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

  const handleAnswer = (frontScore, backScore) => {
    setScore((prev) => ({
      frontScore: prev.frontScore + frontScore,
      backScore: prev.backScore + backScore,
    }));
  };

  const handleResultRedirect = () => {
    navigate(
      `/result?frontScore=${score.frontScore}&backScore=${score.backScore}`
    );
    console.log("성공적으로 데이터가 서버에 보내짐");
  };

  if (entireQuestion.length === 0) {
    return <p>Loading...</p>;
  }

  return (
    <PageContainer>
      <PageStyle>
        <ProgressBar progress={progress} />
        <ProgressIndex
          curIndex={curQuestionIndex}
          totalIndex={totalQuestions}
        />
        <Question question={curQuestion} />
        <AnswerBtn
          items={curQuestion?.answers}
          onClickFunction={handleAnswer}
        />
        <ProcessBtn
          questionID={curQuestion?.question_ID}
          onClickFunction={[handleNextBtn, handlePrevBtn, handleResultRedirect]}
        />
      </PageStyle>
    </PageContainer>
  );
}
