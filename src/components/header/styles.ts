import styled from "styled-components";

export const Background = styled.div`
  background: var(--space-dark);
  width: 100%;
`;

export const HeaderStyle = styled.div`
  max-width: 1440px;
  margin: 0 auto;
  width: 100%;
  height: 89px;

  @media only screen and (max-width: 425px) {
    max-width: 375px;
    display: grid;
    justify-content: center;
    align-items: center;
  }
`;

export const Logo = styled.img`
  margin-left: 112px;
  padding-top: 51px;

  @media only screen and (max-width: 425px) {
    margin: 0 auto;
    padding: 0;
    display: grid;
    justify-content: center;
    align-items: center;
  }
`;
