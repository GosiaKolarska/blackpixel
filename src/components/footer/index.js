import React from "react";
import robots from "../../images/robots.png";
import {
  FooterContainer,
  FooterWrap,
  FooterColumnLeft,
  FooterTitle,
  FooterText,
  FooterEmail,
  FooterColumnRight,
  FooterImage,
} from "./footerElements";

const Footer = () => {
  return (
    <FooterContainer id="contact">
      <FooterWrap>
        <FooterColumnLeft>
          <FooterTitle>Contact us</FooterTitle>
          <FooterText>
            Let's together discuss your project and define how we can help.
          </FooterText>
          <FooterEmail>gosia@blackpixel.art</FooterEmail>
        </FooterColumnLeft>
        <FooterColumnRight>
          <FooterImage src={robots} alt={robots} />
        </FooterColumnRight>
      </FooterWrap>
    </FooterContainer>
  );
};

export default Footer;
