import styled from "styled-components";

export const InfoContainer = styled.div`
  color: #fff;
  padding: 100px 0 40px;
  background: #26a3b3;
  @media screen and (max-width: 768px) {
    padding: 100px 0 60px;
  }
`;

export const InfoWrapper = styled.div`
  display: flex;
  z-index: 1;
  height: 800px;
  width: 100%;
  max-width: 1440px;
  margin-right: auto;
  margin-left: auto;
  justify-content: center;

  @media screen and (max-width: 768px) {
    height: auto;
  }
`;

export const InfoRow = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  @media screen and (max-width: 768px) {
    flex-wrap: wrap;
  }
`;
export const ColumnImg = styled.img`
  max-width: 160px;
`;

export const Column = styled.div`
  margin-bottom: 15px;
  padding: 0 15px;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  max-width: 440px;
  @media screen and (max-width: 768px) {
    max-width: 100%;
    width: 100%;
  }
`;

export const TextWrapper = styled.div`
  max-width: 440px;
  padding-top: 0;
  padding-bottom: 60px;
`;

export const TopLine = styled.h3`
  font-size: 24px;
  color: #fff;
  text-align: center;
  padding: 1.75em 0 0.75em;
  font-family: "Rubik-Regular", sans-serif;
  @media screen and (max-width: 768px) {
    padding: 1em 0 0.75em;
  }
`;
export const TechnologyLineList = styled.div`
  font-size: 18px;
  color: #fff;
  text-align: center;
`;
export const TechnologyLineItem = styled.div`
  display: inline-block;
  background: rgba(0, 0, 0, 0.3);
  color: #fff;
  padding: 0.25em 0.5em;
  font-size: 14px;
  margin: 5px;
`;

export const BottomLine = styled.p`
  font-size: 18px;
  color: #fff;
  text-align: center;
  padding: 2em 0 0;
  font-family: "Rubik-Light", sans-serif;
`;
