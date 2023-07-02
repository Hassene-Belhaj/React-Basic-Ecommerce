import React, { Children, createContext, useContext, useEffect, useState } from 'react'
import { ShoeSize } from '../Components/Data/Data'


const useContextCartG = createContext()

const ContextCart = ({children}) => {
  const [cart,setCart] = useState([])
  const [toggle,setToggle]=useState(false)
  const [bagQuantity,setbagQuantity] = useState(0)
  const [total,setTotal] = useState()
  const [msg,setMsg] = useState('')

  const [size,setSize] = useState(0)


console.log(cart);
 
  const handleClick = () => setToggle(!toggle)


useEffect(()=>{
if(cart) {
const Quantity = cart.reduce((accu,curr)=>{
   return accu + curr.quantity 
},0)   
setbagQuantity(Quantity) 
}

},[cart])  

useEffect(()=>{
const sum = cart.reduce((accu,curr)=>{
    return accu + curr.price * curr.quantity
},0)   

setTotal(sum.toFixed(2))

},[cart])


const addTocart = (product,id) => {
if(size !== 0) {
  const addinitialQuantity = {...product , quantity : 1 , size : size}
  const productInCart = cart.find((item)=>item.id === id)
  if (productInCart) {
    const newCart = cart.map((item)=>{
      if (item.id === id) {
        return {...item , quantity : item.quantity + 1 ,size : size}
      } else {
        return item
      }
    })
    setCart(newCart)
  } else {
    setCart([...cart,addinitialQuantity])
  }
} else {
  console.log('choose your size');
  setMsg('choose your size');
}
setSize(0)
}


const deleteProduct = (id) => {
  const product = cart.filter((item)=>item.id !== id)
  setCart(product)
}

const decreaseQuantity = (id) => {
  const productInCart = cart.find((item)=> item.id === id) 
  if (productInCart) {
    const newCart = cart.map((item)=>{
      if(item.id === id ) {
        return {...item , quantity : item.quantity - 1}
      } else {
        return item
        }
    })
    setCart(newCart)
} if(productInCart.quantity < 2 ) {
    deleteProduct(id)
}
}

const increaseQuantity = (id) => {
const product = cart.find((item)=>item.id === id) 
addTocart(product,id)   
}

const clearCart = () =>{
handleClick()    
setCart([])
}


  return (
  <useContextCartG.Provider value={{cart,toggle,setToggle,handleClick,addTocart,deleteProduct,decreaseQuantity,increaseQuantity,clearCart,bagQuantity,total,size,setSize}}>
    {children}
  </useContextCartG.Provider>
    )
}

export default ContextCart

export const useContextCart = () =>useContext(useContextCartG)