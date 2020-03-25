import styled from 'styled-components'

import { device } from 'device.js'

const Subtext = styled.p`
  font-size: 1.5rem;

  @media ${device.mobileL} {
    font-size: 1rem;
  }
`

export default Subtext