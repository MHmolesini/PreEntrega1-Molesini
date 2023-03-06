import { useState } from 'react'
// Aca importo la lista de productos
import { PRODUCTS } from './assets/shop/products'
import { Product } from './components/ItemListContainer/ItemListContainer' 
import { Navbar } from './components/Navbar/index'
// import { CartWidgetProvider } from './components/CartWidget'

import './App.css'
import css from './components/Navbar/navbar.module.css'
import cssProducts from './components/ItemListContainer/products.module.css'


import LogoZahria from './assets/images/logos/1.webp'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <div className="App">
      {/* <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div> */}
      {/* <h1>Vite + React</h1> */}
      {/* <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div> */}
      {/* <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p> */}


      {/* Aca empieza la aplicacion */}
      <header className={css.header}>
        <div className={css.header__logo}><img src={LogoZahria} alt='Logo de Zahria'/></div>
        <Navbar></Navbar>
      </header>
      
      <main>
        <h1>Productos destacados</h1>
        <div className={cssProducts.main__cards}>
          {PRODUCTS.map((product) => (
            <Product data={product}/>
          ))}
        </div>
      </main>

      <footer>

      </footer>
    </div>
  )
}

export default App
