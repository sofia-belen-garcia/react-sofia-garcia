import { useEffect, useState } from "react";
import elementos from "../../public/elementos.json";
import { BrowserRouter } from "react-router-dom";
import { useParams } from "react-router-dom";

export const ItemContainerDetail = () => {
const [product, setProduct] = useState(null);
const [loading, setLoading] = useState(true);
const { detailId } = useParams();

useEffect(() => {
    new Promise((resolve, rejected) => {
    setTimeout(() => resolve(elementos), 2000);
    })
    .then((response) => {
        const found = response.find((i) => i.id === Number(detailId));
        if (!found) {
            setProduct(response)
        }
        else if (found) {
        setProduct(found);
        } else {
        alert("No existe");
        }
    })
    .finally(() => setLoading(false));
}, [detailId]);

return (
    <div>
    <h2>{product.nombre}</h2>
    <img src={product.img} alt={product.nombre} />
    <p>{product.detail}</p>
    <small>${product.costo}</small>
    </div>
);
};
