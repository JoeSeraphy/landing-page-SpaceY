import React from "react";
import { GlobalStyles } from "../../styles/globalStyles";
import { Background, HeaderStyle, Logo } from "./styles";

export const Header = () => {
  const logo = <img src="./Logo.svg" />;

  return (
    <>
      <GlobalStyles />
      <Background>
        <HeaderStyle>
          <Logo>{logo}</Logo>
        </HeaderStyle>
      </Background>
    </>
  );
};
