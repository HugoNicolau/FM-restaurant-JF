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
import ChooseFood from "./ChooseFood"
import { useState } from 'react';


export default function App() {
  const [cartItems, setCartItems] = useState([])

  return (
    
    <BrowserRouter>

    <GlobalStyle/>
    <NavBar/>
    <Routes>
    <Route path="/" element={<MainScreen/>} />
    <Route path="/food/" element={<Food/>} />
    <Route path="/food/:idFood" element={<ChooseFood/>} />
    <Route path="/drinks" element={<Drinks/>} />
    <Route path="/candies" element={<Candies/>} />
    <Route path="/party" element={<Party/>} />
    <Route path="/cart" element={<Cart/>} />


    </Routes>
    </BrowserRouter>
  );
}
