import { CartWidget } from "./CartWidget";
import { NavLink } from "react-router-dom";
import { useEffect, useState } from "react";
import {getFirestore, collection, getDocs} from "firebase/firestore"
import { CartItem } from "../cart/CartItem";



export const NavBar = () => {
    const [elementos, setElementos] = useState([]);
    // const uniqueCategories=[...new Set(elementos.map(elemento=>elemento.categoryId))]
    // const {categoryId} = useParams()
    useEffect(()=>{
        const db=getFirestore()
        const refCollection=collection(db, "items")

        getDocs(refCollection)
        .then ((snapshot)=>{
            if (snapshot.size === 0) {
                return (<p>Sin resultados</p>)
            }
            // const categories=snapshot.docs.map(elemento=>elemento.data().categoryId)
            // const uniqueCategories= [new Set((elementos || []).map(e=>e.categoryId))]
            const docs=snapshot.docs.map((doc)=>({
                id:doc.id,
                ...doc.data(),
            }))
            setElementos(docs)
        })

    }, [])

    const uniqueCategories=[...new Set(elementos.map((e)=>e.categoryId))];

    return(
    <div className="navBar">
        <h1>
            <img src="../img/logo-gray.jpg" alt="" className="logo"/>
            <p>Adicto Tattoo</p>
        </h1>
        <nav className="listaNav">
                <NavLink to="/">
                    <span>Inicio</span>
                </NavLink>
                {[...uniqueCategories].map(categoryId => (
                <NavLink key={`${categoryId}`} to={`/category/${categoryId}`}><span>{categoryId}</span> </NavLink>
                ))}
                <NavLink key={CartWidget} to={"CartWidget"} > 
                    <img src="../../../img/cart.png" alt="carrito" className="cartImg" /></NavLink>
        </nav>
    </div>
    )
};