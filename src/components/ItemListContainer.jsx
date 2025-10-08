export const ItemListContainer = (props) => {
    
    return(
        <>
        <div>
            <h3>{props.mensaje}</h3>
                <ul className="card">
                    {props.elementos.map((elemento)=>(      
                    <li key={elemento.id} className="li">
                        <img src={elemento.img} alt={elemento.nombre} className="img-card"/>
                        <h4>{elemento.nombre}</h4>
                        <span>${elemento.costo}</span>
                        <small>producto número: {elemento.id}</small>
                        <br />
                        <button className="li-button">Ver más</button>
                    </li>))}
                </ul>
        </div>
        </>
    )
};