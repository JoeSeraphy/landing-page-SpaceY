import { GlobalStyles } from "../../styles/globalStyles";
import { Button } from "../button";
import { Icons } from "../icons";
import {
  Background,
  HomeStyle,
  FlexIcons,
  Img,
  TextH4,
  TextP,
  TextsBanner,
  Title,
} from "./styles";

export const Home = () => {
  const illustration = <img src="./illustra/illustra_Banner.svg" />;

  return (
    <div>
      <GlobalStyles />
      <Background>
        <HomeStyle>
          <TextsBanner>
            <TextH4>Finalmente é possível</TextH4>
            <Title>Sua jornada para Marte começa aqui.</Title>
            <TextP>
              A primeira viagem para Marte estará disponivél apartir do dia
              12/03/2028. Increva-se em nossa lista de espera.
            </TextP>
            <Button
              text="Inscreva-se Agora"
              color="#fff"
              bgColor="var(--mars)"
              padding="16px"
              textAlign="center"
              width="264px"
            />
          </TextsBanner>
          <Img>{illustration}</Img>
        </HomeStyle>
        <FlexIcons>
          <Icons
            src="/icon/Icon-rocket.png"
            text="Foguetes com a mais alta tecnologia e conforto."
            alt="rocket"
          />
          <Icons
            src="/icon/Icon-flag.png"
            text="Mais de 100 missões consecutivas com sucesso."
            alt="flag"
          />
          <Icons
            src="/icon/Icon-telescope.png"
            text="Experiencia única e exclusiva."
            alt="telescope"
          />
        </FlexIcons>
      </Background>
    </div>
  );
};
