
import { Box, Button, Flex, Heading, Image, Stack, Text, Toast } from '@chakra-ui/react'
import React, { useState } from 'react'
import {useSelector} from "react";
import { useToast } from '@chakra-ui/react'

export const MovieCard = ({poster_path,title,id,genre_ids,overview}) => {
    
    const Toast = useToast()
    console.log({poster_path,title,id,genre_ids,overview})
    
    
   
  return (
    <Stack 
    boxShadow={'dark-lg'}
    borderRadius={"5%"}
    p="5% 6% 1% 6%"
    boxSizing="border-box"
    _hover={
       {
        transform:"scale(1.05)",
        transitionDuration:"1s"
    }}
    cursor={'pointer'}
   
    >
        
       <Stack 
       h={'100%'}
      

        >
        <Image 
        src={poster_path} 
        alt={id} 
        borderRadius={'5%'} 
        borderBottomRadius={"0"}
        h='55%'
        /> 
        <Stack 
        h='30%'
        
        fontWeight={600}
        color={'#708090'}
       
        >
            <Heading fontSize={['1.2rem','1rem','1.2rem','1.5rem']} textAlign={'center'} color={"#2F4F4F"} >{title}</Heading>
            
        </Stack>
        
        
       </Stack>
    </Stack>
  )
}
// recipes.hits