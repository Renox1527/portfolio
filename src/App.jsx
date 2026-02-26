import { useState } from "react";
import { HashRouter, Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";

// Pages
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";

// Components
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";


// Translations
import es from "./translations/es";
import en from "./translations/en";

function AnimatedRoutes({ texts, lang }) {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={lang + location.pathname}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -10 }}
        transition={{ duration: 0.3 }}
        >
        
        {/* Rutas */}
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Home texts={texts} />} />
          <Route path="/about" element={<About texts={texts} />} />
          <Route path="/projects" element={<Projects texts={texts} />} />
          <Route path="/contact" element={<Contact texts={texts} />} />
        </Routes>

      </motion.div>
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

      {/* Botón para cambiar idioma */}
      <Navbar texts={texts} lang={lang} setLang={setLang} />

      <AnimatedRoutes texts={texts} lang={lang} />

      <Footer />

    </HashRouter>
  );
}

export default App;


