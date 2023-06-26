import React from 'react'
import styled from 'styled-components'





const Container = styled.div`
width: 300px;
height: 400px;
margin: auto;
`

const Product = ({product}) => {
  return (
        <Container>
            {product.id}
        </Container>

  )
}

export default Product