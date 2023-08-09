import React from 'react'
import { Stack } from '@chakra-ui/react';
import { MovieLIst } from './MovieLIst';
import { useDispatch, useSelector } from 'react-redux';
import { MovieReducer } from './../Redux/Movie/MovieReducer';

export const Favorite = () => {
  const movie=useSelector((store)=>store.MovieReducer.favourites);
  console.log("moviefff",movie)

  return (
    <Stack>
      {
        <MovieLIst data={movie.results} />
      }
    </Stack>
  )
}
