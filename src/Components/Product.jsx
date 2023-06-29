import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import {AnimatePresence, motion } from 'framer-motion'
import { useContextCart } from '../Context/ContextCart'
import StarsandLikes from './StarsandLikes'


const Container = styled(motion.div)`
width: 300px;
height: 400px;
margin: auto;
`
const ProductDiv = styled.div`
width: 100%;
height: 100%;
border-radius: 12px;
display: flex;
position: relative;
transition: all 1s ease-in-out;
overflow: hidden;
img{
    min-width: 100%;
    object-fit: cover;
    border-radius: 12px;
}
`
const ProductsItems = styled(motion.div)`
position: absolute;
display: flex;
flex-direction: column;
inset: 0;
width:100%;
height: 100%;
background: rgba(0,0,0,0.9);
border-radius: 12px;
z-index: 0;
color: #fff;
`

const ButtonDiv = styled.div`
width: 100%;
height: 100%;
display: flex;
justify-content: center;
align-items: center;
button{
    padding: 0.5rem 1rem;
    margin-left: 1rem;
    border-radius: 5px;
    border: none;
    cursor: pointer; 
    font-size  :1rem ;
    font-weight :500 ;
    transition: all 0.3s ease-in-out;
  
}  

button:first-child{
}
button:last-child{
background    :#4ade80 ;
color: #000;
font-size: 1rem;
font-weight: 500;
transition: all 0.2s ease-in;

&:hover{
    transform: scale(1.1);
    transition: all 0.2s ease-in;
}
}
`



const Product = ({product}) => {
     const {cart,addTocart,deleteProduct} = useContextCart()
    const {id,title,image,description , price} = product
    const [hovering , setHovering] = useState(false)

    const mouseEnter = () => {
        setHovering(true)
    }
    const mouseLeaving = () => {
        setHovering(false)
    }
 
 
    

  return (

      <Container>
            <ProductDiv onMouseEnter={mouseEnter} onMouseLeave={mouseLeaving}>
                <img src={image} alt="" />

                <ProductsItems style={{width: hovering ? "100%" : 0 }} >
                    {hovering ?   
                    <>
                    <motion.h3 style={{textTransform:'capitalize'}}
                          initial={{opacity : 0 , scale : 0}}
                          animate={{opacity : 1 , scale : 1}}
                          exit={{opacity : 0}} 
                          transition={{
                              duration : 0.3 ,
                              delay: 0.1
                            }} 
                            >
                    <h5>{title}</h5>

                        <StarsandLikes product={product}  /> 

                    </motion.h3>
                    <ButtonDiv>
                       <motion.div
                        initial={{opacity : 0 , y : 200}}
                        animate={{opacity : 1 , y : 0}}
                        transition={{
                            duration : 0.3 ,
                            delay: 0.2
                        }} 
                        >
                         <button>${price}</button>
                         <button onClick={()=>addTocart(product,id)}>Add To Cart</button>
                        </motion.div> 
                    </ButtonDiv>
                    </>
                    :
                    null }                   
                </ProductsItems>
            </ProductDiv>
                   
        </Container>
           
  )
}

export default Product