import React, { useEffect, useState } from 'react'
import { BiChevronLeft, BiChevronRight } from 'react-icons/bi'
import styled from 'styled-components'
import { motion } from 'framer-motion'



const Leftcolumn = styled.div`
width: 40%;
height: 100%;
display: flex;
justify-content: center;
overflow: hidden;
background: #f8f8f8;
position: relative;
img{
  min-width: 100%;
  min-height: 100%;
  object-fit: cover;
}

@media screen and (max-width : 768px){
    display: block;
    width: 100%;
    height: 100%;
    img{
        max-width: 100%;
        min-height:100%;
        object-fit:cover;

    }
}
`
const LeftChevron = styled(BiChevronLeft)`
position: absolute;
top: 50%;
left: 0;
transform: translateY(-50%);
cursor:pointer;
z-index: 50;
`
const RightChevron = styled(BiChevronRight)`
position: absolute;
top: 50%;
right: 0;
transform: translateY(-50%);
cursor: pointer;
z-index: 50;
`

const AsideCarouselCol = styled.div`
width: auto;
height: auto;
display: flex;
justify-content: start;
align-items: center;
flex-direction: column;
gap: 4px;
@media screen and (max-width : 768px){
  flex-direction  : row;
  justify-content: center;
  padding-top: 2rem;
}
`

const CarouselCol = styled.div`
width: 8rem;
height: 8rem;
cursor: pointer;
transition: all 0.3s ease-in-out;
&:hover{
    transform: scale(1.08);
    transition: all 0.3s ease-in-out;
}
img{
    min-width: 100%;
    max-height: 100%;
    object-fit: cover;
}
@media screen and (max-width : 768px){
    width:4rem;
    img{
    max-width: 100%;
    min-height: 100%;
    object-fit: cover;
}
}
`



const ProductPageCarousel = ({product,id}) => {
    const {title} = product
    
    const Images = [
      {img : `/product${id}/product${id} (1).jpg`},
      {img : `/product${id}/product${id} (2).jpg`},
      {img : `/product${id}/product${id} (3).jpg`},
      {img : `/product${id}/product${id} (4).jpg`},
 
    ]    


    const [index,setIndex] = useState(0)


   const Next = () => {
   const curr = index === Images.length - 1 
    setIndex(curr ? 0 : index + 1)
   }
 
   const Prev = () => {
   const curr = index === 0
   setIndex(curr ? Images.length - 1 : index - 1)

   }

   const gotoIndex = (index) => {
   setIndex(index)

   }

  return (
    <>
    <Leftcolumn>
        <RightChevron onClick={Next} size={50} />
        <LeftChevron onClick={Prev} size={50} />
     <motion.img

         variants={{
            initial : { x:-500 , opacity  : 0.5 },  
            }}
            animate={{ x: 0 , opacity : 1  }}
            transition={{
                duration : 0.5 ,
                type : "spring" ,
                bounce : 0.3 
            }}
            initial='initial'
    
            src={Images[index].img} 
            key={Images[index].img}

        
    />
          
     

    </Leftcolumn>

    <AsideCarouselCol>
      {Images.map((item,index)=>{
          return  (
              <CarouselCol key={index}>
                  <img src={item.img} onClick={()=>gotoIndex(index)} alt="" />
              </CarouselCol>
        )
    })}
    </AsideCarouselCol>
      
    </>

    )
}

export default ProductPageCarousel