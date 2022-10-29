import { GlobalStyles } from "../../styles/globalStyles";
import { Background, DivFlex, Smoke, Logo, Icons, DivNav, Ul } from "./style";

import facebook from "../../../public/icon/facebook.svg";
import instagram from "../../../public/icon/instagram.svg";
import linkedin from "../../../public/icon/linkedin.svg";

export const Footer = () => {
  const icons = [instagram, linkedin, facebook];
  return (
    <>
      <GlobalStyles />
      <Background>
        <Smoke src="./illustra/Smoke_footer.svg" />
        <DivFlex>
          <Logo src="./Logo.svg" />
          <Icons>
            {icons.map((icon) => (
              <div key={icon}>
                <img src={icon} />
              </div>
            ))}
          </Icons>
          <DivNav>
            <nav>
              <Ul>
                <li>Inicio</li>
                <li>Sobre nós</li>
                <li>Missões</li>
                <li>Contato</li>
              </Ul>
            </nav>
          </DivNav>
        </DivFlex>
      </Background>
    </>
  );
};
