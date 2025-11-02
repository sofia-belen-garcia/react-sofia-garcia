import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getFirestore, doc, getDoc } from "firebase/firestore";
import {ItemDetail} from "./ItemDetail"
import { CartContext } from "../Context/CartContex";
import { UseCart } from "../Context/UseCart";

export const ItemContainerDetail = () => {
const [product, setProduct] = useState(null);
const [loading, setLoading] = useState(true);
const {addItem, removeItem, cart} = UseCart()
const { detailId } = useParams();

useEffect(() => {
    const db= getFirestore()
    const refDoc =doc(db,"items", detailId)

    getDoc(refDoc)
    .then(snapshot=>{setProduct({id:snapshot.id, ...snapshot.data()})
                    setLoading(false)})
}
, [detailId])
if(loading){return(<p>Loading...</p>)}

return ((product) ? (
        <div className="li">
        <h2>{product.nombre}</h2>
        <img src={product.img} alt={product.nombre} className="img"/>
        <p>{product.detail}</p>
        <small>${product.costo}</small>
        <mark>stock: {product.stock}</mark>
        <button onClick={()=> addItem(product)}>+1</button>
        <button onClick={()=> removeItem (product.id)}>-1</button>
    </div> )
    :
    <p>No se encontró el producto</p>
);
};
