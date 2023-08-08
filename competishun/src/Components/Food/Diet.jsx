import { Box, Heading, Stack } from '@chakra-ui/react'
import React, { useEffect } from 'react';
import { Select } from '@chakra-ui/react'
import { List } from './List';
import { useDispatch, useSelector } from 'react-redux';
import { GetDietRecipes } from '../Redux/Food/Diet/DAction';

export const Diet = () => {
  const dispatch=useDispatch()
  const recipes=useSelector((store)=>store.DietReducer)
  const data=recipes.recipes.hits;

const HandleChange=(e)=>{
  dispatch(GetDietRecipes(e.target.value))
}

useEffect(()=>{
  dispatch(GetDietRecipes())
},[])

// Loading
if(recipes.isLoading){
  return <Heading mt={["25%","20%"]}>Loading ...</Heading> 
}
  return (
    <Stack
    >
 <Stack
  mt={['25%','18%','18%','6%']}
 mb='.5%'
  direction={'row'}
  justify={'center'}
  align={'center'}
  gap={'5%'}
 >
  <Heading
  fontSize={['2rem']}
  fontWeight={'600'}
  fontStyle={'oblique'}
  textShadow={"inherit"}
  >Search Diet</Heading>
 <Select 
  w='30%'
  placeholder='Select option'
  onChange={HandleChange}
 >
  <option value='Alcohol-free'>Alcohol-free</option>
  <option value='Balanced'>Balanced</option>
  <option value='High-Fiber'>High-Fiber</option>
  <option value='High-Protein'>High-Protein</option>
  <option value='Keto'>Keto</option>
  <option value='Kosher'>Kosher</option>
  <option value='Low-Carb'>Low-Carb</option>
  <option value='Low-Fat'>Low-Fat</option>
  <option value='Paleo'>Paleo</option>
  <option value='Pescatarian'>Pescatarian</option>
  <option value='Pork-free'>Pork-free</option>
  <option value='Vegetarian'>Vegetarian</option>

  
</Select>
 </Stack>
 <Box
        borderBottom={"2px solid gray"}
        mb='.5%'
        
        ></Box>
        <List  data={data}  />
    </Stack>
  )
}
