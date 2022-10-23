import React from "react";
import { GlobalStyles } from "../../styles/globalStyles";
import { Button } from "./button";
import {
  FlexIcons,
  HomeStyle,
  Icon,
  IconText,
  Img,
  TextH4,
  TextP,
  TextsBanner,
  Title,
} from "./styles";

export const Home = () => {
  const illustration = <img src="./illustra/illustra_Banner.svg" />;
  const rocket = <img src="./icon/icon-rocket.svg" />;
  const flag = <img src="./icon/icon-flag.svg" />;
  const telescope = <img src="./icon/icon-telescope.svg" />;

  return (
    <div>
      <GlobalStyles />
      <HomeStyle>
        <TextsBanner>
          <TextH4>Finalmente é possível</TextH4>
          <Title>Sua jornada para Marte começa aqui.</Title>
          <TextP>
            A primeira viagem para Marte estará disponivél apartir do dia
            12/03/2028. Increva-se em nossa lista de espera.
          </TextP>
          <Button />
        </TextsBanner>
        <Img>{illustration}</Img>
      </HomeStyle>
      <FlexIcons>
        <Icon>
          {rocket}
          <IconText>Foguetes com a mais alta tecnolia e conforto.</IconText>
        </Icon>
        <Icon>
          {flag}
          <IconText>Mais 100 missões consecutivas com sucesso.</IconText>
        </Icon>
        <Icon>
          {telescope}
          <IconText>Experiencia única e exclusiva.</IconText>
        </Icon>
      </FlexIcons>
    </div>
  );
};
