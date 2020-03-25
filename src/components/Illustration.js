import React from 'react';
import styled from 'styled-components'

import { device } from 'device.js'

import image from 'assets/images/sitting-reading.svg'

const Wrapper = styled.div`
  position: absolute;
  right: 0;
  top: 0;
  background-color: #ffb6b9;
  border-top-left-radius: 20% 80%;
  border-bottom-left-radius: 80%;
  border-bottom-right-radius: 50% 10%;
  padding: 100px 50px 100px 100px;
  z-index: -1;

  @media ${device.mobileL} {
    padding: 50px 25px 50px 50px;
  }
`

const Image = styled.img`
  width: 30vw;

  @media ${device.mobileS} {
    width: 90%;  
  }
`

const Illustration = () => {
  return (
    <Wrapper>
      <Image src={image} alt="" />
    </Wrapper>
  )
}

export default Illustration