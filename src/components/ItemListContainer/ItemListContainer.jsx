import  React from "react"
// Importo los estilos
import css from "./products.module.css"

export const Product = (props) => {
    const {id, productName, price, productImage} = props.data;

    return <div className={css.card}>
        <img src={productImage}></img>
        <div className={css.card__text}>
            <p><b>{productName}</b></p>
            <p>${price}</p>
        </div>
        <button className={css.card__button}>
            <p>Agregar</p>
        </button>
    </div>
}