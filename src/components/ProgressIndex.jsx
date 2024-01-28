import React from "react";
import styled from "styled-components";

const EntireIndex = styled.p`
  margin-top: 30px;
  color: #252525;
  font-size: 1.3rem;
`;

const CurIndex = styled.span`
  font-weight: bold;
  color: #7bb0bc;
`;

const ProgressIndex = ({ curIndex, totalIndex }) => {
  return (
    <EntireIndex>
      <CurIndex>{curIndex}</CurIndex> / {totalIndex}
    </EntireIndex>
  );
};

export default ProgressIndex;
