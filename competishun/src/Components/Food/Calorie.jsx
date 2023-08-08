import {  Box, Stack } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { InputSearch } from './InputSearch';
import {GetCalRecipes} from "../Redux/Food/Calorie/CalAction";
import {List} from "./List"

export const Calorie = () => {
  const recipes=useSelector((store)=>store.CalReducer)
  const dispatch=useDispatch();
  const data=recipes.recipes.hits;
  useEffect(()=>{
    dispatch(GetCalRecipes())
  },[])
  return (
    <Stack>
         <InputSearch placehoder={"Search Calorie Recipe"} type={"calorie"} title="Recipe Search" />
        <Box
        borderBottom={"2px solid gray"}
        ></Box>
        <List data={data}  />
    </Stack>
   
  )
}
