import { Heading, Image, Stack, Text } from '@chakra-ui/react'
import React from 'react'
import { Recipe } from './Recipe'
import { Calorie } from './Calorie'
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
        <Text
        maxW={'70%'}
        m={'auto'}
        fontSize={['1.2rem']}
        color={'#4B0082'}
        >
        Discover a world of mouthwatering recipes, from classics to innovative creations. Explore diverse dishes, get nutritional info, and curate your collections. Elevate your cooking skills with us. Happy cooking!
        </Text>
       <Stack
       
       maxW={'90%'}
       direction={"row"}
       
       justify={"center"}
       
       >
       <Image 
       src={image} 
       alt={image} 
       w={'45%'}
       m={'auto'}
       mt=".5%"
       borderRadius={'50%'}
       />
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
        >
            <Link to="/recipe">Recipe</Link>
            <Link to="/calorie">Calorie</Link>
            <Link to="/diet">Diet</Link>
        </Stack>
    </Stack>
  )
}
