import styled from "styled-components";
import { Link as LinkR } from "react-router-dom";

export const Nav = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1rem;
  position: sticky;
  top: 0;
  z-index: 9;
  /* padding-top: 80px; */
  position: absolute;
  top: 50px;
  max-width: 1440px;
  width: 100%;
  margin: 0 auto;
  right: 0;
  left: 0;

  @media screen and (max-width: 960px) {
    transition: 0.8s all ease;
  }
`;

export const NavBarContainer = styled.div`
  display: flex;
  /* justify-content: space-between; */
  height: 80px;
  z-index: 1;
  width: 100%;
  padding: 0 24px;
  max-width: 1440px;
  justify-content: center;
  @media screen and (max-width: 768px) {
    justify-content: center;
  }
`;

export const NavLogo = styled(LinkR)``;
