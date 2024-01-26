import styled from "styled-components";

const PageStyle = styled.div`
  position: relative;
  width: 32%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #f0f0f0;
  overflow: hidden;

  @media (max-width: 400px) and (max-height: 700px) {
    width: 100%;
    height: 100%;
  }
`;

export default PageStyle;
