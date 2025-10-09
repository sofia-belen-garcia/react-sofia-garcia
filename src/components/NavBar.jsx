import { CartWidget } from "./CartWidget";
import { NavLink } from "react-router-dom";
import data from "../../public/elementos.json"

const categories = data.map (item => item.category);
const uniqueCategories = new Set (categories);

export const NavBar = () => {
    return(
    <div className="navBar">
        <h1>
            <img src="../img/logo-gray.jpg" alt="" className="logo"/>
            <p>Adicto Tattoo</p>
            </h1>
        <navBar>
            <nav>
                <NavLink to="/">
                    <span>Inicio</span>
                </NavLink>
                {[...uniqueCategories].map(category => (
                    <NavLink key={category} to={`/category/${category}`}><span>{category}</span> </NavLink>
                ))}
                <NavLink to ="/cartWidget"><CartWidget></CartWidget></NavLink>
            </nav>
        </navBar>
    </div>
    )
};