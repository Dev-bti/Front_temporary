import React, { useState } from "react";
import { EntireIndex, CurIndex } from "../styles/ProgressIndexStyle";

export default function ProgressIndex() {
  const [curIndex, setCurIndex] = useState(1);
  return (
    <EntireIndex>
      <CurIndex>{curIndex}</CurIndex> / 10
    </EntireIndex>
  );
}
