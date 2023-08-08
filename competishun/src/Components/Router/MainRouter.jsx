import { Stack } from '@chakra-ui/react'
import React from 'react';
import {Routes,Route} from "react-router-dom"
import { Home } from '../Home/Home';
import { Recipe } from '../Recipe/Recipe';
import { Hotel } from '../Hotels/Hotel';
import { Movie } from '../Movies/Movie';

export const MainRouter = () => {
  return (

        <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/movie' element={<Movie/>} />
            <Route path='/hotel' element={<Hotel/>} />
            <Route path='/recipe' element={<Recipe/>} />
        </Routes>
   
  )
}
