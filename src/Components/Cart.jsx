import React from 'react'
import styled from 'styled-components'
import { AiOutlineClose} from 'react-icons/ai'
import { BiChevronUp,BiChevronDown} from 'react-icons/bi'


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
display: flex;
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
const RightColumn = styled.div`
width: 60%;
height: 100%;
h4{
    padding:8px;
}
`
const Top = styled.div`
width:90% ;
height : auto;
display: flex;
justify-content: space-between;
align-items: center;
margin: auto;
`
const Middle = styled.div`
width: 90%;
display: flex;
align-items: center;
margin-left: 12px;
gap:1rem;
button{
    padding: 8px;
    font-size: 0.7rem;
    font-weight:700 ;
    border: none;
    border-radius:1px ;
    cursor: pointer;
    transition: all 0.3s ease-in-out;

}
button:hover{
    background: #000;
    color: #fff;
    transition: all 0.3s ease-in-out;
}
`
const Buttons = styled.div`
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
width: 1rem;
`
const Price = styled.div`
width: 85%;
height: 2rem;
display: flex;
background: #f3f5f9;
justify-content: space-between;
align-items: center;
`

const Cart = () => {
  return (
    <Container>
       <CartDiv>
        <h3>Cart</h3>
        <CloseIcon size={25} />
    <ProductCart>
        <LeftColumn> <img src='product9.jpg' alt="" /> </LeftColumn>
        <RightColumn>
            <Top>
                <h4>product</h4>
                <AiOutlineClose />
            </Top>
            <Middle> 
                    <button style={{background:'#f3f5f9',color:'#000'}}>1</button> 
                <Buttons>
                    <button><BiChevronUp size={15}/></button>
                    <button><BiChevronDown size={15}/></button>
                </Buttons>

                <Price>
                   <span><h5>$10</h5></span>
                   <span><h5>$10</h5></span>
                </Price>
            </Middle>
            </RightColumn>
    </ProductCart>
   

      </CartDiv>
    </Container>
  )
}

export default Cart