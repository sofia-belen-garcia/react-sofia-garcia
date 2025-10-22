import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import elementos from "../../public/elementos.json";
import { ItemContainerDetail } from "./ItemContainerDetail";

export const ItemListContainer = (props) => {
    const [products, setProducts] =useState ([]);
    const [loading, setLoading] =useState (true);
    const {categoryId} =useParams();

    useEffect (()=>{
        new Promise((resolve, rejected) => {
            setTimeout(()=>resolve(elementos), 2000);
        })
        .then (response=>{
            if(!categoryId){
                setProducts(response)}
            
            else{
                const filtered = response.filter(
                    i=> i.category ===categoryId)
                    setProducts(filtered)
            }}
        )
        .finally(()=>setLoading(false))
    }, [categoryId]);
    if(loading) return "Wait"
    return(
        <>
        <div>
            <h3>{props.mensaje}</h3>
                <ul className="card">
                    {products.map((elemento)=>(      
                    <li key={elemento.id} className="li">
                        <img src={elemento.img} alt={elemento.nombre} className="img-card"/>
                        <h4>{elemento.nombre}</h4>
                        <span>${elemento.costo}</span>
                        <span>categoría: {elemento.category}</span>
                        <small>producto número: {elemento.id}</small>
                        <br />
                        <Link to={`/detail/${elemento.id}`} className="li-button">Ver más</Link>
                    </li>))}
                </ul>
        </div>
        </>
    )
};