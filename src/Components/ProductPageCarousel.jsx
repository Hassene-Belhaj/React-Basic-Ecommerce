import React, { useEffect, useState } from 'react'
import { BiChevronLeft, BiChevronRight } from 'react-icons/bi'
import styled from 'styled-components'



const Leftcolumn = styled.div`
width: 40%;
height: 100%;
display: flex;
justify-content: center;
img{
  min-width: 100%;
  min-height: 100%;
  object-fit: cover;
}
position: relative;
`
const LeftChevron = styled(BiChevronLeft)`
fill: #94a3b8;
position: absolute;
top: 50%;
left: 0;
transform: translateY(-50%);
cursor:pointer;
`
const RightChevron = styled(BiChevronRight)`
fill: #94a3b8;
position: absolute;
top: 50%;
right: 0;
transform: translateY(-50%);
cursor: pointer;
`

const AsideCarouselCol = styled.div`
width: auto;
height: auto;
display: flex;
flex-direction: column;
`

const CarouselCol = styled.span`
width: 4rem;
height: 5rem;
cursor: pointer;
img{
    min-width: 100%;
    max-height: 100%;
    object-fit: cover;
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
     <img src={Images[index].img} alt={title} />
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