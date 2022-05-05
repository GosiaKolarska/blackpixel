import styled from "styled-components";
import { Link } from "react-scroll";

export const Button = styled(Link)`
  background-color: #38becf;
  color: #000;
  white-space: nowrap;
  padding: 12px 15px 12px 30px;
  font-size: ${({ fontBig }) => (fontBig ? "20px" : "16px")};
  outline: none;
  border: none;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.2s ease-in-out;
  font-family: "Rubik-Medium", sans-serif;
  text-transform: uppercase;
  &:hover {
    transition: all 0.2s ease-in-out;
    background-color: ${({ primary }) => (primary ? "#fff" : "#0f8a8b")};
  }
`;
