import React from 'react'
import styled from 'styled-components'
import { FaStar } from 'react-icons/fa'
import { AiFillLike } from 'react-icons/ai'

const Container = styled.div`
width:80%;
height: 100%;
display: flex;
height: auto;
margin-top:3rem;
margin-left: auto;
margin-right: auto;
`

const Avg = styled.div`
display: inline;
width: 100%;
`

const Stars = styled.div`
display: flex;
justify-content: center;
align-items: baseline;
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
            return <span key={i}><FaStar color='orange'/></span>
          }) }
          {Array.from({length : 5 - avgrating},(_,i)=>{
            return <span key={i}><FaStar color='gray'/></span>
          })}
          </Stars>

          <Likes>
           <span style={{color:'orange'}}>
            <AiFillLike/>
           {likes}
            </span>
 
          </Likes>


  </Container>

    )
}

export default StarsandLikes