import { useEffect, useState } from "react";
import { BrowserRouter } from "react-router-dom";
import { useParams } from "react-router-dom";
import { getFirestore, doc, getDoc } from "firebase/firestore";
import {ItemDetail} from "./ItemDetail"

export const ItemContainerDetail = () => {
const [product, setProduct] = useState(null);
const [loading, setLoading] = useState(true);
const { detailId } = useParams();

useEffect(() => {
    const db= getFirestore()
    const refDoc =doc(db,"items", categoryId)

    getDoc(refDoc)
    .then(snapshot=>setProduct({id:snapshot.id, ...snapshot.data()}))
}, [categoryId])
if (loading) {
    return (<p>Loading</p>)
    setLoading(false)
}

return (
    product ? (
    <div className="li">
        <h2>{product.nombre}</h2>
        <img src={product.img} alt={product.nombre} className="img"/>
        <p>{product.detail}</p>
        <small>${product.costo}</small>
    </div> )
    :
    <p>No se encontró el producto</p>
);
};
