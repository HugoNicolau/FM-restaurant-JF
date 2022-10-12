import styled from "styled-components"

export default function MainScreen(){

    return(
        <IntroText>
            Olá, bem vindo(a) ao nosso restaurante, clique acima e escolha a opção desejada e, assim que fizer o pedido, o site te redirecionará com o pedido escolhido para o nosso whatsapp 😄
            </IntroText>
    )
}

const IntroText = styled.div`
margin-top:100px;
padding-top:30px;
padding-left:20px;
padding-right:20px;
width:100vw;
height: 100vw;
display:flex;
flex-wrap:wrap;
font-family: 'Caveat';
font-style: normal;
font-weight: 700;
font-size: 28px;
line-height: 30px;
color: #FFFFFF;
background-color:#A7D373;
text-align:justify;
`