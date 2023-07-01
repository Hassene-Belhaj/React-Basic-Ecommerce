import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { useContextData } from '../Context/ContextData'
import Product from './Product'
import { AnimatePresence , motion } from 'framer-motion'

const MainDiv = styled.div`
width: 100%;
height: 100%;
background: #fff;
text-align: center;
margin: auto;
color: #000;
padding-top: 60px;
overflow: hidden;
h3{
  padding-top: 2rem;
}
button{
  margin-top: 2rem;
  border: none;
  padding: 10px;
  text-transform: capitalize;
  font-size: 0.8rem;
  font-weight: 500;
  cursor: pointer;
  background: #f3f5f9;
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
grid-template-columns: repeat(auto-fill, minmax(200px,1fr));
gap: 8rem;
`


const Main = () => {
  const [data] = useContextData()
  const [newData , setNewData] = useState(data)

 const Categories = [
  {id : 0 , category : 'All'},
  {id : 1 , category : 'category one'},
  {id : 2 , category : 'category Two'},
 ]


 const filterDataCategory = (id,category) => {
   const dataCategory = data.filter((item)=>item.category === category)
  if (id === 0)
  setNewData(data)
  else {
  setNewData(dataCategory) 
  }
 }



  return (
    <MainDiv>
      <h3>Products</h3>
      {Categories.map((item,index)=>{
        return <button key={index} onClick={()=>filterDataCategory(item.id,item.category)}  style={{marginLeft:'1rem'}}>{item.category}</button>
      })}
      <Container>   
        <GridDiv>
        {newData.map((product,index)=>{       
          return (
              <AnimatePresence key={index}> 
                 <motion.div 
                 key={product.id}
                 layout
                 initial={{opacity : 0}}
                 animate={{opacity : 1}}
                 exit={{opacity : 0}}
                 transition={{duration : 0.3}}
                >
                             <Product key={index} product={product} />
                 </motion.div>
              </AnimatePresence>  
    
     
            )
          })}
            </GridDiv>
     

      </Container>


    </MainDiv>
  )
}

export default Main