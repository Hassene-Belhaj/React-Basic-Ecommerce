import React from 'react'
import styled from 'styled-components'
import { AiOutlineClose} from 'react-icons/ai'
import { BsTrash3 } from 'react-icons/bs'
import { useContextCart } from '../Context/ContextCart'
import CartProduct from './CartProduct'
import { motion } from 'framer-motion'


const Container = styled.div`
width: 30%;
height: 82%;
position:fixed;
right: ${({toggle})=>toggle ?   0 : '-100%'};
top: 0;
background: #fff;
z-index: 1000;
color: #fff;
box-shadow: 0 0 8px 0 rgba(0, 0, 0, 0.2) ;
color: #000;
transition: all 0.5s ease-in-out;
overflow: scroll;
h3{
    font-size :14px ;
    padding: 1rem;
}
@media screen and (max-width : 768px){
    width: 100%;
}
`
const CloseIcon = styled(AiOutlineClose)`
fill :#000 ;
position: absolute;
top: 1rem;
right: 1rem;
cursor: pointer;
`

const CartDiv = styled.div`
width: 100%;
height: 60px;
background: #f3f5f9;
`
const BottomCart = styled.div`
padding: 1rem;
position: fixed;
bottom: 0;
width: 30%;
height: 21%;
background:#d5d5d5;
@media screen and (max-width : 768px) {
width    :100% ;
}
`
const BottomCartFlex = styled.div`
width: 100%;
height: auto;
display: flex;
justify-content: space-between;
align-items: baseline;
`


const TrashIcon = styled(BsTrash3)`
fill:red;
z-index: 1;
`

const Button = styled.div`
cursor : pointer;
`
const Checkout = styled.div`
padding-top: 1rem;
width: 100%;
height: auto;
display: flex;
justify-content: center;
button{
    width : 95% ;
    padding: 8px;
    border-radius: 10px;
    border: none ;
    background: #000;
    color: #fff;
    font-size: 1rem;
    text-transform: capitalize; 
    font-weight: 600;
    transition: all 0.2s ease-in-out;
    cursor: pointer;
&:hover{
    transition: all 0.2s ease-in-out;
    background:rgba(0,0,0,0.9);
}

}

`


const Cart = () => {
    const {cart,clearCart,total,toggle,handleClick}= useContextCart()


  return (
    <Container toggle={toggle} >
        <CartDiv>
        <h3>Cart</h3>
        <CloseIcon size={25} onClick={handleClick} />
        {cart.map((product,index)=>{
            return (       
                <CartProduct key={index}  product={product}/>
        )
        })}
        </CartDiv>
         
         <BottomCart>
         <BottomCartFlex>
             <h3>Total : {total} $</h3>
             <Button onClick={clearCart}>
                 <TrashIcon  size={35} />
             </Button>
         </BottomCartFlex>
         <Checkout>
            <button>Checkout Order</button>
         </Checkout>

         </BottomCart>
            </Container>
  )
}

export default Cart