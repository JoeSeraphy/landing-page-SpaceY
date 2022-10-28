import { GlobalStyles } from "../../styles/globalStyles";
import { Button } from "../button";
import {
  Checkbox, DivImputs, FlexCheckbox, Form, Icon, Input, Label, SubTitle, Title
} from "./style";

export const FormInput = () => {
  const ticket = <img src="./icon/Icon_ticket.svg" />;

  return (
    <>
      <GlobalStyles />
      <Form>
        <Icon>{ticket}</Icon>
        <DivImputs>
          <Title>Garanta sua vaga para a primeira viagem</Title>
          <SubTitle>
            Preencha os campos abaixo para entrar na lista de espera
          </SubTitle>
          <div>
            <form action="#">
              <div>
                <Label>Seu nome</Label>
                <br />
                <br />
                <Input type="text" />
              </div>
              <div>
                <Label>E-mail</Label>
                <br />
                <br />
                <Input type="text" />
              </div>
              <div>
                <Label>Telefone</Label>
                <br />
                <br />
                <Input type="text" />
              </div>
              <FlexCheckbox>
                <Checkbox type="checkbox" />
                <Label>Concordo em receber comunicações</Label>
              </FlexCheckbox>
              <Button
                text="Garantir minha Vaga"
                color="#fff"
                bgColor="var(--mars)"
                padding="16px"
                textAlign="center"
              />
            </form>
          </div>
        </DivImputs>
      </Form>
    </>
  );
};
