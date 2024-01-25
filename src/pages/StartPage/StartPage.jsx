import React from "react";
import { Link } from "react-router-dom";

export default function StartPage() {
  return (
    <div>
      <h1>여기는 시작 페이지입니다.</h1>
      <Link to="/questions">
        <button>다음</button>
      </Link>
    </div>
  );
}
