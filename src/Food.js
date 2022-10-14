import styled from "styled-components";
import { TIPOSDEPRATOS } from "./mock";
import { useState } from "react";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpRoundedIcon from '@mui/icons-material/KeyboardArrowUpRounded';
import { useNavigate } from "react-router-dom";

export default function Food() {

const [ arrMap, setArrMap] = useState([])
const navigate = useNavigate();

function goingToChoose(i){
  navigate(`/food/${i}`)
}

function openingItem(index){

  if(arrMap.includes(index)){
    const newArr = arrMap.filter((a) => a!==index)
    setArrMap(newArr)
  }
  else{
    const newArr = [ index]
    setArrMap(newArr)
  }
}

  return (
    <ContainerFood>
      <h1>Escolha a opção desejada</h1>
      <br/>
      {TIPOSDEPRATOS.map((t, i) => (
        <button key={i} >
          <ButtonDivs>
          <h1>{t.nome}</h1> <h1>R$ {t.preco.toFixed(2).replace(".", ",")}</h1>
          
          {arrMap.includes(i) 
          ?
          <KeyboardArrowUpRoundedIcon fontSize="large" onClick={() => openingItem(i)}/>
        :
        <KeyboardArrowDownIcon fontSize="large" onClick={() => openingItem(i)}/>
        }

          
          </ButtonDivs>
          
          {arrMap.includes(i) ? <><ButtonDivs>
            
            <h3>
            <br/>
              {t.info}
              </h3>
              
          </ButtonDivs>
          <ButtonConfirm onClick={()=> goingToChoose(i)}>
          <h4>
            Montar prato
            </h4>
        </ButtonConfirm>
        </> : ""}
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

  h3{
    font-weight:400;
    font-size:18px;
  }

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
      align-items:center;


`

const ButtonConfirm = styled.div`
  border-radius:10px;
  padding:10px;
  background-color:#11b316;
  color:white;
  display:flex;
  align-items:center;
  justify-content:center;
`
