import { GlobalStyles } from "../../styles/globalStyles";
import { Button } from "../button";
import { Gallery } from "../gallery";
import {
  Background,
  BgImg,
  Mars,
  MarsFlex,
  Text,
  TextH2,
  TextH4,
  TextP,
  DivFlex,
  Text2,
  Logo,
} from "./styles";

export const Section = () => {
  return (
    <>
      <GlobalStyles />
      <Background>
        <BgImg>
          <MarsFlex>
            <Mars src="./illustra/Mars.svg" />
            <Text>
              <TextH4>Por que marte?</TextH4>
              <TextH2>Sobre o Planeta vermelho</TextH2>
              <TextP>
                A uma distância média de 140 milhões de milhas, Marte é um dos
                vizinhos habitáveis mais próximos da Terra. Marte está mais ou
                menos a metade da distância da Terra do Sol, então ainda tem luz
                solar decente. Está um pouco frio, mas podemos esquentar. Sua
                atmosfera é composta principalmente de CO2 com um pouco de
                nitrogênio e argônio e alguns outros oligoelementos, o que
                significa que podemos cultivar plantas em Marte apenas
                comprimindo a atmosfera. <br /> <br />A gravidade em Marte é
                cerca de 38% da da Terra, então você seria capaz de levantar
                coisas pesadas e dar voltas. Além disso, o dia está notavelmente
                próximo ao da Terra.
              </TextP>
            </Text>
          </MarsFlex>
          <DivFlex>
            <Text2>
              <Logo src="./Logo.svg" />
              <TextH2>
                O caminho para tornar a humanidade multiplanetária.
              </TextH2>
              <Button
                text="increva-se agora"
                color={"var(--mars-ligth)"}
                bgColor="none"
              />
            </Text2>
            <Gallery />
          </DivFlex>
        </BgImg>
      </Background>
    </>
  );
};
