import React, { useEffect, useState } from "react";
import PageContainer from "../../styles/PageContainer";
import PageStyle from "../../styles/PageStyle";
import ResultTitle from "../../components/ResultTitle";
import ResultText from "../../components/ResultText";
import ResultBtn from "../../components/ResultBtn";
import ResultDeveloper from "../../components/ResultDeveloper";
import { useLocation } from "react-router-dom";

export default function ResultPage() {
  const [result, setResult] = useState(null);
  const query = new URLSearchParams(useLocation().search);

  const frontScore = query.get("frontScore");
  const backScore = query.get("backScore");

  const path = `/result?frontScore=${frontScore}&backScore=${backScore}`;

  useEffect(() => {
    fetch("src/data/dummy-data_result.json")
      .then((res) => {
        if (!res.ok) {
          throw new Error("HTTP error! Status: ${res.status}");
        }
        return res.json();
      })
      .then((data) => {
        if (frontScore >= backScore) {
          if (frontScore - backScore <= 10) setResult(data[1]);
          else setResult(data[0]);
        } else {
          if (backScore - frontScore <= 10) setResult(data[1]);
          else setResult(data[2]);
        }
        // setResult(data[0]);
        // console.log(data[0]);
      })
      .catch((error) => {
        console.error("Error fetching data : ", error);
      });
  }, []);

  if (result === null) {
    return <h2>결과 로딩중입니다..</h2>;
  }

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
        <ResultDeveloper />
      </PageStyle>
    </PageContainer>
  );
}
