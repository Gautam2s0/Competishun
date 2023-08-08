
import { Box, Button, Flex, Heading, Image, Stack, Text, Toast } from '@chakra-ui/react'
import React, { useState } from 'react'
import {useSelector} from "react-redux";
import { useToast } from '@chakra-ui/react'
import { useDispatch } from 'react-redux';
import { GetMovie } from '../Redux/Movie/MovieAction';

export const MovieCard = ({poster_path,title,id,genre_ids,overview}) => {
    let poster=`https://v3img.voot.com/resizeMedium,w_1090,h_613/v3Storage/assets/bloody-daddy-16x9-1687775864575.jpg`
    const movie=useSelector((store)=>store.MovieReducer.movies)
    const dispatch=useDispatch()
    const url=`https://api.themoviedb.org/3/discover/movie?api_key=0f6364113f82983e5594bc6194faf192`
  
   
    const Toast = useToast()
    console.log({poster_path,title,id,genre_ids,overview})
    console.log("poster",movie)

    const handleClick=()=>{
        const url=`https://api.themoviedb.org/3/movie/${id}?api_key=0f6364113f82983e5594bc6194faf192`
        GetMovie(url)
        alert(id)
    }
    
   
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
    onClick={handleClick}
   
    >
        
       <Stack 
       h={'100%'}
      

        >
        <Image 
        src={poster} 
        alt={id} 
        borderRadius={'5%'} 
        borderBottomRadius={"0"}
        h='60%'
        /> 
        <Stack 
        h='30%'
        
        fontWeight={600}
        color={'#708090'}
       
        >
            <Heading fontSize={['1.2rem','1rem','1.2rem','1.5rem']} textAlign={'center'} color={"#2F4F4F"} >{title}</Heading>
            <Text>genre_id : {genre_ids[0]}</Text>
        </Stack>
        
        
       </Stack>
    </Stack>
  )
}
// recipes.hits