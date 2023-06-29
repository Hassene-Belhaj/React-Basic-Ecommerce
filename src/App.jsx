import React, { useState } from 'react'
import Navbar from './Components/Navbar'
import Main from './Components/Main'
import { Global } from './Components/GlobalStyle'
import Cart from './Components/Cart'
import Modal from './Components/Modal'
import { BrowserRouter as Router ,Routes,Route } from 'react-router-dom'
import ProductPage from './Components/Pages/ProductPage'



const App = () => {
  return (
  <Router>
    <Global />
    <Navbar />
    <Routes>
       <Route path={'/'} element={<Main />} />
       <Route path={'/product/:id'} element={<ProductPage />} />
    </Routes>
    <Cart />
    <Modal />
  </Router>
    )
}

export default App