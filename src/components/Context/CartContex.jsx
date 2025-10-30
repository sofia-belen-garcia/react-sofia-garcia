import { createContext } from "react";
import {UseCart} from "./UseCart"

export const CartContext = createContext([])

export const CartProvider = ({children}) => {
    const cart = UseCart()
    return (
        <CartContext.Provider value={cart}>{children}</CartContext.Provider>
    )
}
