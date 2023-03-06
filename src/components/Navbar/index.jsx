import React from "react"
import css from "./navbar.module.css"

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

