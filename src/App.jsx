import React from 'react'
import Navbar from './Components/Navbar'
import Main from './Components/Main'
import { Global } from './Components/GlobalStyle'
import Cart from './Components/Cart'




const App = () => {

  return (
  <>
    <Global />
    <Navbar />
    <Main />
    <Cart />
  </>
    )
}

export default App