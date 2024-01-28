import React, { useState } from "react";
import QuestionPageProgressBar from "../styles/ProgressBarStyle";

export default function ProgressBar() {
  const [curProgress, setCurProgress] = useState(10);

  return <QuestionPageProgressBar progress={curProgress} />;
}
