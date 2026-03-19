import { Link } from "react-router-dom";
import Home from "../Home";


function Sobre() {
  return (
    <div>
      <h1>Pagina Sobre</h1> <br/>
      <Link to="/">Pagina Home</Link> <br/> <br/>
      <Link to="/contato">Contato</Link>
    </div>
  );
}

export default Sobre;
