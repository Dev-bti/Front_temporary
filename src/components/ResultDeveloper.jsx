import React from "react";
import styled from "styled-components";
import { Border, TitleText } from "../styles/ResultPageStyle";

const DeveloperContainer = styled.div`
  margin-top: 25px;
  width: 80%;
  display: flex;
  background-color: pink;
`;

const ResultDeveloper = () => {
  return (
    <DeveloperContainer>
      <Border />
    </DeveloperContainer>
  );
};
