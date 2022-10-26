import { useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { CARNES, ACOMPANHAMENTOS, TIPOSDEPRATOS } from "./mock";

export default function ChooseFood() {
  const params = useParams();
  const [selectedMeat, setSelectedMeat] = useState([]);
  const [selectedFoodStuff, setSelectedFoodStuff] = useState([]);
  const [customMeat, setCustomMeat] = useState([]);
  const [customFood, setCustomFood] = useState([]);

  function selectMeat(index) {
    if (selectedMeat.includes(index)) {
      const newArray = selectedMeat.filter((s) => s !== index);
      setSelectedMeat(newArray);
    } else {
      const newArray = [index];
      setSelectedMeat(newArray);
    }
  }

  function selectFoodStuff(index) {
    if (selectedFoodStuff.includes(index)) {
      const newFoodArray = selectedFoodStuff.filter((s) => s !== index);
      setSelectedFoodStuff(newFoodArray);
    } else {
      if (selectedFoodStuff.length < 5 && params.idFood === "0") {
        const newFoodArray = [...selectedFoodStuff, index];
        setSelectedFoodStuff(newFoodArray);
      } else if (selectedFoodStuff.length < 3 && params.idFood === "1") {
        const newFoodArray = [...selectedFoodStuff, index];
        setSelectedFoodStuff(newFoodArray);
      } else {
        return console.log("oi");
      }
    }
  }

  function customMeatOrder(index) {
    if (customMeat.includes(index)) {
      const newCustomMeat = customMeat.filter((c) => c !== index);
      setCustomMeat(newCustomMeat);
    } else {
      const newCustomMeat = [...customMeat, index];
      setCustomMeat(newCustomMeat);
    }
  }

  function customFoodOrder(index) {
    if (customFood.includes(index)) {
      const newCustomFood = customFood.filter((c) => c !== index);
      setCustomFood(newCustomFood);
    } else {
      const newCustomFood = [...customFood, index];
      setCustomFood(newCustomFood);
    }
  }

  function addToCart(){
    let choosedLunchOption = TIPOSDEPRATOS[params.idFood].nome

    const acpArr =[]
    const meatAtt=[]

    ACOMPANHAMENTOS.map((a,i) => (
      selectedFoodStuff.includes(i) && acpArr.push(a)
    ))
    CARNES.map((a,i) => (
      selectedMeat.includes(i) && acpArr.push(a)
    ))
    
    const cartItem = {tipo:{choosedLunchOption}, carne:{meatAtt}, acompanhamentos:{acpArr}}
    console.log(cartItem,"Itens no carrinho e tipo de prato")
  }

  function addToCartCustom(){
    let choosedLunchOption = TIPOSDEPRATOS[params.idFood].nome

    const acpArr =[]
    const meatAtt=[]

    ACOMPANHAMENTOS.map((a,i) => (
      customFood.includes(i) && acpArr.push(a)
    ))
    CARNES.map((a,i) => (
      customMeat.includes(i) && acpArr.push(a)
    ))
    
    const cartItem = {tipo:{choosedLunchOption}, carne:{meatAtt}, acompanhamentos:{acpArr}}
    console.log(cartItem,"Itens no carrinho e tipo de prato")
  }


  let totalPrice = TIPOSDEPRATOS[params.idFood].preco
    .toFixed(2)
    .replace(".", ",");
  if (params.idFood === "0" || params.idFood === "1") {
    return (
      <ContainerChooseFood>
        <h1>Escolha sua carne</h1>
        {CARNES.map((c, i) => (
          <ButtonMeat
            key={i}
            selected={selectedMeat.includes(i)}
            onClick={() => selectMeat(i)}
          >
            {c}
          </ButtonMeat>
        ))}
        <br />
        <h1>Acompanhamentos</h1>
        {ACOMPANHAMENTOS.map((c, i) => (
          <ButtonFoodStuff
            key={i}
            selected={selectedFoodStuff.includes(i)}
            onClick={() => selectFoodStuff(i)}
          >
            {c}
          </ButtonFoodStuff>
        ))}
        <br />
        <ButtonFinishOrder onClick={addToCart}>
          Adicionar ao carrinho{" "}
          <TotalPriceText>R$ {totalPrice} </TotalPriceText>
        </ButtonFinishOrder>
      </ContainerChooseFood>
    );
  } else {
    let customPrice = (
      TIPOSDEPRATOS[params.idFood].preco +
      3 * customMeat.length +
      customFood.length
    )
      .toFixed(2)
      .replace(".", ",");
    return (
      <ContainerChooseFood>
        <h1>Escolha sua carne</h1>
        {CARNES.map((c, i) => (
          <ButtonMeat
            key={i}
            selected={customMeat.includes(i)}
            onClick={() => customMeatOrder(i)}
          >
            {c}
          </ButtonMeat>
        ))}
        <br />
        <h1>Acompanhamentos</h1>
        {ACOMPANHAMENTOS.map((c, i) => (
          <ButtonFoodStuff
            key={i}
            selected={customFood.includes(i)}
            onClick={() => customFoodOrder(i)}
          >
            {c}
          </ButtonFoodStuff>
        ))}
        <br />
        <ButtonFinishOrder onClick={addToCartCustom}>
          Adicionar ao carrinho{" "}
          <TotalPriceText>R$ {customPrice} </TotalPriceText>
        </ButtonFinishOrder>
      </ContainerChooseFood>
    );
  }
}

const ContainerChooseFood = styled.div`
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
  h1 {
    margin-bottom: 15px;
  }
`;

const ButtonMeat = styled.button`
  background-color: ${(props) =>
    props.selected === true ? "#a7d373" : "#ffffff"};
  /* background-color: #ffffff; */
  border-radius: 10px;
  margin-bottom: 10px;
  font-family: "Roboto";
  font-size: 20px;
  font-weight: 700;
  padding: 10px;
  border-color: #a7d373;
`;

const ButtonFoodStuff = styled.button`
  background-color: ${(props) =>
    props.selected === true ? "#a7d373" : "#ffffff"};
  border-radius: 10px;
  margin-bottom: 10px;
  font-family: "Roboto";
  font-size: 20px;
  font-weight: 700;
  padding: 10px;
  /* border:none; */
  border-color: #a7d373;
`;
const ButtonFinishOrder = styled.button`
  border-radius: 10px;
  padding: 10px;
  background-color: #11b316;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  font-family: "Roboto";
  font-style: normal;
  font-weight: 700;
  font-size: 22px;
  color: #ffffff;
`;

const TotalPriceText = styled.h5`
  font-family: "Roboto";
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  color: yellow;
  display: flex;
  align-items: center;
  margin-left: 15px;
`;
