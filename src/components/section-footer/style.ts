import styled from "styled-components";

export const Background = styled.div`
  background-color: var(--gray-01);
`;

export const Smoke = styled.img`
  max-width: 1440px;
  margin: 0 auto;
  display: flex;
  justify-content: center;

  @media (max-width: 425px) {
    margin-top: -50px;
    width: 425px;
    display: grid;
    justify-content: center;
    overflow: hidden;
  }
`;

export const DivFlex = styled.div`
  max-width: 1440px;
  margin: 0 auto;
  padding-top: 50px;
  padding-bottom: 50px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 425px) {
    max-width: 375px;
    display: grid;
    justify-content: center;
    align-items: center;
  }
`;

export const Logo = styled.img`
  margin-left: 112px;

  @media (max-width: 425px) {
    margin: 0 auto;
    display: grid;
    justify-content: center;
    align-items: center;
    text-align: center;
  }
`;

export const Icons = styled.div`
  display: flex;
  gap: 0 18px;

  @media (max-width: 425px) {
    max-width: 425px;
    margin-top: 50px;
    width: 100%;
    diplay: block;
    justify-content: center;
  }
`;

export const DivNav = styled.div`
  margin-right: 100px;

  @media (max-width: 425px) {
    max-width: 425px;
    width: 100%;
    margin-top: 50px;
    display: flex;
    justify-content: center;
  }
`;

export const Ul = styled.ul`
  color: #fff;
  font-size: 16px;
  font-weight: 500;
  display: flex;
  gap: 0 34px;

  @media (max-width: 425px) {
    max-width: 425px;
    margin: 0 auto;
    display: grid;
    justify-content: center;
    align-items: center;
    text-align: center;
    gap: 34px 0px;
  }
`;
