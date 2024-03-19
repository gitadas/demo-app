import React from "react"
import styled, {keyframes} from "styled-components"

export default function TextAnimation() {
    return <Wrapper>Community Portal</Wrapper>;
}

const animation = keyframes`
from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`

const Wrapper = styled.div`
animation: ${animation} 2s linear infinite;
`
/*const animation = keyframes`
0% {opacity : 0;}
100% {opacity:1;}
`
const Wrapper = styled.div`
animation: ${animation} 2s infinite;
`
*/


