import React, { createContext, useContext,useState } from 'react'
import { Products } from '../Components/Data/Data'



const useContextDataG = createContext()


const ContextData = ({children}) => {
    
    const [data,setData] = useState(Products)

  return (
    <useContextDataG.Provider value={[data,setData]}>
        {children}
    </useContextDataG.Provider>
    )
}

export default ContextData

export const useContextData = () => useContext(useContextDataG)