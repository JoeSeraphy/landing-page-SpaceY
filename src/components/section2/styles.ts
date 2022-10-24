import styled from "styled-components";
import React from "react";

export const Background = styled.div`
  background: linear-gradient(180deg, #040327 0%, #0d0e13 24.49%);
`;

export const BgImg = styled.div`
  background-image: url("./illustra/lines-star.png");
  margin: 0 auto;
  max-width: 1440px;
  background-repeat: no-repeat;
  background-position: cover center;
`;

export const MarsFlex = styled.div`
  max-width: 1440px;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  aling-items: center;
`;

export const Mars = styled.div`
  margin-top: 46px;
  margin-left: 41px;
`;

export const Text = styled.div`
  margin-top: 149px;
  margin-left: 42px;
  width: 603px;
  height: 378px;
`;

export const TextH4 = styled.h4`
  font-size: 1.8rem;
  font-weight: 500;
  line-height: 27px;
  letter-spacing: 5px;
  text-transform: uppercase;
  color: var(--sun);
  margin-bottom: 14px;
`;

export const TextH2 = styled.h2`
  font-size: 3.2rem;
  font-weight: 700;
  line-height: 48px;
  color: #fff;
  margin-bottom: 26px;
`;

export const TextP = styled.p`
  width: 100%;
  font-size: 1.6rem;
  font-weight: 400;
  line-height: 24px;
  letter: 1px;
  color: var(--gray-05);
  margin-bottom: 24px;
`;
