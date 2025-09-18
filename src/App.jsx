import "./App.css";
import {CartWidget} from "./components/CartWidget";
import {ItemListContainer} from "./components/ItemListContainer";
import {NavBar} from "./components/NavBar";
import {Container} from "./components/Container";


function App() {
  return(
    <>
  <div>
    <NavBar inicio="Inicio" nosotros="Nosotros"  productos="Productos"/>
  </div>

  <ItemListContainer mensaje="Agregá algún producto"/>

  <div>
    <Container mensaje="Bienvenidx a nuestro catálogo!" />
  </div>
  
  <div>
    <CartWidget/>
  </div>

    </>
  )
}

export default App;
