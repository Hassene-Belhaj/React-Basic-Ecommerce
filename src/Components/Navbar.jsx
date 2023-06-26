import React from 'react'
import styled from 'styled-components'
import { BsBag } from 'react-icons/bs'


const NavBar = styled.div`
width: 100%;
height: 60px;
background: #f3f5f9;
box-shadow: 0 0 8px 0 rgba(0, 0, 0, 0.2)
`


const Container = styled.div`
width: 100%;
height: 100%;
display: flex;
align-items: center;
h2{
  margin-left: 2rem;
}
position: relative;
`

const BagDiv = styled.div`
position: absolute;
height: fit-content;
width: fit-content;
right: 2rem;
top : 1rem ;
display: flex;
justify-content: center;
align-items: center;
`
const BagIcon = styled.span`
position: absolute;
bottom: -25%;
right: -25%;
width: 20px;
height:20px;
background: red;
z-index: 100;
border-radius: 50%;
display: flex;
justify-content: center;
align-items: center;
h3{
 font-size: 0.8rem;
 color: #fff;
}
`


const Navbar = () => {
  return (
    <NavBar>
      <Container>
        <h2>React Shop </h2>
       <BagDiv>
         <BsBag size={30} />
          <BagIcon>
              <h3>1</h3>          
          </BagIcon>
        </BagDiv> 
      </Container>
    </NavBar>
  )
}

export default Navbar