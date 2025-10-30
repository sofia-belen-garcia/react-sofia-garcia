import { CartWidget } from "./CartWidget";
import { NavLink, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import {getFirestore, collection, getDocs} from "firebase/firestore"



export const NavBar = () => {
    const [elementos, setElementos] = useState([]);
    const uniqueCategories=[...new Set(elementos.map(elemento=>elemento.categoryId))]
    // const {categoryId} = useParams()
    useEffect(()=>{
        const db=getFirestore()
        const refCollection=collection(db, "items")

        getDocs(refCollection)
        .then (snapshot=>{
            if (snapshot.size === 0) {
                return (<p>Sin resultados</p>)
            }
            else{
                const categories=snapshot.docs.map(elemento=>elemento.data().categoryId)
                const uniqueCategories= [new Set((elementos || []).map(e=>e.categoryId))]
            }
        })

    }, [])

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
                    <NavLink key={`${category}`} to={`/categoryId/${categoryId}`}><span>{categoryId}</span> </NavLink>
                ))}
                <NavLink to ="/cartWidget"><CartWidget /></NavLink>
            </nav>
    </div>
    )
};