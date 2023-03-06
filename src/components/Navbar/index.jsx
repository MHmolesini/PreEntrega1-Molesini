import React from "react"
// importo los estilos
import css from "./navbar.module.css"
// importo el componente de la cardWidget
import {CartWidget} from '../CartWidget/index'

export const Navbar = () => {
    return <div className={css.header__navbar}>
        <ul className={css.header__navbar__menu}>
            <li><a className={css.active}>Tienda</a></li>
            <li><a>Contactanos</a></li>
            <li><a>Sobre nosotros</a></li>
            <li><a>Preguntas frecuentes</a></li>
            <li><a className="header__navbar__menu__item"><CartWidget />1</a></li>
        </ul>

    </div>
}

