import styled from "styled-components";

const ProgressContainer = styled.div`
  width: 80%;
  height: 4px;
  margin-top: 50px;
  background-color: #e1e1e1;
  border-radius: 10px;
`;

const Progress = styled.div`
  width: ${(props) => props.progress}%;
  height: 100%;
  background-color: #62abbb;
  border-radius: 10px;
  transition: width 0.3s ease;
`;

const QuestionPageProgressBar = ({ progress }) => {
  return (
    <ProgressContainer>
      <Progress progress={progress} />
    </ProgressContainer>
  );
};

export default QuestionPageProgressBar;
