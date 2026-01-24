import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Pages
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";

// Components
import Header from "./components/Header";
import LanguageToggle from "./components/LanguageToggle";

// Translations
import es from "./translations/es";
import en from "./translations/en";

function App() {
  //Estado del idioma
  const [lang, setLang] = useState("es");

  //Selección de textos según idioma
  const texts = lang === "es" ? es : en;

  return (
    <BrowserRouter>
      {/* Header siempre visible */}
      <Header texts={texts} />

      {/* Botón para cambiar idioma */}
      <LanguageToggle lang={lang} setLang={setLang} />

      {/* Rutas */}
      <Routes>
        <Route path="/" element={<Home texts={texts} />} />
        <Route path="/about" element={<About texts={texts} />} />
        <Route path="/projects" element={<Projects texts={texts} />} />
        <Route path="/contact" element={<Contact texts={texts} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;


