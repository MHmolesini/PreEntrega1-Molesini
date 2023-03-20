import { useState } from 'react'
// Aca importo la lista de productos
import { Products } from './components/ItemListContainer/ItemListContainer' 
// import { ItemDetailContainer } from './components/ItemDetailContainer/index'
import { Navbar } from './components/Navbar/index'
import { Footer } from './components/Footer/index'
// import { CartWidgetProvider } from './components/CartWidget'
import { Filters } from './components/Filters/index'

import './App.css'
import css from './components/Navbar/navbar.module.css'
// import cssProducts from './components/ItemListContainer/products.module.css'


import LogoZahria from './assets/images/logos/1.webp'
import { Route, Routes } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { Slide } from './components/Slide'
import { ItemDetailContainer } from './components/ItemDetailContainer'
import { Mantenimiento } from './components/mantenimiento'


function App() {
  // const [count, setCount] = useState(0)
  const [products] = useState([]);

  return (
    <div className="App">


      {/* Aca empieza la aplicacion */}
      <header className={css.header}>
        <div className={css.header__logo}><Link to="/"><img src={LogoZahria} alt='Logo de Zahria'/></Link></div>
        <Navbar></Navbar>
      </header>
      <Routes>
        <Route path='/' element={<Slide></Slide>}></Route>
        <Route 
          path='/store' 
          element={
            <main className={css.mainStore}>
              <h1>Productos destacados</h1>
              <div className={css.mainStore__sections}>
                {/* <Filters></Filters> */}
                <Products></Products>
              </div>
            </main>}>
        </Route>
        <Route 
          path='/store/:id'
          element={<ItemDetailContainer products={products}></ItemDetailContainer>}
        >
        </Route>
        {/* <Route
          path='/store/:id'
          element={
            
            <ItemDetailContainer></ItemDetailContainer>
          }
          >

        </Route> */}
        <Route path='/contact' element={<Mantenimiento></Mantenimiento>}></Route>
        <Route path='/about' element={<Mantenimiento></Mantenimiento>}></Route>
        <Route path='/questions' element={<Mantenimiento></Mantenimiento>}></Route>
        <Route path='/cart' element={<Mantenimiento></Mantenimiento>}></Route>
        <Route path='*' element={<h3>404 Not Found</h3>}></Route>
      </Routes>
      


      <footer>
          <Footer></Footer>
      </footer>
      
    </div>
  )
}

export default App
