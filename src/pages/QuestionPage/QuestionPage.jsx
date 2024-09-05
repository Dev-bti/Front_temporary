import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import PageContainer from "../../styles/PageContainer";
import PageStyle from "../../styles/PageStyle";
import ProgressIndex from "../../components/ProgressIndex";
import ProgressBar from "../../components/ProgressBar";
import Question from "../../components/Question";
import AnswerList from "../../components/AnswerList";
import ProcessBtn from "../../components/ProcessBtn";

export default function QuestionPage() {
  const [entireQuestion, setEntireQuestion] = useState([]);
  const [curQuestionIndex, setCurQuestionIndex] = useState(1);
  const totalQuestions = 10;
  const progress = (curQuestionIndex / totalQuestions) * 100;
  const curQuestion = entireQuestion[curQuestionIndex - 1];
  const navigate = useNavigate();
  const [answerTypeList, setAnswerTypeList] = useState(Array(10).fill(null));
  const currentAnswerType = answerTypeList[curQuestionIndex - 1];

  useEffect(() => {
    fetch("src/data/dummy-data_question.json", { method: "GET" })
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

  const handleNextBtnClick = () => {
    if (currentAnswerType === null) {
      alert("답변 하나를 선택해주세요!");
      return;
    }
    if (curQuestionIndex === 10) {
      let frontScore = 0;
      let backScore = 0;
      answerTypeList.forEach((answerType) => {
        switch (answerType) {
          case "front":
            frontScore += 10;
            break;
          case "back":
            backScore += 10;
            break;
          case "full":
            frontScore += 5;
            backScore += 5;
            break;
          default:
            alert("something went wrong!");
        }
      });
      navigate(`/result?frontScore=${frontScore}&backScore=${backScore}`);
    } else {
      setCurQuestionIndex((prev) => prev + 1);
    }
  };

  const handlePrevBtnClick = () => {
    if (curQuestionIndex > 0) {
      setCurQuestionIndex((prev) => prev - 1);
    }
  };

  const handleAnswerSelect = (answerType) => {
    const newAnswerTypeList = [...answerTypeList];
    newAnswerTypeList[curQuestionIndex - 1] = answerType;
    setAnswerTypeList(newAnswerTypeList);
  };
  console.log(answerTypeList);
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
        <AnswerList
          items={curQuestion?.answers}
          handleAnswerSelect={handleAnswerSelect}
          currentAnswerType={currentAnswerType}
        />
        <ProcessBtn
          questionID={curQuestion?.question_ID}
          functions={[handleNextBtnClick, handlePrevBtnClick]}
        />
      </PageStyle>
    </PageContainer>
  );
}
