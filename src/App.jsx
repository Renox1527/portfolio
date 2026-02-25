import { useState } from "react";
import { HashRouter, Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

// Pages
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import Footer from "./components/Footer";

// Components
import Header from "./components/Header";
import LanguageToggle from "./components/LanguageToggle";

// Translations
import es from "./translations/es";
import en from "./translations/en";

function AnimatedRoutes({ texts }) {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      {/* Rutas */}
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home texts={texts} />} />
        <Route path="/about" element={<About texts={texts} />} />
        <Route path="/projects" element={<Projects texts={texts} />} />
        <Route path="/contact" element={<Contact texts={texts} />} />
      </Routes>
    </AnimatePresence>
  );
}

function App() {
  //Estado del idioma
  const [lang, setLang] = useState("en");

  //Selección de textos según idioma
  const texts = lang === "es" ? es : en;

  return (
    <HashRouter>
      {/* Header siempre visible */}
      <Header texts={texts} />

      {/* Botón para cambiar idioma */}
      <LanguageToggle lang={lang} setLang={setLang} />

      <AnimatedRoutes texts={texts} />
      <Footer />
    </HashRouter>
  );
}

export default App;


