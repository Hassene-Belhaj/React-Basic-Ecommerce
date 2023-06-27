import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { AnimatePresence, motion } from 'framer-motion'


const Container = styled.div`
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
img{
    min-width: 100%;
    object-fit: cover;
    border-radius: 12px;
}
`
const ProductsItems = styled.div`
position: absolute;
display :${({hovering})=>hovering ? 'flex' : 'none'};
flex-direction: column;
inset: 0;
width:100%;
height: 100%;
background: rgba(0,0,0,0.9);
border-radius: 12px;
z-index: 0;
color: #fff;
transition: all 0.4s ease-in-out;
`

const ButtonDiv = styled(motion.div)`
position: absolute;
inset: 0;
width: 100%;
height: 100%;
button{
    padding: 0.5rem 1rem;
    margin-left: 1rem;
    margin-top: 5rem;
    border-radius: 5px;
    border: none;
}

`



const Product = ({product}) => {
    const {id,title,image,description , price} = product
    const [hovering , setHovering] = useState(false)

    const mouseEnter = () => {
        setHovering(true)
    }
    const mouseLeaving = () => {
        setHovering(false)
    }
 

 

  return (
               <AnimatePresence>
        <Container>
            <ProductDiv onMouseEnter={mouseEnter} onMouseLeave={mouseLeaving} >
                <img src={image} alt="" />
                <ProductsItems hovering={hovering}>
                    <h3>{title}</h3>
                    <ButtonDiv>
                         <button>${price}</button>
                         <button >add to cart</button>
                    </ButtonDiv>
                   
                </ProductsItems>
            </ProductDiv>
                   
        </Container>
                </AnimatePresence>

  )
}

export default Product