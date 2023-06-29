import React from 'react'
import styled from 'styled-components'
import { FaStar } from 'react-icons/fa'
import { AiFillLike } from 'react-icons/ai'

const Container = styled.div`
width: 100%;
height: 100%;
margin:2rem 0;
display: flex;
justify-content: center;
align-items: center;
`

const Avg = styled.div`
display: flex;
width: 100%;
`

const Stars = styled.div`
display: flex;
justify-content: center;
align-items: center;
width: 50%;
margin: auto;
`
const Likes = styled.div`
display: flex;
justify-content: center;
align-items: center;
width : 50% ;
margin: auto;
`

const StarsandLikes = ({product}) => {

 const {avgrating,likes} = product
  return (
  <Container>
        <Stars>
          {Array.from({length : avgrating},(_,i)=>{
            return <span key={i}><FaStar color='yellow'/></span>
          }) }
          {Array.from({length : 5 - avgrating},(_,i)=>{
            return <span key={i}><FaStar color='gray'/></span>
          })}
          </Stars>
          <Likes>
         <span style={{marginRight:'4px'}}><AiFillLike color='#fff' /></span> <p style={{color:'#fff'}}>{likes}</p>  
          </Likes>
  </Container>

    )
}

export default StarsandLikes