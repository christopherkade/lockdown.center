import styled from 'styled-components'

import { device } from 'device.js'

const Dropdown = styled.select`
    padding: 8px;
    margin: 0 8px;
    border-color: #ffb6b9;
    font-size: 1rem;

    &:hover {
        cursor: pointer;
    }

    @media ${device.mobileL} {
        font-size: 0.75rem;
    }
`

export default Dropdown