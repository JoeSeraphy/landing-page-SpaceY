import { GlobalStyles } from "../../styles/globalStyles";
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <>
      <GlobalStyles />
      <nav>
        <ul>
          <li>
            <Link to="/">Inicio</Link>
          </li>
          <li>
            <Link to="/Section">Sobre nós</Link>
          </li>
          <li>
            <Link to="/Section">Missões</Link>
          </li>
          <li>
            <Link to="/FormSection">Conato</Link>
          </li>
        </ul>
      </nav>
    </>
  );
};
