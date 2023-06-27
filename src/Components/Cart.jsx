import React from 'react'
import styled from 'styled-components'
import { AiOutlineClose} from 'react-icons/ai'


const Container = styled.div`
width: 30%;
height: 100%;
position:fixed;
right: 0;
top: 0;
background: #fff;
z-index: 1000;
color: #fff;
box-shadow: 0 0 8px 0 rgba(0, 0, 0, 0.2) ;
color: #000;
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
const ProductCart = styled.div`
width: 100%;
height: 200px;
background:#f3f5f9 ;
margin: 1rem auto;
`
const LeftColumn = styled.div`
width: 40%;
height: 100%;
display: flex;
img{
    min-width:100%;
    object-fit: cover;
}
`

const Cart = () => {
  return (
    <Container>
       <CartDiv>
        <h3>Cart</h3>
        <CloseIcon size={25} />
    <ProductCart>
        <LeftColumn> <img src='product9.jpg' alt="" /> </LeftColumn>

    </ProductCart>
   

      </CartDiv>
    </Container>
  )
}

export default Cart