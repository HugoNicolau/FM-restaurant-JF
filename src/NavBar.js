import styled from "styled-components"

export default function NavBar(){

    return(
      <AllNavBar>
        <h1>FM</h1>
        <h2>Confeitaria & Restaurante</h2>
      </AllNavBar>
    )
}

const AllNavBar = styled.div`
position:fixed;
width:100%;
display:flex;
height: 75px;
left: 0px;
top: 0px;
border-radius: 0px;
background-color:#a7d373;
font-family:'Caveat';
color:#ffffff;
margin-bottom:10px;
display:flex;
align-items:end;
padding-left:20px;


h1{
    font-family: "Caveat";
font-size: 64px;
font-weight: 400;
line-height: 85px;
letter-spacing: 0em;
text-align: left;
margin-right:10px;

}
h2{
    font-family: "Caveat";
font-size: 24px;
font-weight: 400;
line-height: 81px;
letter-spacing: 0em;
text-align: left;

}

`





// const Title = styled.div`
// font-family: 'Caveat';
// font-size: 64px;
// font-weight: 400;
// line-height: 81px;
// letter-spacing: 0em;
// text-align: left;
// background-color:#A7D373;
// color:white;
// `
