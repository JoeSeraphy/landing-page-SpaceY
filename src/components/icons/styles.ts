import styled from "styled-components";
import { IconProps } from ".";

export const FlexIcons = styled.div`
  display: grid;
  margin: 0 112px;

  @media (max-width: 425px) {
    display: block;
    justify-content: center;
    align-items: center;
    padding: 64px 0px;
  }
`;

export const IconImg = styled.img<IconProps>`
  background-image: ${(props) => `url(${props.src})`};
`;

export const IconText = styled.p`
  color: var(--gray-05);
  width: 222px;
  font-size: 1.6rem;
  font-weight: 400;
  line-height: 24px;
`;
