import styled from "styled-components";

const PageStyle = styled.div`
  position: relative;
  width: 450px;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #f0f0f0;
  &::-webkit-scrollbar {
    display: none;
  }

  ${(props) => props.startPage && `overflow: hidden;`}
  ${(props) => props.resultPage && `overflow-y: scroll;`}



  @media (max-width: 400px) {
    width: 100%;
    height: 100%;
  }
`;

export default PageStyle;
