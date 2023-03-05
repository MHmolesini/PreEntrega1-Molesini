import { useState } from 'react'
import reactLogo from './assets/react.svg'
// Aca importo la lista de productos
import { PRODUCTS } from './products'
import { Product } from './assets/shop/products' 
import { Navbar } from './components/Navbar/index'
// import { CartWidgetProvider } from './components/CartWidget'

import './App.css'
import './components/Navbar/navbar.css'
import './assets/shop/products.css'

import LogoZahria from './assets/images/logos/1.webp'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      {/* <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p> */}


      {/* Aca empieza la aplicacion */}
      <header className='header'>
        <div className='header__logo'><img src={LogoZahria} alt='Logo de Zahria'/></div>
        <Navbar></Navbar>
      </header>
      {/* <CartWidgetProvider> */}
      <main>
        <h1>Productos destacados</h1>
        <div className='main__cards'>
          {PRODUCTS.map((product) => (
            <Product data={product}/>
          ))}
        </div>
      </main>
      {/* </CartWidgetProvider> */}

      <footer>

      </footer>
    </div>
  )
}

export default App
