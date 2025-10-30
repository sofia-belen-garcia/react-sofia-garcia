import { useState } from "react";
import { Link } from "react-router-dom";
import { ItemList } from "./ItemList";
import firebase from "firebase/compat/app";
import { Firestore } from "firebase/firestore";

export const Item = () => {
    const [item, setItem]= useState([]);
    if(!item){
        return null
    }
    return(
    <div key={item.id} >
        <div>
            <img src={item.img} />
        </div> 
        <div>
            <h3>{item.nombre}</h3>
            <p>Categoría: {item.categoryId}</p>
            <small>{item.detail}</small>
            <Link to={`/detail/${item.id}`}>
                <button variant="primary">Ver más</button>
            </Link>
            <mark>Stock: {item.stock}</mark>
        </div>
    </div>
    )
}