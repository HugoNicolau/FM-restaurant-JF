import './App.css';
import MainScreen from './MainScreen';
import GlobalStyle from './GlobalStyle';
import {BrowserRouter, Routes, Route} from "react-router-dom"
import NavBar from "./NavBar"
import Food from "./Food"
import Drinks from "./Drinks"
import Candies from "./Candies"
import Party from "./Party"
import Cart from "./Cart"


export default function App() {
  return (
    
    <BrowserRouter>

    <GlobalStyle/>
    <NavBar/>
    <Routes>
    <Route path="/" element={<MainScreen/>} />
    <Route path="/food" element={<Food/>} />
    <Route path="/drinks" element={<Drinks/>} />
    <Route path="/candies" element={<Candies/>} />
    <Route path="/party" element={<Party/>} />
    <Route path="/Cart" element={<Cart/>} />


    </Routes>
    </BrowserRouter>
  );
}
