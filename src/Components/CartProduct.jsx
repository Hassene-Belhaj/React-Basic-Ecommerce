import React from 'react'
import styled from 'styled-components'
import { BiChevronUp,BiChevronDown} from 'react-icons/bi'
import { useContextCart } from '../Context/ContextCart'
import { AiOutlineClose } from 'react-icons/ai'
import { Link } from 'react-router-dom'


const ProductCart = styled.div`
width: 100%;
height: 200px;
background:#f3f5f9 ;
margin: 1rem auto;
display: flex;
border: solid 1px rgba(0,0,0,0.1);
`
const LeftColumn = styled.div`
width: 35%;
height: 100%;
overflow: hidden;
img{
    max-width:100%;
    height: 100%;
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


const CartProduct = ({product}) => {
     const {id,title,description,image,price,quantity,size} = product
    const {cart,addTocart,deleteProduct,decreaseQuantity,increaseQuantity,total} = useContextCart()

     const totalItem = quantity * price

  return (
    <ProductCart>
    <LeftColumn>
        <Link style={{textTransform:'none'}} to={`/product/${id}`}>
            <img src={image} alt="" />
        </Link>
    </LeftColumn>
    <RightColumn>
        <Top>
            <h4>{title}</h4>
            <AiOutlineClose  onClick={()=>deleteProduct(id)}/>
        </Top>
        <Middle> 
                <button style={{background:'#f3f5f9',color:'#000',fontSize:'1rem'}}>{quantity}</button> 
            <Buttons>
                <button onClick={()=>increaseQuantity(id)}><BiChevronUp size={15}/></button>
                <button onClick={()=>decreaseQuantity(id)}><BiChevronDown size={15}/></button>
            </Buttons>

            <Price>
               <h5>${price.toFixed(2)}</h5>
               <h5>${totalItem.toFixed(2)}</h5>
            </Price>
        </Middle>
            <Middle>
               <span><h5>size : {size}</h5></span>
            </Middle>
        </RightColumn>
</ProductCart>
    )
}

export default CartProduct