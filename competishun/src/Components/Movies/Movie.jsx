import { Heading, Stack } from '@chakra-ui/react'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { GetMovie } from './../Redux/Movie/MovieAction';
import { MovieCard } from './MovieCard';
import { MovieLIst } from './MovieLIst';

export const Movie = () => {
  const movie=useSelector((store)=>store.MovieReducer.movies)
  const dispatch=useDispatch()
  const url=`https://api.themoviedb.org/3/discover/movie?api_key=0f6364113f82983e5594bc6194faf192`

  useEffect(()=>{
    dispatch(GetMovie(url))
  },[])
console.log("movie",movie)

  return (
    <Stack
    mt={'5%'}
    >
        <Heading>Movie</Heading>
        <MovieLIst data={movie.results} />
    </Stack>
  )
}
