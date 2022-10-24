import { FlexIcons, IconImg, IconText } from "./styles";

export interface IconProps {
  src: string;
  text: string;
  alt: string;
}

export const Icons = ({ src, text, alt }: IconProps) => {
  return (
    <>
      <FlexIcons>
        <IconImg src={src} alt={alt} />
        <IconText>{text}</IconText>
      </FlexIcons>
    </>
  );
};
