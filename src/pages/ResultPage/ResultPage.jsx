import React, { useEffect, useState } from "react";
import PageContainer from "../../styles/PageContainer";
import PageStyle from "../../styles/PageStyle";
import ResultTitle from "../../components/ResultTitle";
import ResultText from "../../components/ResultText";
import ResultBtn from "../../components/ResultBtn";

export default function ResultPage() {
  const [result, setResult] = useState(null);

  useEffect(() => {
    fetch("src/data/dummy-data_result.json")
      .then((res) => res.json())
      .then((data) => {
        setResult(data[0]);
      });
  }, []);

  return (
    <PageContainer>
      <PageStyle>
        <ResultTitle
          adjective={result?.dev_Adjective}
          result={result?.dev_Type}
          resultId={result?.dev_Type_Code}
        />
        <ResultText
          type={result?.dev_Type}
          resultId={result?.dev_Type_Code}
          works={result?.dev_Works}
          personalities={result?.dev_Personalities}
          lecture={result?.dev_Lectures}
        />
        <ResultBtn />
      </PageStyle>
    </PageContainer>
  );
}
