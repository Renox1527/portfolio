import { motion } from "framer-motion";

export default function LanguageToggle({ lang, setLang }) {

  const toggleLanguage = () => {
    setLang(lang === "en" ? "es" : "en");
  };

  return (
    <motion.div
      className="language-switch"
      onClick={toggleLanguage}
      whileTap={{ scale: 0.95 }}
      whileHover={{ scale: 1.05 }}
    >
      <motion.div
        className="switch-indicator"
        layout
        transition={{ type: "spring", stiffness: 400, damping: 30 }}
        style={{
          left: lang === "en" ? "0%" : "50%"
        }}
      />

      <span className={lang === "en" ? "active" : ""}>EN</span>
      <span className={lang === "es" ? "active" : ""}>ES</span>
    </motion.div>
  );
}

