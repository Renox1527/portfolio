import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function Header({ texts }) {
  return (
    <motion.nav
      className="header"
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
    >
      
        <motion.li
        className="nav" 
        whileHover={{ scale: 1.0 }}
        >
          <Link to="/">{texts.nav.home}</Link>
          <Link to="/about">{texts.nav.about}</Link>
          <Link to="/projects">{texts.nav.projects}</Link>
          <Link to="/contact">{texts.nav.contact}</Link>
        </motion.li>
      

    </motion.nav>
  );
}

