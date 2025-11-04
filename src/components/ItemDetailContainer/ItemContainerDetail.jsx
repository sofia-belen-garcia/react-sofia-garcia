import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getFirestore, doc, getDoc } from "firebase/firestore";
import {ItemDetail} from "./ItemDetail"
import { CartContext, useCart } from "../Context/CartContex";
import { UseCart } from "../Context/UseCart";

export const ItemContainerDetail = () => {
const [product, setProduct] = useState(null);
const [loading, setLoading] = useState(true);
const { detailId } = useParams();

const {productosAgregados, addItem, deleteItem}= useCart()



useEffect(() => {
    const db= getFirestore()
    const refDoc =doc(db,"items", detailId)

    getDoc(refDoc)
    .then(snapshot=>{setProduct({id:snapshot.id, ...snapshot.data()})
                    setLoading(false)})
}
, [detailId])
if(loading){return(<p>Loading...</p>)}
const cartItem=productosAgregados.find((item)=>item.id===product.id)
const quantityCart=cartItem ? cartItem.quantity :0

const stockDispo=product.stock - quantityCart



return ((product) ? (
        <div className="li">
        <h2>{product.nombre}</h2>
        <img src={product.img} alt={product.nombre} className="img"/>
        <p>{product.detail}</p>
        <small>${product.costo}</small>
        <mark>stock: {  stockDispo}</mark>
        <div>
            <button onClick={()=> addItem(product, 1)} disabled={quantityCart>= product.stock}>+1</button>
            <span>{quantityCart}</span>
            <button onClick={()=> deleteItem (product.id)} disabled={quantityCart===0}>-1</button>
        </div>
    </div> )
    :
    <p>No se encontró el producto</p>
);
};
