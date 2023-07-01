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
`
const Reviews = styled.div`

`


const StarsandLikes = ({product}) => {

 const {avgrating,likes} = product
  return (
  <Container>



  </Container>

    )
}

export default StarsandLikes