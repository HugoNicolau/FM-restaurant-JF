import almoco from "./img/almoco.jpg";
import bolo from "./img/bolo.webp";
import brigadeiro from "./img/brigadeiro.jpg";
import refri from "./img/refri.jpg";
import salgadinho from "./img/salgadinho.webp";

import styled from "styled-components";
import { TIPOSDEPEDIDOS } from "./mock";

export default function MainScreen() {
  // const textIntro = ["Olá, bem vindo(a) ao nosso restaurante, clique acima e escolha a opção desejada e, assim que fizer o pedido, o site te redirecionará com o pedido escolhido para o nosso whatsapp 😄"]
  return (
    <IntroText>
      <h1>ESCOLHA SUA OPÇÃO</h1>
      <SelectOption>
        <img src={almoco} alt="almoco" />
        <h2>ALMOÇO</h2>
      </SelectOption>
      <SelectOption>
        <img src={refri} alt="refri" />
        <h2>BEBIDAS</h2>
      </SelectOption>
      <SelectOption>
        <img src={brigadeiro} alt="brigadeiro" />
        <h2>DOCES</h2>
      </SelectOption>
     
      <SelectOption>
        <img src={salgadinho} alt="bolo" />
        <h2>FESTAS</h2>
      </SelectOption>
      
    </IntroText>
  );
}

const IntroText = styled.div`
  margin-top: 60px;
  padding-top: 30px;
  padding-left: 20px;
  padding-right: 20px;
  width: 100vw;
  /* height: 100vw; */
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  font-family: "Roboto";
  background-color: #ecf8de;
  text-align: justify;
  align-items:center;

  h1 {
    font-style: normal;
    font-weight: 700;
    font-size: 28px;
    line-height: 30px;
    color: #000000;
    margin-bottom: 15px;
  }
`;

const SelectOption = styled.div`
  position: relative;
  background: rgb(0, 0, 0);
  background: linear-gradient(
    0deg,
    rgba(0, 0, 0, 1) 0%,
    rgba(255, 255, 255, 1) 40%
  );
  border-radius: 40px;
  width: 265px;
    margin-bottom:30px;
  img {
    height: 150px;
    width: 265px;

    border-radius: 40px;
    opacity: 0.8;
  }
  h2 {
    position: absolute;
    bottom: 10px;
    width: 265px;
    text-align: center;
    font-size: 24px;
    font-weight: 700;
    line-height: 28px;
    letter-spacing: 0em;
    color: #ffffff;
  }
`;
