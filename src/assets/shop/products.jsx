import  React, { useContext } from "react"
// import { CartWidgetProvider } from '../../components/CartWidget'

export const Product = (props) => {
    const {id, productName, price, productImage} = props.data;
    // const { addToCart } = useContext(CartWidgetProvider)

    return <div className="card">
        <img src={productImage}></img>
        <div className="card__text">
            <p><b>{productName}</b></p>
            <p>${price}</p>
        </div>
        <button className="card__button">Agregar</button>
    </div>
}