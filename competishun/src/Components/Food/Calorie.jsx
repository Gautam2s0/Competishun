import {  Box,  Heading,  Stack  } from '@chakra-ui/react'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { InputSearch } from './InputSearch';
import {GetCalRecipes} from "../Redux/Food/Calorie/CalAction";
import {List} from "./List";
import { ErrorMes } from '../ErrorMessage/ErrorMes';


export const Calorie = () => {
  const recipes=useSelector((store)=>store.CalReducer)
  const dispatch=useDispatch();
  const data=recipes.recipes.hits;
  useEffect(()=>{
    dispatch(GetCalRecipes())
    // Loading
  if(recipes.isLoading){
    return <Heading mt={["25%","20%"]}>Loading ...</Heading> 
  }
  },[])

  // if Error occurs
  if(recipes.isError){
    return <ErrorMes/> 
  }
  
 
  return (
    <Stack>
         <InputSearch placehoder={"Search Calorie Recipe"} type={"calorie"} title="Calorie Search" />
        <Box
        borderBottom={"2px solid gray"}
        ></Box>
        <List data={data}  />
    </Stack>
   
  )
}
