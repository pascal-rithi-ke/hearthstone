import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header>
      <nav>
        <ul>
          <li>
            <Link to="/">Accueil</Link>
          </li>
          <li>
            <Link to="/login">Se connecter</Link>
          </li>
          <li>
            <Link to="/register">S'inscrire</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
