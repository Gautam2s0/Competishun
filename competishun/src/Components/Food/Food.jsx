import { Heading, Image, Stack, Text } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom';
import image from "../Images/food.jpg"

export const Food = () => {
  return (
    <Stack
    maxH={'100vh'}
    mt={['25%','18%','10%','6%']}
    
    >
       <Stack h={["9vh","9vh","9vh","9vh"]}>
       <Heading color={"teal"} >
        Welcome to our Food App
        </Heading>
       </Stack>
        
       <Stack
       
       direction={["column","row"]}
       align={'center'}
       justify={'space-around'}
       spacing={16}
       h={['60vh','48vh','56vh','60vh']}
       

       
       >
       <Image 
       w={['80%','40%']}
       h='100%'
       src={image} 
       alt={image} 
       borderRadius={'50%'}
       />
       <Text
        w={['80%','45%']}
        
       
      
        fontSize={['1.2rem','1.2rem','1.4rem','1.5rem']}
        color={'#4B0082'}
        textAlign={'start'}
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
        // mt={['2%','1.5%','2%','1.5%']}
        h={['15vh']}
        border={'2px solid green'}
        >
            <Link to="/recipe">Recipe</Link>
            <Link to="/calorie">Calorie</Link>
            <Link to="/diet">Diet</Link>
        </Stack>
    </Stack>
  )
}
