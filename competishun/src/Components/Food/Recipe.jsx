import { Box, Stack,  } from '@chakra-ui/react'
import React, { useEffect, } from 'react'
import { useSelector,useDispatch } from 'react-redux';
import {GetRecipes} from "../Redux/Food/Recipe/ResAction"
import { InputSearch } from './InputSearch';
import { List } from './List';

export const Recipe = () => {
  const recipes=useSelector((store)=>store.ResReducer)
  const dispatch=useDispatch();
  const data=recipes.recipes.hits;
 
  useEffect(()=>{
    dispatch(GetRecipes())
  },[])
  return (
    <Stack
    
    >
         <InputSearch placehoder={"Search Recipes"} type={"recipe"} title="Recipe Search" />
        <Box
        borderBottom={"2px solid gray"}
        ></Box>
        <List data={data}  />
       
    </Stack>
  )
}
