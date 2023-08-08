import { Grid, Heading, Input, Stack } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { useSelector,useDispatch } from 'react-redux';
import {GetRecipes} from "../Redux/RecipeStore/ResAction"
import { Card } from './RecipeCard';
import { Spinner } from '@chakra-ui/react'

export const Recipe = () => {
  const recipes=useSelector((store)=>store.ResReducer)
  const dispatch=useDispatch();
  const [val,setVal]=useState("");
  const [cahnge,setChange]=useState(false)
  const data=recipes.recipes.hits
  let id;
  
  const handleChange=(e)=>{
    setVal(e.target.value)
    if(id){
      clearTimeout(id)
    }
    id=setTimeout(()=>{
      setChange(true)
    },1000)
    
  }
  
  useEffect(()=>{
    dispatch(GetRecipes(val))

  },[])
  
  console.log("val",val)

  
  return (
    <Stack
    mt={['25%','18%','14%','10%']}
    >
     
        <Stack>
          <Input 
          value={val}
          placeholder="Search recipe"
          name="recipe"
          onChange={handleChange}
          />
        </Stack>
        <Stack
        boxSizing='border-box'
        >
        <Grid
        w={'90%'}
        m='auto'
        boxSizing='border-box'
        templateColumns={['repeat(1, 1fr)','repeat(2, 1fr)','repeat(2, 1fr)','repeat(3, 1fr)']}
        columnGap={['5%','5%','5%','5%']}
        rowGap={['.5%','1%','2%','2%']}
       
      
        >
          {data&& data.map((el,i)=>{
            return(
              
              <Card props={el} key={i} />
            )
          })}

        </Grid>
        </Stack>
        <Stack direction={'row'}>
          <Heading>Recipe</Heading>
          <Heading>Calories</Heading>
          <Heading>Otes</Heading>
        </Stack>
    </Stack>
  )
}
