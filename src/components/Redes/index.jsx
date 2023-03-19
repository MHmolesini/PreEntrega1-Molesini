import React from 'react'
import css from './redes.module.css'

export const Redes = () => {
  return ( 
    <div className={css.footer__redes}>
        <div className={css.footer__redes__item}><i class="bi bi-instagram"></i></div>
        <div className={css.footer__redes__item}><i class="bi bi-whatsapp"></i></div>
        <div className={css.footer__redes__item}><i class="bi bi-envelope"></i></div>
  </div>
  )
}

