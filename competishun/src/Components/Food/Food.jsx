import { Heading, Image, Stack, Text } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom';
import image from "../Images/food.jpg"

export const Food = () => {
  return (
    <Stack
    mt={'6%'}
    >
        <Heading color={"teal"}>
        Welcome to our Food App
        </Heading>
        
       <Stack
       
       direction={"row"}
       align={'center'}
       justify={'space-around'}
       spacing={16}
       mt={'2%'}
       
       >
       <Image 
       w='40%'
       src={image} 
       alt={image} 
       borderRadius={'50%'}
       />
       <Text
       w='45%'
      
        fontSize={['1.2rem','1.2rem','1.4rem','1.5rem']}
        color={'#4B0082'}
        textAlign={'center'}
        letterSpacing={"1px"}
        >
        Discover a world of mouthwatering recipes, from classics to innovative creations. Explore diverse dishes, get nutritional info, and curate your collections. Elevate your cooking skills with us. Happy cooking!
        </Text>
       </Stack>
        <Stack
        direction={'row'}
        justify={'center'}
        align={'center'}
        gap={'5%'}
        bg={"#2F4F4F"}
        fontSize={['2.1rem']}
        color={"#fff"}
        mt={'1.5%'}
        h={'13vh'}
        >
            <Link to="/recipe">Recipe</Link>
            <Link to="/calorie">Calorie</Link>
            <Link to="/diet">Diet</Link>
        </Stack>
    </Stack>
  )
}
