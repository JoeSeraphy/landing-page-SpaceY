import styled from "styled-components";
import { ButtonProps } from ".";

export const ButtonStyle = styled.button<ButtonProps>`
  background: ${(props) => props.bgColor};
  width: ${(props) => props.width};
  heigth: 52px;
  cursor: pointer;
  border: none;
  color: ${(props) => props.color};
  margin-top: 32px;
  padding: ${(props) => props.padding};

  border-radius: 6px;

  text-align: ${(props) => props.textAlign};
  font-size: 1.8rem;
  font-weight: 700;
  line-height: 26.44px;

  transition: 0.3s linear;
  &:hover {
    filter: saturate(1.5);
  }

  @media (max-width: 425px) {
    width: 100%;
  }
`;
