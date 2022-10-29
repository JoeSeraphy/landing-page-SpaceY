import { GlobalStyles } from "../../styles/globalStyles";
import { FormInput } from "../input";

import { Background, BgImg, DivFlex, Rocket } from "./style";

export const FormSection = () => {
  return (
    <>
      <GlobalStyles />
      <Background>
        <BgImg>
          <DivFlex>
            <FormInput />
            <Rocket src="./illustra/rocket.svg" />
          </DivFlex>
        </BgImg>
      </Background>
    </>
  );
};
