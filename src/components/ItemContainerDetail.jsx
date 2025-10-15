import { useEffect, useState } from "react"; 
import data from "../../public/elementos.json"
import { useParams } from "react-router-dom";

export const ItemContainerDetail = () => {

    const [product, setProduct] =useState(null);
    const [loading, setLoading]= useState (true);
    const {id} = useParams ()

    useEffect (()=>{
    new Promise((resolve) => {
        setTimeout(()=>resolve(data), 2000)})
.then (response => {
    const found =response.find(i=>i.id===Number(id))
if (found) {
    setProduct(found)
}
else{
    alert ("No existe")
    console.log(loading)
    console.log(product)
}
})
.finally(()=>setLoading(false))
}, [id]);

return (
    <div>
        <h2>{product.nombre}</h2>
        <img src={product.img} alt={product.nombre} />
        <p>${product.precio}</p>
    </div>
)
}

