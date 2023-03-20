// import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

export const ItemDetailContainer = ({ products }) => {
    const { id } = useParams();
    const product = products.find((product) => product.id == id)
    return (
        <div>
            <h1>jajajjaa</h1>
            <h1>{products.id}</h1>
            <h1>{products.price}</h1>
        </div>
    )
}