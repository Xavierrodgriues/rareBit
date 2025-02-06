import { Container, Input } from '@chakra-ui/react'
import React from 'react'

const CustomNodes = ({data}) => {
  return (
    <div style={{padding : "10px 12px"}}>

        <Input width="30vw" placeholder='Enter your prompt'  />
        <div style={{display : "flex", justifyContent : "start", alignItems : "center", padding : "10px 0px"} }>
                <p>Loading...</p>
        </div>
    </div>
  )
}

export default CustomNodes