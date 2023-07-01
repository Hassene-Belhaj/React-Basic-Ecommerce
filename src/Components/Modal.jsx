import React, { useEffect, useState } from 'react'
import { AiOutlineClose } from 'react-icons/ai'
import { MdDoneOutline } from 'react-icons/md'
import styled from 'styled-components'
import { useContextCart } from '../Context/ContextCart'
import { useContextData } from '../Context/ContextData'
import { motion } from 'framer-motion'


const Container = styled.div`
position: fixed;
inset: 0;
width: 100%;
height: 100vh;
/* background: rgba(0,0,0,0.8); */
display:flex;
justify-content: center;
align-items: center;
z-index: 5000;
`
const ModalDiv = styled(motion.div)`
width: 250px;
height: 300px;
background: #fff;
position: absolute;
top: 60px;
right: 2rem;
border-radius: 10px;
box-shadow: 1px 1px 3px rgba(0,0,0,0.3);
`
const FlexModal = styled.div`
width: 100%;
height: 100%;
padding: 1rem 0;
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
  margin-top: 1rem;
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

const timeout = setTimeout(() => {
    if(show){
    setShow(false)
    }
  }, 3500);
  return () => clearTimeout(timeout)

},[show])

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
               variants={{
                hidden : {opacity : 0 } ,
                visible: {opacity : 1  }
               }}
               initial='hidden'
               animate='visible'
               transition={{
                delay : 1,
                
               }}
              >
                      <CloseIcon size={20} onClick={handleShow} />
                  <FlexModal>
                      <DoneDiv>
                      <DoneIcon size={40} color='#000'/>
                      </DoneDiv>
                      <h4>Item Added To Your Cart</h4>
                      <p>{bagQuantity} In Your Cart</p>
                    <ButtonDiv>
                        {/* <button style={{border:'solid 1px #22c55e',color:'#22c55e',background:'#fff',fontWeight:'700'}} onClick={handleShow}> Continue Shopping</button> */}
                        <button style={{border:'solid 1px #0ea5e9',color:'#0ea5e9',background:'#fff',fontWeight:'700'}} onClick={handleClick}> Go To The Cart</button>
                    </ButtonDiv>
                  </FlexModal>
                </ModalDiv>
            </Container> : ''  }
    </>
        
  )
}

export default Modal