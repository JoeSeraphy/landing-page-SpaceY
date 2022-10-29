import styled from "styled-components";
import { props } from ".";

export const Form = styled.div`
  margin-top: 150px;
  margin-left: 112px;
  width: 520px;
  height: 792px;
  background-color: #0e0d40;
  border-radius: 20px;

  @media (max-width: 425px) {
    margin: 150px auto;
    max-width: 371px;
    display: grid;
    justify-content: center;
    align-items: center;
  }
`;

export const Icon = styled.div`
  margin: 39px 0px 16px 53px;
`;

export const DivImputs = styled.div`
  margin: 0 52px;
`;

export const Title = styled.h2`
    font-size: 2.4rem;
    font-weight: 500;
    line-height: 32px
    letter: 1px;
    color: #fff;
    width: 264px;
    margin-bottom: 16px;
`;
export const SubTitle = styled.p`
  font-size: 1.6rem;
  font-weight: 500;
  line-height: 20px;
  color: var(--gray-05);
  width: 308px;
  margin-bottom: 32px;
`;

export const Label = styled.label`
  font-size: 1.6rem;
  font-weight: 500;
  line-height: 23.5px;
  color: #fff;
`;

export const Input = styled.input<props>`
  background: none;
  width: 100%;
  border: ${(props) => props.border};
  border-radius: 6px;
  padding: 16px;
  margin-bottom: 24px;
  color: #fff;
  outline: none;

  &:focus {
    border: 1px solid var(--mars-ligth);
  }
`;

export const FlexCheckbox = styled.div`
  display: flex;
  aling-items: center;
`;

export const Checkbox = styled.input`
  width: 24px;
  height: 24px;
  margin-right: 24px;
`;
