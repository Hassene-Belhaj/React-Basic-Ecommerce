import React from 'react'
import styled from 'styled-components'
import { FaStar } from 'react-icons/fa'
import { AiFillLike } from 'react-icons/ai'

const Container = styled.div`
width:auto;
height: auto;
display: flex;
justify-content: center;
align-items: center;
`



const Stars = styled.div`
display: flex;
margin: 2rem 0;
span{
 font-size: 12px;
}
`
const Reviews = styled.div`

`


const StarsandLikes = ({product}) => {

 const {avgrating,likes} = product
  return (
  <Container>

        <Stars>
          {Array.from({length : avgrating},(_,i)=>{
            return <span key={i}><FaStar color='orange' size={15}/></span>
          }) }
          {Array.from({length : 5 - avgrating},(_,i)=>{
            return <span key={i}><FaStar color='gray' size={15}/></span>
          })}
            <span> ( {likes} Reviews ) </span>
          </Stars>

          {/* // <Reviews>
          // </Reviews> */}


  </Container>

    )
}

export default StarsandLikes