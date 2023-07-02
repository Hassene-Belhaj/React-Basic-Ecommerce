import React, { useState } from 'react'
import { useParams } from 'react-router'
import styled from 'styled-components'
import { useContextData } from '../../Context/ContextData'
import { motion ,AnimatePresence } from 'framer-motion'
import StarsandLikes from '../StarsandLikes'
import ProductPageCarousel from './ProductPageCarousel'
import { useContextCart } from '../../Context/ContextCart'

const Container = styled.div`
padding-top: 80px;
padding-bottom: 2rem;
width: 100%;
height: 100vh;
background :#f3f5f9 ;
color: #000;
margin: auto;
`
const ProductPageDiv = styled(motion.div)`
width: 90%;
height: 100%;
display: flex;
background: #fff;
margin: auto;
@media screen and (max-width:768px) {
  display: block;
  width: 90%;
  height: 100%;
}
`

const Rightcolumn = styled.div`
width: 40%;
height: 100%;
display: flex;
flex-direction: column;
margin:1rem  auto;
h2{
  padding-top: 1rem;
  margin-bottom: 2rem;
  text-transform: capitalize;
  text-align: center;
}
p{
  padding-top: 2rem;
  font-size: 1rem;
}
@media screen and (max-width : 768px){
display  :block ;
width  :90% ;
height: 100%;
padding-top: 4rem;
}
`


const Review = styled.div`
display: flex;
justify-content: center;
align-items: center;
`


const ButtonDiv = styled.div`
width: 100%;
margin-top: 10rem;
display: flex;
justify-content: center;
align-items: center;
button{
    padding: 8px 64px;
    border-radius: 0.5rem;
    cursor: pointer;
    font-size: 14px;
    font-weight: 500;
    transition: all 0.2s ease-in-out;
    background: #000;
    border: none;
    color: #fff;
    &:hover{
      opacity : 0.9;
      transition: all 0.2s ease-in-out;
    }
}
`


const ProductPage = () => {



  const [data] =  useContextData()
  const {cart,setCart,addTocart,increaseQuantity} = useContextCart()
  const {id} = useParams()
  


const product = data.find((item)=>item.id === parseInt(id))

const {title,image,description,price,quantity} = product



  return (
    <Container>
      <AnimatePresence>
       <ProductPageDiv
       initial={{opacity : 0 , x : -100}}
       animate={{opacity : 1 , x :0}}
       exit={{opacity : 0}}
       transition={{
         duration : 0.5 ,
         type:'spring',
         bounce : 0.2
         
        }}
       >

           <ProductPageCarousel product={product} id={id} />



      <Rightcolumn>
           <h2>{title}</h2>

           <Review>

           <StarsandLikes product={product} />

           </Review>


           <p>{description}</p>

           <ButtonDiv>    
            <button onClick={()=>addTocart(product,product.id)}>
              Add To Cart
            </button>
         </ButtonDiv>
      </Rightcolumn>
       </ProductPageDiv>
      </AnimatePresence>
      

    </Container>
    )
}

export default ProductPage