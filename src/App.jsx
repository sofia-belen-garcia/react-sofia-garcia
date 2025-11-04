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
import { CartItem } from "./components/cart/CartItem";
import { CartWidget } from "./components/NavBar/CartWidget";
import { CartProvider } from "./components/Context/CartContex";
import { UseCart } from "./components/Context/UseCart";

function App() {
  const db=getFirestore()
  const refDoc=doc(db, "items", "id")

  getDoc(refDoc).then((snapshot)=>{
    return ({...snapshot.data(), id:snapshot.id})
  })

  return (
    <>

      <BrowserRouter>
          <CartProvider>
        <NavBar />
        <Routes>
          <Route path="/" element= {<Inicio />} />
          <Route path="/category/:categoryId" element= {<ItemListContainer />} />
          <Route path="/detail/:detailId" element= {<ItemContainerDetail />} />
          <Route path="/cart" element={<CartItem />} />
          <Route path="*" element= {<Error404 />} />
        </Routes>
        <Container mensaje="Bienvenidx a nuestro catálogo!"></Container>
        <ItemListContainer
          mensaje="Agregá algún producto"
          elementos={db}
        ></ItemListContainer>
              </CartProvider>
      </BrowserRouter>

    </>
  );
}

export default App;
