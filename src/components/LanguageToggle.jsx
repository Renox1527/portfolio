export default function LanguageToggle({ lang, setLang }) {
  return (
    <div className="lang-toggle">
      <button onClick={() => setLang(lang === "es" ? "en" : "es")}>
        {lang === "es" ? "EN" : "ES"}
      </button>
    </div>
  );
}

