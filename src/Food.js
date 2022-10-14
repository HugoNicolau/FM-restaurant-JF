import styled from "styled-components";
import { TIPOSDEPRATOS } from "./mock";
import { useState } from "react";

export default function Food() {

const [openItem, setOpenItem] = useState(false)


function toOpenItem(){
const newItem = !openItem
setOpenItem(newItem)

}
  return (
    <ContainerFood>
      <h1>Escolha a opção desejada</h1>
      <br/>
      {TIPOSDEPRATOS.map((t, i) => (
        <button key={i} onClick={() => toOpenItem()}>
          <ButtonDivs>
          <h1>{t.nome}</h1> <h1>R$ {t.preco.toFixed(2).replace(".", ",")}</h1>
          </ButtonDivs>
          <br/>
          {openItem ? <ButtonDivs>
            <h1>{t.info}</h1>
          </ButtonDivs> : ""}
        </button>
      ))}
    </ContainerFood>
  );
}

const ContainerFood = styled.div`
  margin-top: 100px;
  padding-top: 30px;
  padding-left: 20px;
  padding-right: 20px;
  font-family: "Roboto";
  font-style: normal;
  font-weight: 700;
  font-size: 28px;
  line-height: 30px;
  color: #000000;
  /* background-color: #a7d373; */
  display: flex;
  flex-direction: column;
  justify-content: center;

  button {
    display: flex;
    flex-direction:column;
    /* justify-content: space-between; */
    font-family: "Roboto";
    font-style: normal;
    font-weight: 700;
    font-size: 18px;
    line-height: 30px;
    color: #000000;
    background-color: #ffffff;
    text-align: start;
    margin: 10px 0;
    align-items:center;
    border-radius:10px;
    border:none;
    padding: 10px;

  }
`;

const ButtonDivs = styled.div`
      width:95%;
      display:flex;
      justify-content: space-between;


`