import styled from "styled-components";
import { Link } from "react-router-dom";

export const Jaeseung = styled.img`
  position: absolute;
  top: 0;
  left: 0;
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
  right: 0;
  bottom: 0;
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
  z-index: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Title = styled.p`
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
  margin-bottom: 20px;
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
  width: 170px;
  height: 40px;
`;
