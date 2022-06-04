import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import TopNav from "./components/NavBar/TopNav.jsx";
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import Contact from "./pages/Contact.jsx";
import Service from "./pages/Service.jsx";
import Other from "./pages/Other.jsx";
const App = () => {
  return (
    <div>
      <BrowserRouter>
        <TopNav />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/Service" element={<Service />} />
          <Route path="/Other" element={<Other />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
