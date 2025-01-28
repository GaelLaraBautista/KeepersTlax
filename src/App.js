import React from "react";
import {BrowserRouter as BrowserRouter, Routes, Route, Router} from "react-router-dom";

// Importar los componentes de cada pagina
import Home from "./pages/Home";
import Products from "./pages/Products";
import Cart from "./pages/Cart";
import Profile from "./pages/Profile";
import Admin from "./pages/Admin";
import Login from "./pages/Login";
import Signup from "./pages/Signup";

function App (){
  return(
    <Router>
      <div>
        {/*Navegacion Principal */}
        <nav>
          <a href="/">Home</a>
          <a href="/cart">Carrito</a>
          <a href="/productos">Poductos</a>
          <a href="/login">Incia sesión</a>
        </nav>

        {/* Definimos las rutas */}
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/products" element={<Products />}/>
          <Route path="/cart" element={<Cart />}/>
          <Route path="/admin" element={<Admin />}/>
          <Route path="/profile" element={<Profile />}/>
          <Route path="/login" element={<Login />}/>
          <Route path="/signup" element={<Signup />}/>
        </Routes>

      </div>      
    </Router>
  );
}