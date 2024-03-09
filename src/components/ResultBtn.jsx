import React, { useEffect } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";

const ButtonContainer = styled.div`
  margin-bottom: 60px;
  width: 100%;
  display: flex;
  justify-content: space-evenly;
`;

const Button = styled.button`
  width: 40%;
  height: 50px;
  background-color: #84e0e0;
  cursor: pointer;
  border-radius: 20px;
  border: none;
  cursor: pointer;
  font-size: 1rem;
  transition: all 0.2s ease;

  &:hover {
    background-color: #2d8c93;
    color: white;
  }
`;

const ResultBtn = ({ path }) => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://developers.kakao.com/sdk/js/kakao.js";
    script.async = true;
    document.body.appendChild(script);
    return () => document.body.removeChild(script);
  }, []);

  const shareToKakao = () => {
    if (window.Kakao) {
      const Kakao = window.Kakao;

      if (!Kakao.isInitialized()) {
        Kakao.init("8cb4794d2729368259e3759d07e2ee12");
      }

      Kakao.Link.sendDefault({
        objectType: "feed",
        content: {
          title: "내 개발자 유형 알아보기!",
          description: "결과 확인하러 가기",
          imageUrl: "./src/assets/dev/dev_joohyun.png",
          link: {
            mobileWebUrl: "https://devbti.netlify.app" + path,
            webUrl: "https://devbti.netlify.app" + path,
          },
        },
      });
    }
  };
  return (
    <>
      <ButtonContainer>
        <Button>
          <Link to="/">테스트 다시하기</Link>
        </Button>
        <Button onClick={shareToKakao}>결과 공유</Button>
      </ButtonContainer>
    </>
  );
};

export default ResultBtn;
