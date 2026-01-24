import { useState } from "react";
import es from "./translations/es";
import en from "./translations/en";

function App() {
  const [lang, setLang] = useState("es");
  const texts = lang === "es" ? es : en;

  return (
    <>
      <button onClick={() => setLang(lang === "es" ? "en" : "es")}>
        {lang === "es" ? "EN" : "ES"}
      </button>

      <h1>{texts.home.title}</h1>
      <p>{texts.home.subtitle}</p>
    </>
  );
}

export default App;

