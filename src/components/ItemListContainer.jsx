import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import elementos from "../../public/elementos.json"

export const ItemListContainer = (props) => {
    const [products, setProducts] =useState ([]);
    const [loading, setLoading] =useState (true);
    const {id} =useParams();

    useEffect (()=>{
        new Promise((resolve) => {
            setTimeout(()=>resolve(elementos), 2000);
        })
        .then (response=>{
            if(!id){
                setProducts(response)
            console.log(products)}
            
            else{
                const filtered = response.filter(
                    i=> i.category ===id)
                    setProducts(filtered)
            }}
        )
        .finally(()=>setLoading(false))
    }, [id]);
    if(loading) return "Wait"
    return(
        <>
        <div>
            <h3>{props.mensaje}</h3>
                <ul className="card">
                    {props.elementos.map((elemento)=>(      
                    <li key={elemento.id} className="li">
                        <img src={elemento.img} alt={elemento.nombre} className="img-card"/>
                        <h4>{elemento.nombre}</h4>
                        <span>${elemento.costo}</span>
                        <span>categoría: {elemento.category}</span>
                        <small>producto número: {elemento.id}</small>
                        <br />
                        <button className="li-button">Ver más</button>
                    </li>))}
                </ul>
        </div>
        </>
    )
};