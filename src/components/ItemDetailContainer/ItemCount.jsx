import { useState } from "react";
import { Link } from "react-router-dom";

export const ItemCount = ({stock, onAdd, initial})=>{
    const [counter, setCounter]=useState(initial ?? 1)

    const handleIncreaseCount = () =>{
        if(stock>counter) {
            setCounter(counter+1)
        }
    }

    const handleDecreaseCount = () =>{
        if(counter>1){
            setCounter(counter -1)
        }
    }


    return (
        <section>
            {stock>0?(
                <>
                <div> 
                    <button onClick={handleIncreaseCount}>+</button>
                    <input type="text" value={counter} />
                    <button onClick={handleDecreaseCount}>-</button>
                    <input type="text" value={counter}/>
                </div>
                <button onClick={()=> onAdd(counter)}>Agregar al carrito</button>

                <div>Stock disponible: {stock}</div>
                </>
            ) : (
                <div>No hay más stock</div>
            )
        }
        </section>
    )
}