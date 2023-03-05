import React from "react"
// import { shop } from ".../"

export const Navbar = () => {
    return <div className="header__navbar">
        <ul className="header__navbar__menu">
            <li><a className="active">Tienda</a></li>
            <li><a href="./contacto.html">Contactanos</a></li>
            <li><a>Sobre nosotros</a></li>
            <li><a>Preguntas frecuentes</a></li>
            {/* <li><a><img src={shop}/></a></li> */}
        </ul>

    </div>
}

