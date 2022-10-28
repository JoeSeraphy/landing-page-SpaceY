import { GlobalStyles } from "../../styles/globalStyles";
import { FormInput } from "../input";

import { Background, BgImg, DivFlex, Rocket } from "./style";

export const FormSection = () => {
  const rocket = <img src="./illustra/Rocket_illustra.png" />;

  return (
    <>
      <GlobalStyles />
      <Background>
        <BgImg>
          <DivFlex>
            <FormInput />
            <Rocket>{rocket}</Rocket>
          </DivFlex>
        </BgImg>
      </Background>
    </>
  );
};
