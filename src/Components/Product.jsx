import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import {AnimatePresence, motion } from 'framer-motion'
import { useContextCart } from '../Context/ContextCart'
import StarsandLikes from './StarsandLikes'
import { Link} from 'react-router-dom'


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
h3{
    font-size:1rem ;
}
`

const ButtonDiv = styled.div`
width: 100%;
height: 100%;
display: flex;
justify-content: center;
align-items: center;
button{
    padding: 6px 1rem;
    margin-left: 1rem;
    border-radius: 5px;
    border: none;
    cursor: pointer; 
    font-size  :1rem ;
    font-weight :500 ;
    transition: all 0.3s ease-in-out;
  
}  

button:first-child{
font-size    :1rem ;
font-weight: 700;
background: #000;
color: #fff;
}
button:last-child{
background    :#fff ;
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
const ProductDetails = styled.span`
margin: 2rem auto;
width: 90%;
height: auto;
text-align: center;
h3{ 
    display: inline-block;
    border-bottom: solid 1px #fff;
    transition: all 0.2s ease-in-out;
}
`


const Linkto = styled(Link)`
text-transform: none;
color: #fff;
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
                   {title}

                        <StarsandLikes product={product}  /> 

                    </motion.h3>
                    
                    <ProductDetails>
                       <Linkto to={`product/${id}`}>
                             <h3>View Details</h3>
                       </Linkto>
                       
                   </ProductDetails> 

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