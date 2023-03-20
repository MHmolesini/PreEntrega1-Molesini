import React, { useState } from "react";
import { PRODUCTS } from '../../assets/ProductList/products'
import css from './filters.module.css'

export const Filters = () => {
    const [filters, setFilters] = useState(PRODUCTS);

    return (
        <div className={css.main__filter}>
            {filters.map(filter => {
                return (
                    <div>
                        <h1>{filter.id}</h1>
                    </div>
                )
            })}
        </div>
    )
}