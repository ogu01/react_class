import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { BrowserRouter, Link, Routes, Route } from "react-router-dom";
import Save from "./Save";
import List from "./List";
import Home from "./Home";
import Header from "./Header";
function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Save" element={<Save />} />
          <Route path="/List" element={<List />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
