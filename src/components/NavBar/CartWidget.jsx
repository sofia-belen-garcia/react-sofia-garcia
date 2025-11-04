import { useContext } from "react";
import { CartContext } from "../Context/CartContex";
import { Link } from "react-router-dom";
import {CartItem} from "../cart/CartItem"

export const CartWidget = () => {
    const {productosAgregados} = useContext(CartContext)

    const totalQuantity = () => productosAgregados ? productosAgregados.reduce ((acc, valorActual)=>acc+valorActual.quantity, 0) :0

    return(
        !!totalQuantity () && (
                    <Link to="/cart">
                {totalQuantity ()}
            </Link>)
)
};