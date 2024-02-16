import React, { useEffect, useState } from "react";
import PageContainer from "../../styles/PageContainer";
import PageStyle from "../../styles/PageStyle";
import ResultTitle from "../../components/ResultTitle";
import ResultText from "../../components/ResultText";
import ResultBtn from "../../components/ResultBtn";
import { useLocation } from "react-router-dom";

export default function ResultPage() {
  const [result, setResult] = useState(null);
  const query = new URLSearchParams(useLocation().search);

  const frontScore = query.get("frontScore");
  const backScore = query.get("backScore");

  const path = `/result?frontScore=${frontScore}&backScore=${backScore}`;

  useEffect(() => {
    fetch("http://3.34.97.84:8080" + path, { method: "GET" })
      .then((res) => {
        if (!res.ok) {
          throw new Error("HTTP error! Status: ${res.status}");
        }
        return res.json();
      })
      .then((data) => {
        setResult(data[0]);
      })
      .catch((error) => {
        console.error("Error fetching data : ", error);
      });
  }, []);

  return (
    <PageContainer>
      <PageStyle resultPage>
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
          lectures={result?.dev_Lectures}
        />
        <ResultBtn path={path} />
      </PageStyle>
    </PageContainer>
  );
}
