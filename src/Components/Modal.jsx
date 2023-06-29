import React, { useEffect, useState } from 'react'
import { AiOutlineClose } from 'react-icons/ai'
import { MdDoneOutline } from 'react-icons/md'
import styled from 'styled-components'
import { useContextCart } from '../Context/ContextCart'
import { motion } from 'framer-motion'


const Container = styled.div`
position: fixed;
inset: 0;
width: 100%;
height: 100vh;
background: rgba(0,0,0,0.8);
display:flex;
justify-content: center;
align-items: center;
`
const ModalDiv = styled(motion.div)`
width: 400px;
height: 500px;
background: #fff;
position: relative;
border-radius: 10px;
`
const FlexModal = styled.div`
width: 100%;
height: 100%;
padding: 5rem 0;
text-align: center;
`
const CloseIcon = styled(AiOutlineClose)`
position: absolute;
top: 1rem;
right: 1rem;
cursor: pointer;
`
const DoneDiv = styled.div`
width: 100%;
height: 10rem;
background: #fff;
display: flex;
justify-content: center;
align-items: center;
button{
  padding: 3rem;
  border-radius: 50%;
  border: none;
}
`

const DoneIcon = styled(MdDoneOutline)`
`
const ButtonDiv =styled.div`
width: 100%;
height: auto;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
button{
  width:80%;
  height: 3rem;
  margin-top: 2rem;
  border-radius: 10px;
  border: none;
  font-weight: 500;
  cursor: pointer;
}
`

const Modal = () => {
  const handleShow = () => setShow(!show)
  const {bagQuantity,toggle,handleClick} = useContextCart()
  const [show,setShow] = useState(false)  
 

  useEffect(()=>{
  if (bagQuantity && !toggle) {
    setShow(true)
  } else {
    setShow(false)
  }
  },[bagQuantity])

 useEffect(()=>{
 if (toggle) {
  setShow(false)
 }


 },[toggle])

  


  return (
    <>
    {show ? <Container>
               
                <ModalDiv 
                initial={{opacity :1 , y : -200}} 
                animate={{opacity : 1 ,y : 0}}
                transition={{
                  duration : 0.7 ,
                  type : 'spring',
                  bounce : 0.3 ,
                }}

                >
                      <CloseIcon size={25} onClick={handleShow} />
                  <FlexModal>
                      <DoneDiv>
                        <button style={{background:'green'}}> <DoneIcon size={40} color='#fff'/></button>  
                      </DoneDiv>
                      <h4>Item Added To Your Cart</h4>
                      <p>{bagQuantity} In Your Cart</p>
                    <ButtonDiv>
                        <button style={{border:'solid 1px #22c55e',color:'#22c55e',background:'#fff',fontWeight:'700'}} onClick={handleShow}> Continue Shopping</button>
                        <button style={{border:'solid 1px #0ea5e9',color:'#0ea5e9',background:'#fff',fontWeight:'700'}} onClick={handleClick}> Go To The Cart</button>
                    </ButtonDiv>
                  </FlexModal>
                </ModalDiv>
            </Container> : ''  }
    </>
        
  )
}

export default Modal