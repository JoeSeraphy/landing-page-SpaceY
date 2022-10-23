import React from "react";
import { GlobalStyles } from "../../styles/globalStyles";
import { HeaderStyle } from "./styles";

export const Header = () => {
  const logo = <img src="./Logo.svg" />;

  return (
    <div>
      <GlobalStyles />
      <HeaderStyle>{logo}</HeaderStyle>
    </div>
  );
};
