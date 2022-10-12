import styled from "styled-components"

export default function NavBar(){

    return(
        <AllNavBar>
        <Title>FM</Title>
       <MenuItems>
       <h1>Comidas</h1>
       <h1>Bebidas</h1>
       <h1>Doces</h1>
       <h1>Festa</h1>
       </MenuItems> 
        </AllNavBar>
    )
}

const AllNavBar = styled.div`
position:fixed;
top:0;
left:0;
width:100%;

`

const Title = styled.div`
width:100%;
font-family: 'Caveat';
font-style: normal;
font-weight: 700;
font-size: 76px;
line-height: 70px;
text-align: center;
background-color:#A7D373;
color: #FFFFFF;
display:flex;
justify-content:center;
align-items:center;
backdrop-filter: blur(2px);
`

const MenuItems = styled.div`
font-family: 'Righteous';
height:45px;
font-style: normal;
font-weight: 700;
font-size: 22px;
line-height: 30px;
text-align: center;
background-color:#A7D373;
color: #FFFFFF;
border-top: 3px solid #FFFFFF;
border-bottom: 3px solid #FFFFFF;
display:flex;
justify-content:space-around;
display:flex;
align-items:center;

`