import styled from "styled-components";

export const Background = styled.div`
  background: var(--space-dark);
`;

export const HomeStyle = styled.div`
  max-width: 1440px;
  width: 100%;
  margin: 0 auto;
  display: flex;
  justify-content: center;

  @media (max-width: 425px) {
    display: grid;
    justify-content: center;
    align-items: center;
  }
`;

export const TextsBanner = styled.div`
  width: 815px;
  height: 359px;
  margin-top: 95px;
  margin-left: 112px;
  margin-right: 40px;

  @media (max-width: 425px) {
    width: 341px;
    margin: 50px auto;
    display: grid;
    justify-content: center;
    align-items: center;
    text-align: center;
  }
`;

export const TextH4 = styled.h4`
  font-size: 1.8rem;
  font-weight: 500;
  line-height: 32px;
  letter-spacing: 5px;
  text-transform: uppercase;
  color: var(--sun);
  margin-bottom: 8px;

  @media (max-width: 425.9px) {
    font-size: 1.4rem;
    line-height: 20.56px;
    text-align: center;
    width: 100%;
  }
`;

export const Title = styled.h1`
  font-size: 6.2rem;
  font-weight: 800;
  line-height: 82px;
  color: #fff;
  margin-bottom: 24px;

  @media (max-width: 425px) {
    font-size: 3.6rem;
    line-height: 52.88px;
    width: 100%;
    text-align: center;
  }
`;

export const TextP = styled.p`
  width: 630px;
  font-size: 2rem;
  font-weight: 400;
  line-height: 24px;
  color: var(--gray-05);

  @media (max-width: 425px) {
    text-align: center;
    line-height: 24px;
    width: 100%;
  }
`;

export const Img = styled.img`
  position: relative;
  top: -50px;

  @media (max-width: 425px) {
    margin: 50px auto;
    width: 425px;
  }
`;

export const FlexIcons = styled.div`
  max-width: 1440px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;

  @media (max-width: 425px) {
    width: 371px;
    display: grid;
    justify-content: center;
    text-align: center;
  }
`;
