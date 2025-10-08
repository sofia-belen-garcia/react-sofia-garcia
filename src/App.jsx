import "./App.css";
import { ItemListContainer } from "./components/ItemListContainer";
import { NavBar } from "./components/NavBar";
import { Container } from "./components/Container";
import { useEffect, useState } from "react";

function App() {
  const [elementos, setElementos] = useState([]);
  useEffect(() => {
    fetch("../public/elementos.json")
      .then((response) => response.json())
      .then((data) => {
        setElementos(data);
        console.log(data);
      });
  }, []);
  return (
    <>
      <div>
        <NavBar inicio="Inicio" nosotros="Nosotros" productos="Productos" />
      </div>
      <main>
        <Container mensaje="Bienvenidx a nuestro catálogo!"></Container>
        <ItemListContainer
          mensaje="Agregá algún producto"
          elementos={elementos}
        ></ItemListContainer>
      </main>
    </>
  );
}

export default App;
