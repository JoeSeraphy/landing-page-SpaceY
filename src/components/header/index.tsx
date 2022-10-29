import React from "react";
import { GlobalStyles } from "../../styles/globalStyles";
import { Background, HeaderStyle, Logo } from "./styles";

export const Header = () => {
  return (
    <>
      <GlobalStyles />
      <Background>
        <HeaderStyle>
          <Logo src="./Logo.svg" />
        </HeaderStyle>
      </Background>
    </>
  );
};
