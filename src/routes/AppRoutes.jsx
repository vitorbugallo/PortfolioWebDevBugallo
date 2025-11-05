// src/AppRoutes.jsx
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Hero from "../pages/Hero";
import Projects from "../pages/Projects";
import Contact from "../pages/Contact";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function AppRoutes() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/projetos" element={<Projects />} />
        <Route path="/contato" element={<Contact />} />
      </Routes>
      <Footer />
    </Router>
  );
}
