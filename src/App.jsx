import { useState } from "react";
import { HashRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Pokedex from "./components/Pokedex";
import PokemonDetail from "./components/PokemonDetail";
import UserInput from "./components/UserInput";
import ProtectedRoutes from "./components/ProtectedRoutes";
function App() {
  return (
    <div className="App">
      <nav className="nav">
        <h1 className="nav-title">Pokedex</h1>
      </nav>
      <HashRouter>
        <Routes>
          <Route path="/" element={<UserInput />} />

          <Route element={<ProtectedRoutes />}>
            <Route path="/pokedex/" element={<Pokedex />} />
            <Route path="/pokedex/:name" element={<PokemonDetail />} />
          </Route>
        </Routes>
      </HashRouter>
      <footer className="footer">
        <h1 className="footer-title">Created by Cristopher Mejia</h1>
      </footer>
    </div>
  );
}

export default App;
