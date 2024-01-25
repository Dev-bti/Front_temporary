import React from "react";
import { Routes, Route } from "react-router-dom";
import StartPage from "../pages/StartPage/StartPage";
import QuestionPage from "../pages/QuestionPage/QuestionPage";
import ResultPage from "../pages/ResultPage/ResultPage";

export default function AppRouter() {
  return (
    <Routes>
      <Route path="/" exact element={<StartPage />} />
      <Route path="/questions" exact element={<QuestionPage />} />
      <Route path="/result" exact element={<ResultPage />} />
    </Routes>
  );
}
