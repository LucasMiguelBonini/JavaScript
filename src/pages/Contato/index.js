import { Link } from "react-router-dom";

function Contato() {
    return(
        <div>
            <h1>Pagina Contato</h1> <br/>
            <span>Contato da empresa (dd) xxxx-xxxx</span> <br/> <br/>
            <Link to="/">Pagina Home</Link> <br/> <br/>
            <Link to="/sobre">Sobre</Link>
        </div>
    )
}

export default Contato;