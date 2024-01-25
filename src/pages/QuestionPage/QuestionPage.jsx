import React from "react";
import { Link } from "react-router-dom";

export default function QuestionPage() {
  return (
    <div>
      <h1>여기는 질문 페이지입니다.</h1>
      <Link to="/result">
        <button>다음</button>
      </Link>
    </div>
  );
}
