import React from "react";
import { GlobalStyles } from "../../styles/globalStyles";
import { ButtonStyle } from "./style";

export interface ButtonProps {
  text: string;
  color: string;
  bgColor: string;
  padding: string;
  textAlign: string;
  width: string;
}

export const Button = ({
  text,
  color,
  bgColor,
  padding,
  textAlign,
  width,
}: ButtonProps) => {
  return (
    <>
      <GlobalStyles />
      <ButtonStyle
        color={color}
        bgColor={bgColor}
        padding={padding}
        textAlign={textAlign}
        width={width}
      >
        {text}
      </ButtonStyle>
    </>
  );
};
