import React, { Route, Routes } from 'react-router';
import logo from './logo.svg';
import './App.css';
import Header from "./common/Header/Header";
import Home from "./screens/home/Home";
import About from "./screens/About/About";
import Notfound from "./screens/notfound/NotFound";
import ProductsDetails from "./screens/productsdetails/ProductsDetails";
import Cart from "./screens/cart/Cart";
import {createContext, useState } from "react";

export const Context = createContext<any>(null);

function App() {
  const [home, setHomeInfo] = useState({
    homeScreen: true,
  });

  const [cart, setCart] = useState([]);
  return (
    <>
      <Context.Provider value={{ home, setHomeInfo, cart, setCart }}>
        <Header />
        <main>
          <Routes>
            <Route path="/shopify" element={<Home />} />
            <Route path="/product/:id" element={<ProductsDetails />} />
            <Route path="/about" element={<About />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="*" element={<Notfound />} />
          </Routes>
          </main>
      </Context.Provider>
    </>
  )
}

export default App;
