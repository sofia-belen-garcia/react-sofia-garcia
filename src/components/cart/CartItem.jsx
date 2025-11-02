import { useContext, useState } from "react";
import { getFirestore, collection, addDoc } from "firebase/firestore";
import { CartContext } from "../Context/CartContex";

export const CartItem= () => {
    const [formValue, setFormValue] = useState({
        nombre: "",
        email: "",
        teléfono: "",
    })
    const {productosAgregados, deleteItem, clear} = useContext(CartContext)

    const sendOrder= () => {
        const order = {
            buyer:formValue,
            items: productosAgregados,
            total: total(),
        }
        const db= getFirestore()
        const orderCollection=collection(db, "orders")

        addDoc(orderCollection, order)
        .then(response=>{
            if(response.id){
                clear()
                alert ("Compra " + response.id + " se comlpetó")
            }
        })
    }

    const handleChange = event => {
        setFormValue(prev=>({
            ...prev,
            [event.target.name]:event.target.value
        }))
    }

    const total = () => productosAgregados.reduce(
        (acc, valorActual)=>acc +valorActual.quantity * valorActual.price,0 
    )

    return (
        <>
        <Container>
            <h2>Lista de productos</h2>
            {!productosAgregados.length ? (
                <mark>No hay productos</mark>
            ) : (
                <div>
                    <thead>
                        <tr>
                            <th>Nombre</th>
                            <th>Costo</th>
                            <th>Cantidad</th>
                        </tr>
                    </thead>
                    <tbody>
                        {productosAgregados.map(producto=>(
                            <tr key={producto.id}>
                                <td>{producto.nombre}</td>
                                <td><img src={producto.img} alt={producto.nombre} /> </td>
                                <td>${producto.costo}</td>
                                <td>{producto.quantity}</td>
                                <td>
                                    <button onClick={ () =>deleteItem(producto.id)}>Eliminar</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                    <tfoot>
                        <td>Total</td>
                        <td>{total()}</td>
                    </tfoot>

                    <table>
                        <h3>Datos</h3>
                        <form >
                            <div>
                                <form>Nombre</form>
                                <form onChange={handleChange} value={formValue.name} type="text" name="nombre"></form>
                            </div>
                            <div>
                                <form>E-mail</form>
                                <form onChange={handleChange} value={formValue.mail} type="text" name="nmail"></form>
                            </div>
                            <div>
                                <form>Teléfono</form>
                                <form onChange={handleChange} value={formValue.telefono} type="text" name="telefono"></form>
                            </div>
                            <button variant="primary" type="button" onClick={sendOrder}>Enviar</button>
                        </form>
                    </table>
                </div>
            )}
        </Container>
        </>
    )
}