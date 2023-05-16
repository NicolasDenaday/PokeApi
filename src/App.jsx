import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import Pokemon from "./components/Pokemon/Pokemon";
import PokemonsContainer from "./components/PokemonsContainer/PokemonsContainer";
import Header from "./components/Header/Header";

function App() {
  return (
    <BrowserRouter>
    <Header />
      <Routes>
        <Route path="/" element={<PokemonsContainer />} />
        <Route path="/pokemon/:name" element={<Pokemon />} />

        <Route path="/*" element={<Navigate to="/" replace  />} />
      </Routes>
    </BrowserRouter>

  )
}

export default App;
