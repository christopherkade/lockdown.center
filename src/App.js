import React from 'react';
import styled from 'styled-components'

import Title from 'components/Title.js'
import Subtext from 'components/Subtext.js'
import Illustration from 'components/Illustration.js'
import SearchBlock from 'components/SearchBlock.js'

import { device } from 'device.js'

const Wrapper = styled.div`
  display: flex;
  height: 100%;
  justify-content: center;
`

const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100%;

  @media ${device.tablet} {
    margin: 0 40px;
  }

  @media ${device.mobileM} {
    margin: 0 20px;
  }
`

const ImageLinkWrapper = styled.p`
  position: absolute;
  bottom: 0;
  font-size: 0.75rem;
  align-self: center;
`

const ImageLink = styled.a`
  color: #ffb6b9;
`

const App = () => {
  return (
    <Wrapper>
      <TextWrapper>
        <Title>
          Keep your <br />
          mind occupied.
        </Title>
        <Subtext>
          Finding fun things to do during the lockdown.
        </Subtext>

        <SearchBlock />

        <ImageLinkWrapper>
          Art by <ImageLink href="https://www.opendoodles.com/">opendoodles.com</ImageLink>
        </ImageLinkWrapper>
      </TextWrapper>

      <Illustration />
    </Wrapper>
  )
}

export default App
