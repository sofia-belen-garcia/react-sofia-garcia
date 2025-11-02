import { useState } from "react";
import { Link } from "react-router-dom";
import { ItemList } from "./ItemList";
import firebase from "firebase/compat/app";
import { collection, Firestore, getFirestore } from "firebase/firestore";
import { useEffect } from "react";

export const Item = ({item}) => {
    if(!item){
        return null
    }
    return(
    <div key={item.id} className="li" >
        <div>
            <img src={item.img} className="img-card" />
        </div> 
        <div className="li">
            <h3>{item.nombre}</h3>
            <p>Categoría: {item.categoryId}</p>
            <Link to={`/detail/${item.id}`}>
                <button variant="primary">Ver más</button>
            </Link>
            <mark>Stock: {item.stock}</mark>
        </div>
    </div>
    )
}