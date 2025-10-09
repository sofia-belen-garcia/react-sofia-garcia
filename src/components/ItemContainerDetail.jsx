import { useEffect, useState } from "react"; 
import elementos from "../../public/elementos.json"
import { useParams } from "react-router-dom";

export const ItemContainerDetail = () => {

    const [product, setProduct] =useState(null);
    const [loading, setLoading]= useState (true);
    const {id} = useParams ()

    useEffect (()=>{
    new Promise((resolve) => {
        setTimeout(()=>resolve(elementos), 2000)})
.then (response => {
    const finded =response.find(i=>i.id===Number(id))
if (finded) {
    setProduct(finded)
}
else{
    alert ("No existe")
    console.log(loading)
    console.log(product)
}
})
.finally(()=>setLoading(false))
}, [id]);
}