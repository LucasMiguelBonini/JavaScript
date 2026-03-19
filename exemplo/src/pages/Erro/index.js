import { Link } from "react-router-dom";

function Erro(){
    return(
        <div>
            <h2>Ops... Parece que essa pagina não existe!</h2> <br/>

            <span>Paginas Encontradas: </span> <br/>
            <Link to="/">Home</Link> <br/>
            <Link to="/sobre">Sobre</Link> <br/>
            <Link to="/contato">Contato</Link> <br/>
        </div>
    )
}

export default Erro;