import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ItemContainerDetail } from "../ItemDetailContainer/ItemContainerDetail";
import { getFirestore, getDocs, collection, query, where } from "firebase/firestore";
import { Item } from "./Item";


export const ItemListContainer = (props) => {
    const [list, setList]=useState([])
    const [products, setProducts] =useState ([]);
    const [loading, setLoading] =useState (true);
    const {categoryId} =useParams();
    useEffect(()=>{
        const db= getFirestore()
        const refCollection=categoryId ? query (collection(db, "items"), where("categoryId", "==", categoryId))
        : collection (db, "items");
        
        getDocs(refCollection)
        .then(snapshot => {
            if (snapshot.size === 0) {
                setList([])
            }
            else{
                setProducts(snapshot.docs.map(doc=>({
                    id:doc.id,
                    ...doc.data()
                })))
            }
        })
        .finally (()=> setLoading(false))
    }, [categoryId])

    if(loading) return "Wait"
    return(
        <>
        <div>
            <h3>{props.mensaje}</h3>
                <ul className="card">
                    {products.map((elemento)=>(      
                    <li key={elemento.id} className="li">
                        <Item item={elemento}></Item>
                        {/* <img src={elemento.img} alt={elemento.nombre} className="img-card"/>
                        <h4>{elemento.nombre}</h4>
                        <span>${elemento.costo}</span>
                        <span>categoría: {elemento.categoryId}</span>
                        <small>producto número: {elemento.id}</small>
                        <br />
                        <Link to={`/detail/${elemento.id}`} className="li-button">Ver más</Link> */}
                    </li>))}
                </ul>
        </div>
        </>
    )
};