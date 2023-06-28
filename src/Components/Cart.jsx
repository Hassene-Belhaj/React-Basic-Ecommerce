import React from 'react'
import styled from 'styled-components'
import { AiOutlineClose} from 'react-icons/ai'
import { useContextCart } from '../Context/ContextCart'
import CartProduct from './CartProduct'


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
position: fixed;
bottom: 0;
width: 100%;
height: 21%;
background:#d5d5d5;
`

const Cart = () => {
    const {toggle , handleClick}= useContextCart()
    const {cart,addTocart,deleteProduct} = useContextCart()


  return (
    <Container toggle={toggle}>
         <BottomCart></BottomCart>
        <CartDiv>
        <h3>Cart</h3>
        <CloseIcon size={25} onClick={handleClick} />
        {cart.map((product,index)=>{
            return (       
                <CartProduct key={index}  product={product}/>

        )
        })}
        </CartDiv>
         
            </Container>
  )
}

export default Cart