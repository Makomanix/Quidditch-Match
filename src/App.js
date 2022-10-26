import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="App">
      <h1>Quidditch Rumble</h1>
      <Navbar 
        <nav>
          <ul>
            <li></li> 
          </ul>
        </nav>
      />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
      </Routes>
    </div>
  );
}

function Home() {
  return (
    <>
      <nav>
        <Link to="/about">About</Link>
      </nav>
      <main>
        <p>Are you ready to RUMBLE?</p>
      </main>
    </>
  );
}

function About() {
  return (
    <>
      <nav>
        <Link to="/">Home</Link>
      </nav>
      <main>
        <h1>About</h1>
        <p>
          This application is collection of Harry Potter characters that you can
          create a Quidditch team with
        </p>
      </main>
    </>
  );
}

export default App;
