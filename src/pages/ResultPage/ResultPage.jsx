import React, { useEffect, useState } from "react";
import PageContainer from "../../styles/PageContainer";
import PageStyle from "../../styles/PageStyle";
import ResultTitle from "../../components/ResultTitle";
import ResultText from "../../components/ResultText";
import ResultBtn from "../../components/ResultBtn";

export default function ResultPage() {
  const [result, setResult] = useState(null);

  useEffect(() => {
    fetch("http://3.34.97.84:8080/result", { method: "GET" })
      .then((res) => {
        if (!res.ok) {
          throw new Error(`HTTP error! Status: ${res.status}`);
        }
        return res.json();
      })
      .then((data) => {
        setResult(data);
      })
      .catch((error) => {
        console.error("Error fetching data : ", error);
      });
  }, []);

  // useEffect(() => {
  //   fetch("src/data/dummy-data_result.json")
  //     .then((res) => res.json())
  //     .then((data) => {
  //       setResult(data[0]);
  //     });
  // }, []);

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
          lectures={result?.dev_Lectures}
        />
        <ResultBtn />
      </PageStyle>
    </PageContainer>
  );
}
