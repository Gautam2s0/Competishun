import { Stack } from '@chakra-ui/react';
import React from 'react'
import { useSelector } from 'react-redux';
import { MovieLIst } from './MovieLIst';

export const Watchlist = () => {
  const movie=useSelector((store)=>store.MovieReducer.favourites);
  console.log("moviefff",movie)

  return (
    <Stack
    mt='6%'
    >
      {
        <MovieLIst data={movie.results} />
      }
    </Stack>
  )
}
