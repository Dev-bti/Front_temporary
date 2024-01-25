import React from "react";
import { Link } from "react-router-dom";

export default function ResultPage() {
  return (
    <div>
      <h1>여기는 결과 페이지입니다.</h1>
      <Link to="/">
        <button>처음으로</button>
      </Link>
    </div>
  );
}
