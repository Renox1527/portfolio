import { Link } from "react-router-dom";

export default function Header({ texts }) {
  return (
    <header className="header">
      <nav className="nav">
        <Link to="/">{texts.nav.home}</Link>
        <Link to="/about">{texts.nav.about}</Link>
        <Link to="/projects">{texts.nav.projects}</Link>
        <Link to="/contact">{texts.nav.contact}</Link>
      </nav>
    </header>
  );
}

