import styled from "styled-components";

const PageContainer = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: pink;

  ${(props) => props.startPage && `overflow: hidden;`}
  ${(props) => props.resultPage && `overflow: scroll;`}
`;

export default PageContainer;
