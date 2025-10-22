import { CartWidget } from "./CartWidget";
import { NavLink } from "react-router-dom";
import data from "../../public/elementos.json"
import { useEffect, useState } from "react";

const categories = data.map (item => item.category);
const uniqueCategories = new Set (categories);

export const NavBar = () => {
    const [elementos, setElementos] = useState([]);
    useEffect(() => {
        fetch("../public/elementos.json")
        .then((response) => response.json())
        .then((data) => {
            setElementos(data);
        });
    }, []);
    return(
    <div className="navBar">
        <h1>
            <img src="../img/logo-gray.jpg" alt="" className="logo"/>
            <p>Adicto Tattoo</p>
            </h1>
            <nav className="listaNav">
                <NavLink to="/">
                    <span>Inicio</span>
                </NavLink>
                {[...uniqueCategories].map(category => (
                    <NavLink key={category} to={`/category/${category}`}><span>{category}</span> </NavLink>
                ))}
                <NavLink to ="/cartWidget"><CartWidget /></NavLink>
            </nav>
    </div>
    )
};