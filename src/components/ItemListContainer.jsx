export const ItemListContainer = (props, children) => {
    
    return(
        <>
        <div>
            <h3>{props.mensaje}</h3>
            {children}
        </div>
        </>
    )
};