import  React, { useContext } from "react"

import css from "./products.module.css"
// import { CartWidgetProvider } from '../../components/CartWidget'

export const Product = (props) => {
    const {id, productName, price, productImage} = props.data;
    // const { addToCart } = useContext(CartWidgetProvider)

    return <div className={css.card}>
        <img src={productImage}></img>
        <div className={css.card__text}>
            <p><b>{productName}</b></p>
            <p>${price}</p>
        </div>
        <button className={css.card__button}>Agregar</button>
    </div>
}