import styled from 'styled-components'

import { device } from 'device.js'

const Title = styled.h1`
  margin: 0;
  font-size: 4rem;
  font-family: 'Libre Baskerville', serif;

  @media ${device.mobileL} {
    font-size: 2.5rem;
  }
`

export default Title