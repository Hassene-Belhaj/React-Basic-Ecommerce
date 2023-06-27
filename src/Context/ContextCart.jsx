import React, { Children, createContext, useContext, useState } from 'react'


const useContextCartG = createContext()

const ContextCart = ({children}) => {
  const [cart,setCart] = useState([1])

  return (
  <useContextCartG.Provider value={[cart]}>
    {children}
  </useContextCartG.Provider>
    )
}

export default ContextCart

export const useContextCart = () =>useContext(useContextCartG)