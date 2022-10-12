import styled from "styled-components";
import { TIPOSDEPRATOS } from "./mock";

export default function Food() {
  return (
    <ContainerFood>
      <h1>Escolha a opção desejada</h1>
      {TIPOSDEPRATOS.map((t, i) => (
        <button>
          <h1>{t.nome}</h1> <h1>R${t.preco.toFixed(2).replace(".", ",")}</h1>
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
  font-family: "Righteous";
  font-style: normal;
  font-weight: 400;
  font-size: 28px;
  line-height: 30px;
  color: #ffffff;
  background-color: #a7d373;
  display: flex;
  flex-direction: column;
  justify-content: center;

  button {
    display: flex;
    justify-content: space-between;
    font-family: "Righteous";
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 30px;
    color: #a7d373;
    background-color: #ffffff;
    text-align: start;
    margin: 10px 0;
    align-items:center;
  }
`;
