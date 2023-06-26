import React from 'react'
import styled from 'styled-components'
import { useContextData } from '../Context/ContextData'
import Product from './Product'

const MainDiv = styled.div`
width: 100%;
height: calc(100vh - 60px);
background: #fff;
text-align: center;
margin: auto;
h3{
  padding-top: 2rem;
}
`
const Container = styled.div`
width: 100%;
height: 100%;
padding-top: 2rem;
margin: 4rem auto;
display: flex;
justify-content: center;
align-items: center;
`
const GridDiv= styled.div`
width: 80%;
height: 100%;
display: grid;
grid-template-columns: repeat(auto-fill, minmax(300px,1fr));
gap: 2rem;
`






const Main = () => {
 const [data] = useContextData()
 console.log(data);


  return (
    <MainDiv>
        <h3>Products</h3>
      <Container>
        <GridDiv>
        {data.map((product,index)=>{
          return (
              <Product key={index} product={product} />
              )
            })}
            </GridDiv>

      </Container>
      
    </MainDiv>
  )
}

export default Main