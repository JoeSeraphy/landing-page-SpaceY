import styled from "styled-components";

export const Background = styled.div`
  background-color: var(--gray-01);
`;

export const BgImg = styled.div`
  background-image: url("./illustra/Stars.png");
  margin: 0 auto;
  max-width: 1440px;
  background-repeat: no-repeat;
  background-position: cover center;
`;

export const DivFlex = styled.div`
  max-width: 1440px;
  margin: 0 auto;
  display: flex;
  aling-items: center;
  gap: 0 124px;

  @media (max-width: 425px) {
    width: 425px;
    display: grid;
    justify-content: center;
    align-items: center;
  }
`;

export const Rocket = styled.img`
  margin-top: 150px;

  @media (max-width: 425px) {
    overflow: hidden;
    margin: 0 auto;
    width: 425px;
    display: flex;
    justify-content: center;
  }
`;
