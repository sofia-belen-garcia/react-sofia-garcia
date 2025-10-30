import { useContext } from "react";
import { CartContext } from "../Context/CartContex";
import { Link } from "react-router-dom";


export const CartWidget = () => {
    const {productosAgregados} = useContext(CartContext)

    const totalQuantity = () => productosAgregados ? productosAgregados.reduce ((acc, valorActual)=>acc+valorActual.quantity, 0) :0

    return(
        !!totalQuantity() && (
            <Link to="/cart">
                <div>
                    <img src="../../img/cart.png" alt="carrito" className="cartImg" />
                    <span>{totalQuantity()}</span>
                </div>
                <button>Terminar compra</button>
            </Link>
        )
)
};