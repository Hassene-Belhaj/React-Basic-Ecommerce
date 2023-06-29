import React, { useState } from 'react'
import Navbar from './Components/Navbar'
import Main from './Components/Main'
import { Global } from './Components/GlobalStyle'
import Cart from './Components/Cart'
import Modal from './Components/Modal'




const App = () => {
  return (
  <>
    <Global />
    <Navbar />
    <Main />
    <Cart />
    <Modal />
  </>
    )
}

export default App