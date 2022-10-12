import styled from "styled-components"
import { CARNES, ACOMPANHAMENTOS } from "./mock"

export default function MainScreen(){
// const textIntro = ["Olá, bem vindo(a) ao nosso restaurante, clique acima e escolha a opção desejada e, assim que fizer o pedido, o site te redirecionará com o pedido escolhido para o nosso whatsapp 😄"]
    return(
        <IntroText>
            <h1>Nosso cardápio de hoje:</h1>
            <ul>
            {/* <hr/> */}

            <h2>Carnes</h2>
            {CARNES.map((c, i) => <li key={i}>{c}</li>)}
            {/* <hr/> */}

            <br/>
            
            <h2>Acompanhamentos</h2>
            {ACOMPANHAMENTOS.map((a,i) => <li key={i}>{a}</li>)}
            <hr/>
            <h2>Clique no menu no topo da página para montar seu prato.</h2>
            <button>Monte seu prato</button>
            </ul>
            
            </IntroText>
    )
}

const IntroText = styled.div`
margin-top:100px;
padding-top:30px;
padding-left:20px;
padding-right:20px;
width:100vw;
/* height: 100vw; */
display:flex;
flex-wrap:wrap;
font-family: 'Righteous';
font-style: normal;
font-weight: 400;
font-size: 28px;
line-height: 30px;
color: #FFFFFF;
background-color:#A7D373;
text-align:justify;
h1{
    font-size:30px;
    width:100%;
    text-align:center;
    margin-bottom:20px;
}
h2{
    color:yellow;
    font-size:26px;
    margin-bottom:10px;
}
li{
    font-size:22px;
}
ul{
    margin-bottom:50px;
}
hr{
    color:#ffffff;
    background:#ffffff;
}
`