import { Button, Flex, Heading, Stack } from '@chakra-ui/react'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { GetMovie } from './../Redux/Movie/MovieAction';
import { MovieCard } from './MovieCard';
import { MovieLIst } from './MovieLIst';
import { MovieSearch } from './MovieSerch';
import {useNavigate} from "react-router-dom"

export const Movie = ({mt}) => {
  const movie=useSelector((store)=>store.MovieReducer.movies)
  const dispatch=useDispatch()
  const navigate=useNavigate()
  const url=`https://api.themoviedb.org/3/discover/movie?api_key=0f6364113f82983e5594bc6194faf192`

  useEffect(()=>{
    dispatch(GetMovie(url))
  },[])
console.log("movie",movie)

  return (
    <Stack
    
    >
      
      <Stack
        direction={'row'}
        justify={'space-around'}
        align={'center'}
        gap={'10%'}
        mt={['25%','15%','10%','6%']}
      >
     <Stack 
     w='70%'
     mt="0"
     >
     <MovieSearch mt={"1%"}/>
     </Stack>
      <Flex
      justify={'center'}
      align={'center'}
      gap={'5%'}
      >
 <Button
  onClick={()=>{
   navigate("/favorite")
  }}
 
 >Favorite</Button>
 <Button
  onClick={()=>{
    navigate("/watchlist")
   }}
 >Watchlist</Button>

      </Flex>
      </Stack>
       
        <MovieLIst data={movie.results} />
    </Stack>
  )
}
