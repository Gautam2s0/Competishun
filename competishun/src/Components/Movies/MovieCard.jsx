
import { Box, Button, Flex, Heading, Image, Stack, Text, Toast } from '@chakra-ui/react'
import React, { useState } from 'react'
import {useSelector} from "react-redux";
import { useToast } from '@chakra-ui/react'
import { useDispatch } from 'react-redux';
import { AddFavMovie, AddWatMovie, GetMovie } from '../Redux/Movie/MovieAction';
import {MdOutlineFavoriteBorder,MdBookmark} from "react-icons/md";
import {useNavigate} from "react-router-dom"

export const MovieCard = ({data}) => {
  const {poster_path,title,id,genre_ids,overview,release_date}=data
  const navigate=useNavigate()
    const dispatch=useDispatch()
    const toast = useToast()
    

    // Favorite
    const handleFavorite=()=>{
        dispatch(AddFavMovie())
       
        toast({
          description: "Movie added in your favorite list.",
          status: 'success',
          duration: 5000,
          position:"top-center",
          isClosable: true,
        })
    }
    // Watchlist
    const handleWatchList=()=>{
      dispatch(AddWatMovie(data))
      
      toast({
        description: "Movie added in your Watchlist list.",
        status: 'success',
        duration: 5000,
        position:"top-center",
        isClosable: true,
      })

    }
    const HandleClick=()=>{
      navigate(`/moviedetails/:${id}`)
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
    h={"60vh"}
    
    
    >
       <Stack 
       h={'100%'}
       
        >
        <Image 
        src={`https://image.tmdb.org/t/p/original/${poster_path}`}
        alt={id} 
        borderRadius={'5%'} 
        borderBottomRadius={"0"}
        h='55%'
        onClick={HandleClick}
        _hover={{
          opacity:".7"
        }}
        /> 
        <Stack 
        
        h='40%'
        mt='1%'
        
       
        left={30}
        fontWeight={600}
        color={'#708090'}
        boxSizing='border-box'
        textAlign={'center'}
        >
            <Heading 
            h="30%" 
            fontSize={['1.2rem','1rem','1.2rem','1.4rem']}   
            color={"#2F4F4F"}
            onClick={HandleClick}
            _hover={{
              color:"teal"
            }}
             
             >{title}</Heading>
            <Text >genre_id : {genre_ids[0]}</Text>
            <Text >{release_date}</Text>
            <Stack 
        
        direction={'row'}
        justify={'space-between'}
        gap={'10%'}
        align={'center'}
        p='2% 5%'
        fontSize={'1.5rem'}
        mt='2%'
        boxSizing='border-box'
        h={'30%'}
        
        
        >
          <MdOutlineFavoriteBorder  onClick={handleFavorite} />
          <MdBookmark  onClick={handleWatchList} />
        </Stack>
        </Stack>
       </Stack>
    </Stack>
  )
}
