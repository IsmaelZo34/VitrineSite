import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./Pages/Nav";
import Galerie from "./Pages/Galerie";
import Apropos from "./Pages/Apropos";
import Contact from "./Pages/Contact";
import Portfolio from "./Pages/Portfolio";

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="app-container">
        <Routes>
          <Route path="/" element={<Galerie />} />
          <Route path="/pp" element={<Apropos />} />
          <Route path="/Portfolio" element={<Portfolio/>} />
          <Route path="/Contact" element={<Contact/>} />
          {/* Tu peux ajouter d'autres routes ici comme Contact, etc. */}
        </Routes>
      </div>
    </div>
  );
}

export default App;
