import { Box, Heading, Stack,  } from '@chakra-ui/react'
import React, { useEffect, } from 'react'
import { useSelector,useDispatch } from 'react-redux';
import {GetRecipes} from "../Redux/Food/Recipe/ResAction"
import { InputSearch } from './InputSearch';
import { List } from './List';
import { ErrorMes } from '../ErrorMessage/ErrorMes';

export const Recipe = () => {
  const recipes=useSelector((store)=>store.ResReducer)
  const dispatch=useDispatch();
  const data=recipes.recipes.hits;
 
  useEffect(()=>{
    dispatch(GetRecipes())
    // Loading
  if(recipes.isLoading){
    return <Heading mt={["25%","20%"]}>Loading ...</Heading> 
  }
  },[])

  // if Error occurs
  if(recipes.isError){
    return <ErrorMes/>
  }
  // without error occurs
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
