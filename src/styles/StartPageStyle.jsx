import styled from "styled-components";
import { Link } from "react-router-dom";

export const Jaeseung = styled.img`
  position: absolute;
  left: -2%;
  width: 290px;
  height: 360px;
  filter: blur(3px);

  @media (max-width: 400px) and (max-height: 700px) {
    width: 250px;
    height: 300px;
    filter: blur(3px);
  }
`;

export const Joohyun = styled.img`
  position: absolute;
  top: 60%;
  left: 35%;
  width: 280px;
  height: 320px;
  filter: blur(3px);

  @media (max-width: 400px) and (max-height: 700px) {
    top: 58%;
    left: 37%;
    width: 250px;
    height: 280px;
    filter: blur(3px);
  }
`;

export const MainTitle = styled.div`
  width: 80%;
  height: 25%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 50%;
  margin-bottom: 5px;
`;

export const Title = styled.p`
  margin-top: 60px;
  margin-bottom: 10px;
  font-size: 2.3rem;
`;

export const TitleSpan = styled.span`
  color: #2faaaa;
  font-weight: bold;
`;

export const Description = styled.p`
  font-size: 16px;
  line-height: 30px;
`;

export const Button = styled.button`
  width: 100%;
  height: 100%;
  border: none;
  background-color: #84e0e0;
  cursor: pointer;
  border-radius: 40px;
  font-weight: bold;
  letter-spacing: 1px;
  color: #252525;
  transition: all 0.2s ease;

  &:hover {
    background-color: #229898;
    color: #f0f0f0;
  }
`;

export const StyledLink = styled(Link)`
  z-index: 1;
  width: 55%;
  height: 40px;
`;
