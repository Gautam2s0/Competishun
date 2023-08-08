import { Box, Button, Flex, Heading, Image, Stack, Text, Toast } from '@chakra-ui/react'
import React, { useState } from 'react'
import {useSelector} from "react";
import { useToast } from '@chakra-ui/react'

export const Card = (props) => {
    const {image,label,totalDaily}=props.props.recipe;
    const Toast = useToast()
    
    
   
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
        src={image} 
        alt={label} 
        borderRadius={'5%'} 
        borderBottomRadius={"0"}
        h='55%'
        /> 
        <Stack 
        h='30%'
        
        fontWeight={600}
        color={'#708090'}
       
        >
            <Heading fontSize={['1.2rem','1rem','1.2rem','1.5rem']} textAlign={'center'} color={"#2F4F4F"} >{label}</Heading>
             <Flex
             justify={'center'}
             align={'center'}
             gap={'2%'}
             > 
            <Box
             h={'10px'}
             w='10px'
             borderRadius={'50%'}
             bg="#9ACD32"
             ></Box>
             <Text>
             FAT : {totalDaily.FAT.quantity.toPrecision(4)}g
             </Text>

             </Flex> 
             <Flex
             justify={'center'}
             align={'center'}
             gap={'2%'}
             > 
            <Box
             h={'10px'}
             w='10px'
             borderRadius={'50%'}
             bg="#FFFF00"
             ></Box>
             <Text> PROTEIN : {totalDaily.PROCNT.quantity.toPrecision(4)}g</Text>

             </Flex> 
             
        </Stack>
        <Button
        mt={['0%','8%','0%','0%']}
        mb={['0%','8%','0%','0%']}
        h={['8%','8%','8%','8%']}
        bg="teal"
        color={"yellow"}
        _hover={{
            bg:"#333",
           
        }}
        
        onClick={() =>
            Toast({
              title: 'Order Status.',
              description: "Order Placed.",
              status: 'success',
              duration: 5000,
              isClosable: true,
              position: 'top-center',
            })
          }
    
        
        >Book</Button>
        
       </Stack>
    </Stack>
  )
}
// recipes.hits