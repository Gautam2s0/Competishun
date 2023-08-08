import { Image, Stack } from '@chakra-ui/react'
import React from 'react';
import error from "../Images/networkerror.png"

export const ErrorMes = () => {
  return (
     <Stack>
      <Image m='auto' borderRadius={'50%'} mt={['25%','15%']} w='20%' src={error} alt={"eeerr"}/>
    </Stack>
    
  )
}
