import React from 'react'
import Navbar from './Components/Navbar'
import Main from './Components/Main'
import { Global } from './Components/GlobalStyle'




const App = () => {

  return (
  <>
    <Global />
    <Navbar />
    <Main />
  </>
    )
}

export default App