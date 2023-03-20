// import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { PRODUCTS } from "../../assets/ProductList/products";

export const ItemDetailContainer = ({ products }) => {
    const { id } = useParams(PRODUCTS);
    const product = products.find((product) => product.id == id)
    return (
        <div>
            <h1>Detalle del producto</h1>
            {/* <h1>{products.id}</h1>
            <h1>{products.price}</h1> */}
        </div>
    )
}