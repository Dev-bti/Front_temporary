import React from "react";
import styled from "styled-components";
import { Border, TitleText } from "../styles/ResultPageStyle";

const P = styled.p``;

const TitleP = styled.p``;

const devImage = styled.img``;

const IconImage = styled.img``;

const IconLink = styled.a``;

const IconContainer = styled.div`
  width: 100%;
  background-color: #252525;
`;

const Contact = () => {
  return (
    <IconContainer>
      <IconImage />
      <IconLink href="#">Joohyun</IconLink>
    </IconContainer>
  );
};

const DeveloperContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-evenly;
`;

const Developer = () => {
  return (
    <DeveloperContainer>
      <Contact />
    </DeveloperContainer>
  );
};
