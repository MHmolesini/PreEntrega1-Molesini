import slide1 from '../../assets/images/slides/1.jpg'
import css from './slide.module.css'

import { Link } from 'react-router-dom'

export const Slide = () => {
    return <div className={css.slide}>
        <div className={css.slide__components}>
            <h1>¡Summer Sale!</h1>
            <p>¡Hasta 50% off en prendas seleccionadas!</p>
            <Link to='/store'><button>VER TIENDA</button></Link>
        </div>
        <img src={slide1}></img>
    </div>
} 
