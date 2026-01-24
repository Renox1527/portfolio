export default function LanguageToggle({ lang, setLang }) {
  return (
    <button onClick={() => setLang(lang === "es" ? "en" : "es")}>
      {lang === "es" ? "EN" : "ES"}
    </button>
  );
}
