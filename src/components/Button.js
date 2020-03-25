import styled from 'styled-components'

import { device } from 'device.js'

const Button = styled.button`
    padding: 8px;
    border: 1px solid #ffb6b9;
    background-color: #ffb6b9;
    color: white;
    font-size: 1rem;

    &:hover {
        cursor: pointer;
    }

    @media ${device.mobileL} {
        font-size: 0.75rem;
    }
`

export default Button