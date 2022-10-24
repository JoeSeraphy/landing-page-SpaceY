import React from "react";
import { GlobalStyles } from "../../styles/globalStyles";
import { ButtonStyle } from "./style";

interface ButtonProps {
  text: string;
}

export const Button = ({ text }: ButtonProps) => {
  return (
    <div>
      <GlobalStyles />
      <ButtonStyle>{text}</ButtonStyle>
    </div>
  );
};
