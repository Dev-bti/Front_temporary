import React from "react";
import { Link } from "react-router-dom";
import PageContainer from "../../styles/PageContainer";
import PageStyle from "../../styles/PageStyle";
import ResultTitle from "../../components/ResultTitle";
import ResultText from "../../components/ResultText";
import ResultBtn from "../../components/ResultBtn";

export default function ResultPage() {
  return (
    <PageContainer>
      <PageStyle>
        <ResultTitle
          adjective="감각적인"
          result="프론트엔드 개발자"
          resultId="1"
        />
        <ResultText type="프론트엔드 개발자" />
        <ResultBtn />
      </PageStyle>
    </PageContainer>
  );
}
