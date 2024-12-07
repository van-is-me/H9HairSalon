import React from "react";
import Navbar from "./components/Navbar";
import Contact from "./contact/Contact";
import Home from "./home/Home";
import Introduce from "./introduce/Introduce";
import Library from "./library/Library";
import Product from "./product/Product";
import Service from "./service/Service";
import Train from "./train/Train";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Introduce" element={<Introduce />} />
        <Route path="/Library" element={<Library />} />
        <Route path="/Product" element={<Product />} />
        <Route path="/Service" element={<Service />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/Train" element={<Train />} />
      </Routes>
    </>
  );
}

export default App;
