import "./App.css";
import { ItemListContainer } from "./components/ItemListContainer";
import { NavBar } from "./components/NavBar";
import { Container } from "./components/Container";
import { useEffect, useState } from "react";
import { BrowserRouter, Router, Route, Routes } from "react-router-dom";
import {ItemContainerDetail} from "./components/ItemContainerDetail";
import Inicio from "./components/Inicio";
import { Error404 } from "./components/Error404";

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
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element= {<Inicio />} />
          <Route path="/category/:categoryId" element= {<Inicio />} />
          <Route path="/detail/:id" element= {<ItemContainerDetail />} />
          <Route path="*" element= {<Error404 />} />
        </Routes>
      
      <main>
        <Container mensaje="Bienvenidx a nuestro catálogo!"></Container>
        <ItemListContainer
          mensaje="Agregá algún producto"
          elementos={elementos}
        ></ItemListContainer>
      </main>
        </BrowserRouter>
    </>
  );
}

export default App;
