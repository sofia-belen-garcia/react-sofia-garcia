import "./App.css";
import {ItemListContainer} from "./components/ItemListContainer";
import {NavBar} from "./components/NavBar";
import {Container} from "./components/Container";
import { useEffect, useState } from "react";


function App() {
  const [elementos, setElementos]=useState([]);
  useEffect(()=>{
    fetch("../public/elementos.json")
    .then((response)=>response.json())
    .then((data)=>{
      setElementos(data)
      })
  },[])
  return(
    <>
  <div>
    <NavBar inicio="Inicio" nosotros="Nosotros"  productos="Productos"/>
  </div>
  <ItemListContainer mensaje="Agregá algún producto">
    <ul>
      {elementos.map((elemento)=>(      
        <li key={elemento.id}>{elemento.nombre}</li>))}
    </ul>
  </ItemListContainer>

  <div>
    <Container mensaje="Bienvenidx a nuestro catálogo!"></Container>
  </div>
    </>
  )
}

export default App;
