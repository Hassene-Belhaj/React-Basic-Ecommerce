import React from 'react'
import { useParams } from 'react-router'
import styled from 'styled-components'
import { useContextData } from '../../Context/ContextData'
import { useContextCart } from '../../Context/ContextCart'
import { motion ,AnimatePresence } from 'framer-motion'

const Container = styled.div`
padding-top: 60px;
width: 100%;
height: 100vh;
background :#f3f5f9 ;
color: #000;
margin: auto;
`
const ProductPageDiv = styled(motion.div)`
width: 90%;
height: 95%;
display: flex;
background: #fff;
margin:1rem  auto;
`
const Leftcolumn = styled.div`
width: 50%;
height: 100%;
display: flex;
background:#000;
img{
  min-width: 100%;
  object-fit: cover;
}
`
const Rightcolumn = styled.div`
width: 40%;
height: 100%;
display: flex;
flex-direction: column;
align-items: center;
margin: auto;
h2{
  padding-top: 2rem;
  text-transform: capitalize;
}
p{
  padding-top: 10rem;
  font-size: 1.2rem;
}

`
const Button = styled.div`
padding-top: 5rem;
width: 100%;
margin: 2rem auto;
display: flex;
justify-content: center;
align-items: center;
button{
    padding: 1rem 3rem;
    border-radius: 0.5rem;
    cursor: pointer;
    font-size: 1.2rem;
    font-weight: 500;
    transition: all 0.2s ease-in-out;
    background: #000;
    border: none;
    color: #fff;
    &:hover{
    }
}
`



const ProductPage = () => {

 const [data] =  useContextData()
 const {id} = useParams()
 const {addTocart}=useContextCart()

const product = data.find((item)=>item.id === parseInt(id))

const {title,image,description,price} = product


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
         <Leftcolumn>
          <img src={image} alt="" />
         </Leftcolumn>

         <Rightcolumn>
           <h2>{title}</h2>
           <p>{description}</p>
           <Button>
            <button onClick={()=>addTocart(product,product.id)}>
              Add To Cart
            </button>
         </Button>
         </Rightcolumn>
       </ProductPageDiv>
      </AnimatePresence>
    </Container>
    )
}

export default ProductPage