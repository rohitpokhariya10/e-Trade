  import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './Pages/Home'
import About from './Pages/About'
import Products from './Pages/Products'
import ProductDetails from './Pages/ProductDetails'
import Navbar from './Components.jsx/Navbar'
import Footer from './Pages/Footer'
  
  const App = () => {
    return (
      <div>
         <Navbar/>
         
         <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/products' element={<Products/>}/>
          <Route path='/contact'  element={<Footer/>} />

          {/* Dynamic Route */}
          <Route path='/products/:productId' element={<ProductDetails/>}/>

         </Routes>
      </div>
    )
  }
  
  export default App