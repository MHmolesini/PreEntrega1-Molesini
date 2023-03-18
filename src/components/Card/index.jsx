const Card = ({ products }) => {
    return (
        <div>
            <img src={products.productImage}></img>
            <p>{products.productName}</p>
        </div>
    )
}