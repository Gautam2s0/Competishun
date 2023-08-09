import { Stack } from '@chakra-ui/react'
import React from 'react';
import {Routes,Route} from "react-router-dom"
import { Home } from '../Home/Home';
import { Recipe } from '../Food/Recipe';
import { Hotel } from '../Hotels/Hotel';
import { Movie } from '../Movies/Movie';
import { Food } from '../Food/Food';
import { Calorie } from '../Food/Calorie';
import { Diet } from '../Food/Diet';
import { MovieDetails } from '../Movies/MovieDetails';
import { Favorite } from '../Movies/Favorite';
import { Watchlist } from '../Movies/Watchlist';
import SignUp from '../Authentication/SignUp';
import Login from '../Authentication/Login';
import Signup from '../Authentication/SignUp';

export const MainRouter = () => {
  return (

        <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/movie' element={<Movie/>} />
            <Route path='/hotel' element={<Hotel/>} />
            <Route path='/food' element={<Food/>} />
            <Route path='/recipe' element={<Recipe/>} />
            <Route path='/diet' element={<Diet/>} />
            <Route path='/favorite' element={<Favorite/>} />
            <Route path='/watchlist' element={<Watchlist/>} />
            <Route path='/signup' element={<Signup/>} />
            <Route path='/login' element={<Login/>} />
            <Route path="/calorie" element={<Calorie/>} ></Route>
            <Route path='moviedetails/:id' element={<MovieDetails/>}  />
        </Routes>
   
  )
}
