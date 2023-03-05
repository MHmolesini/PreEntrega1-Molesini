import React from "react"
import css from "./navbar.module.css"
// import { shop } from ".../"

export const Navbar = () => {
    return <div className={css.header__navbar}>
        <ul className={css.header__navbar__menu}>
            <li><a className={css.active}>Tienda</a></li>
            <li><a href="./contacto.html">Contactanos</a></li>
            <li><a>Sobre nosotros</a></li>
            <li><a>Preguntas frecuentes</a></li>
            {/* <li><a><img src={shop}/></a></li> */}
        </ul>

    </div>
}

