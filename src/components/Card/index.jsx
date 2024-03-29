import React from "react";
import { Link } from "react-router-dom";
import css from './card.module.css'

export const Card = (card) => {
    return (
        <Link to={`${card.id}`} style={{ textDecoration: 'none'}}>
            <div className={css.card}>
                <div className={css.card__img}>
                    <img src={card.productImage}></img>
                </div>
                <div className={css.card__description}>
                    <p className={css.card__description__price}>$ {card.price}</p>
                    <p>{card.productName}</p>
                    <p className={css.card__description__id}>{card.id}</p>
                    <button>Agregar</button>
                </div>
            </div>
        </Link>
    )
}