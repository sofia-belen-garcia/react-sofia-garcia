import { createContext, useContext } from "react";
import {UseCart} from "./UseCart"

export const CartContext = createContext()
export const useCart= () => useContext(CartContext)

export const CartProvider = ({children}) => {
    const {productosAgregados, addItem, clear, deleteItem} = UseCart()
    return (
        <CartContext.Provider value={{productosAgregados, addItem, clear, deleteItem}}>{children}</CartContext.Provider>
    )
}
