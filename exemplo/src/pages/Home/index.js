import { Link } from 'react-router-dom';
import Sobre from '../Sobre';

function Home() {
  return (
    <div>
      <h1>Pagina Home</h1> <br/>
      <Link to="/sobre">Sobre</Link> <br/> <br/>
      <Link to="/contato">Contato</Link>

      <hr/>

      <Link to="/produto/12345">Acessar Produto 12345</Link>
    </div>
  );
}

export default Home;
