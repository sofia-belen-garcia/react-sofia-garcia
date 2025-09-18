export const NavBar = (props) => {
    return(
        <div className="navBar">
        <img src="../img/logo-gray.jpg" alt="" className="logo"/>
        <h1>Adicto Tattoo</h1>
        <nav>
            <ul className="listaNav">
                <li>
                    <a href="">{props.inicio} </a>
                </li>
                <li>
                    <a href="">{props.nosotros} </a>
                </li>
                <li>
                    <a href="">{props.productos} </a>
                </li>
            </ul>
        </nav>
        <a href="" className="cartIcon"><img src="../../img/cart.png" alt="" /></a>
        </div>
    )
};