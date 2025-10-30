import "./App.css";
import { ItemListContainer } from "./components/ItemListContainer/ItemListContainer";
import { NavBar } from "./components/NavBar/NavBar";
import { Container } from "./components/Container";
import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route} from "react-router-dom";
import {ItemContainerDetail} from "./components/ItemDetailContainer/ItemContainerDetail";
import Inicio from "./components/Inicio";
import { Error404 } from "./components/Error404";
import { getFirestore, getDoc, doc } from "firebase/firestore";

function App() {
  const db=getFirestore()
  const refDoc=doc(db, "items", "id")

  getDoc(refDoc).then((snapshot)=>{
    return ({...snapshot.data(), id:snapshot.id})
  })

  // const [elementos, setElementos] = useState([]);
  // useEffect(() => {
  //   fetch("../public/elementos.json")
  //     .then((response) => response.json())
  //     .then((data) => {
  //       setElementos(data);
  //       console.log(data);
  //     });
  // }, []);
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element= {<Inicio />} />
          <Route path="/category/:categoryId" element= {<ItemListContainer />} />
          <Route path="/detail/:detailId" element= {<ItemContainerDetail />} />
          <Route path="*" element= {<Error404 />} />
        </Routes>
        <Container mensaje="Bienvenidx a nuestro catálogo!"></Container>
        <ItemListContainer
          mensaje="Agregá algún producto"
          elementos={db}
        ></ItemListContainer>
      </BrowserRouter>
    </>
  );
}

export default App;
