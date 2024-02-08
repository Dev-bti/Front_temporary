import React from "react";
import { Link } from "react-router-dom";
import PageContainer from "../../styles/PageContainer";
import PageStyle from "../../styles/PageStyle";
import ResultTitle from "../../components/ResultTitle";
import ResultText from "../../components/ResultText";

export default function ResultPage() {
  return (
    <PageContainer>
      <PageStyle>
        <ResultTitle />
        <ResultText />
        <ResultText />
        <Link to="/">
          <button>처음으로</button>
        </Link>
      </PageStyle>
    </PageContainer>
  );
}
