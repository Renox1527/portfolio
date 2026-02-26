import { NavLink } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import LanguageToggle from "./LanguageToggle";

export default function Navbar({ texts, lang, setLang }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <motion.nav
        className="navbar"
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        <div className="nav-content">
          {/* <div className="logo">RA</div> */}

          <ul className="nav-links">
            <li><NavLink to="/" end>{texts.nav.home}</NavLink></li>
            <li><NavLink to="/about">{texts.nav.about}</NavLink></li>
            <li><NavLink to="/projects">{texts.nav.projects}</NavLink></li>
            <li><NavLink to="/contact">{texts.nav.contact}</NavLink></li>

            <LanguageToggle lang={lang} setLang={setLang} />
          </ul>

            <motion.div 
                className="hamburger"
                onClick={() => setIsOpen(!isOpen)}
                initial={false}
              >
                <motion.span
                  animate={isOpen ? { rotate: 45, y: 9 } : { rotate: 0, y: 0 }}
                  transition={{ duration: 0.3 }}
                />
                <motion.span
                  animate={isOpen ? { opacity: 0 } : { opacity: 1 }}
                  transition={{ duration: 0.2 }}
                />
                <motion.span
                  animate={isOpen ? { rotate: -45, y: -9 } : { rotate: 0, y: 0 }}
                  transition={{ duration: 0.3 }}
                />
            </motion.div>

        </div>
      </motion.nav>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="mobile-menu"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            <NavLink to="/" onClick={() => setIsOpen(false)}>{texts.nav.home}</NavLink>
            <NavLink to="/about" onClick={() => setIsOpen(false)}>{texts.nav.about}</NavLink>
            <NavLink to="/projects" onClick={() => setIsOpen(false)}>{texts.nav.projects}</NavLink>
            <NavLink to="/contact" onClick={() => setIsOpen(false)}>{texts.nav.contact}</NavLink>

            <LanguageToggle lang={lang} setLang={setLang} />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
