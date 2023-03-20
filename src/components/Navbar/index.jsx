import React from "react"
// importo los estilos
import css from "./navbar.module.css"
// importo el componente de la cardWidget
import {CartWidget} from '../CartWidget/index'
import { Link } from 'react-router-dom'

export const Navbar = () => {
    return <div className={css.header__navbar}>
        <ul className={css.header__navbar__menu}>
            <li><Link to="/store"><a className={css.active}>Tienda</a></Link></li>
            <li><Link to="/contact"><a>Contactanos</a></Link></li>
            <li><Link to="/about"><a>Sobre nosotros</a></Link></li>
            <li><Link to="/questions"><a>Preguntas frecuentes</a></Link></li>
            <li><Link to="/cart"><a className="header__navbar__menu__item"><CartWidget />1</a></Link></li>
        </ul>

    </div>
}

