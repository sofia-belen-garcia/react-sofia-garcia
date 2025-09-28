import { CartWidget } from "./CartWidget";

export const NavBar = (props) => {
    return(
    <div className="navBar">
        <h1>
            <img src="../img/logo-gray.jpg" alt="" className="logo"/>
            <p>Adicto Tattoo</p>
            </h1>
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
                <li>
                    <CartWidget />
                </li>
            </ul>
        </nav>
    </div>
    )
};