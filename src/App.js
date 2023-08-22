import React, { useState } from "react"
import {Routes, Route, BrowserRouter} from "react-router-dom";

import "./styles/style.css"

import Home from "./components/pages/Home";
import Login from "./components/pages/Login"
import Contato from "./components/pages/Contato";
import Cadastro from "./components/pages/Cadastro";
import Info from "./components/pages/Info";
//import Admin from "./components/pages/Admin";
import Masc from "./components/pages/Masc";
import Fem from "./components/pages/Fem";
import Infan from "./components/pages/Infan";
import UserPostForm from "./components/pages/cadProdutos";
import { CurrentUserContext } from "./contexts/CurrentUserContext";


function App() {
  const [currentUser, setCurrentUser] = useState("");

  return (
    <CurrentUserContext.Provider value={{currentUser, setCurrentUser}}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/contato" element={<Contato />} />
          <Route path="/cadProdutos" element={<UserPostForm />} />
          <Route path="/masc" element={<Masc />} />
          <Route path="/fem" element={<Fem />} />
          <Route path="/infan" element={<Infan />} />
          <Route path="/cadastro" element={<Cadastro />} />
          <Route path="/info/:userId" element={<Info />} />
        </Routes>  
      </BrowserRouter>
      </CurrentUserContext.Provider>
)}

export default App;

