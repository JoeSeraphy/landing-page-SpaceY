import styled from "styled-components";

export const Carousel = styled.div`
  cursor: grab;
  overflow: hidden;
  margin-left: 130px;
  padding: 0 16px;

  @media (max-width: 425px) {
    width: 100%;
    margin: 0 auto;
    display: flex;
    align-items: center;
    margin-top: 100px;
  }
`;

export const FlexImg = styled.div`
  display: flex;
  gap: 0 32px;
`;

export const Img = styled.img`
  pointer-events: none;
`;
