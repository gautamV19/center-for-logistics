import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./Pages/Home";
import About from "./Pages/About";
import Events from "./Pages/Events";
import Join from "./Pages/Join";
import People from "./Pages/People";
import Header from "./Components/Header";
import Footer from "./Components/Footer";

export default function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/events" element={<Events />} />
        <Route path="/join" element={<Join />} />
        <Route path="/people" element={<People />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}
