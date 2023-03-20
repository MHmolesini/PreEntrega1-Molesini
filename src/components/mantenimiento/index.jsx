import React from 'react'
import css from './mantenimiento.module.css'

export const Mantenimiento = () => {
  return ( 
    <div className={css.mantenimiento}>
        <h1>En mantenimiento</h1>
        <div className={css.mantenimiento__item}><i class="bi bi-building-fill-gear"></i></div>
  </div>
  )
}
