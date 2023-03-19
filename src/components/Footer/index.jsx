import React from "react";
import css from './footer.module.css'
import LogoZahria from '../../assets/images/logos/1.webp'
import { Link } from "react-router-dom";
import { Redes } from "../Redes";

export const Footer = () => {
    return (
        <div className={css.footer}>
            <Link to='/'><img src={LogoZahria}></img></Link>
            <Redes></Redes>
        </div>
    )
}