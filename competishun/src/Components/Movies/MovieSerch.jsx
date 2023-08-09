import { Input, Stack, Text, useToast } from '@chakra-ui/react'
import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { GetRecipes } from '../Redux/Food/Recipe/ResAction';
import {GetCalRecipes} from "../Redux/Food/Calorie/CalAction";
import { SearchMovie } from '../Redux/Movie/MovieAction';

export const MovieSearch = ({mt}) => {
  console.log("mt",mt)
    const [val,setVal]=useState("")
    const dispatch=useDispatch()
    const[query,setQuery]=useState("thor");
    const Toast=useToast()
    let id;
    let p;

   
    const handleChange=(e)=>{
        setVal(e.target.value)
        if(id){
          clearTimeout(id)
        }
        id=setTimeout(()=>{
            // p=e.target.value.split("").map(Number)
            // if(p.includes(true)){
            //   return 
            // } 
           
console.log("value",e.target.value)
          dispatch(SearchMovie(e.target.value?e.target.value:query))
        },1000) 
      }
  return (
    <Stack>
       <Stack
        mt={mt?mt:['25%','15%','10%','6%']}
        mb='.5%'
         direction={['column','row','row','row']}
         justify={'center'}
         align={'center'}
         gap={'5%'}
         >
          <Text
           fontSize={['2rem','1.5rem','1.8rem','2rem']}
           fontWeight={'600'}
           fontStyle={'oblique'}
           textShadow={"inherit"}
           >Search Movies</Text>
          <Input 
          w={['80%','40%','35%','30%']}
          value={val}
          placeholder={"Search movies here"}
          name="movie"
          onChange={handleChange}
          border={'1px solid teal'}
         _placeholder={{
          color:"green",
          textStyle:"italic",
          fontSize: ["1.5rem","1rem","1.2rem","1.5rem"],
          fontStyle:"italic"

         }}
          />
        </Stack>  
    </Stack>
  )
}
