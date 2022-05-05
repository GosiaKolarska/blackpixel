import React from "react";
import { Nav, NavBarContainer, NavLogo } from "./NavBarElements";
import logo from "../../images/black-pixel__logo.png";

const Navbar = () => {
  return (
    <>
      <Nav>
        <NavBarContainer>
          <NavLogo to="/">
            <img src={logo} alt="Logo" />
          </NavLogo>
        </NavBarContainer>
      </Nav>
    </>
  );
};

export default Navbar;
