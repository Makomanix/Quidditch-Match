import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import { Button, Row, Col } from "bootstrap";
import "./App.css";
import Home from "./components/Home";
import About from "./components/About";
import CharacterPage from "./components/CharacterPage";

function App() {
  return (
    <div className="App">
      <h1>Quidditch Rumble</h1>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/characterPage">Build Your Team!</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="characterPage" element={<CharacterPage />} />
      </Routes>
    </div>
  );
}

export default App;
