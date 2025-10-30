import { useContext } from "react";
import {ItemCount} from "./ItemCount"
import { CartContext } from "../Context/CartContex";

export const ItemDetail = ({product}) => {
    const {addItem} =useContext(CartContext)

    const onAdd=quantity=>addItem(product, quantity)

    return (
        <div>
            <h1>{product.nombre}</h1>
            <img src={product.img} alt={product.nombre} />
            <p>$ {product.costo}</p>

            <ItemCount stock={product.stock} onAdd={onAdd} />
        </div>
    )
}