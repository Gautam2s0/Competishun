import { Input, Stack, Text } from '@chakra-ui/react'
import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { GetRecipes } from '../Redux/Food/Recipe/ResAction';
import {GetCalRecipes} from "../Redux/Food/Calorie/CalAction";

export const InputSearch = ({placehoder,title,type}) => {
    const [val,setVal]=useState("")
    const dispatch=useDispatch()
    const[query,setQuery]=useState("indian")
    let id;

   
    
    const handleChange=(e)=>{
        setVal(e.target.value)
        if(id){
          clearTimeout(id)
        }
        id=setTimeout(()=>{
          if(type==="calorie"){
            setQuery(116)
            dispatch(GetCalRecipes(e.target.value?e.target.value:query))
            console.log("yesCal",query)
          }
          dispatch(GetRecipes(e.target.value?e.target.value:query))
          
         
        },1000)
        
      }
  return (
    <Stack>
       <Stack
        mt={['25%','18%','14%','6%']}
        mb='.5%'
         direction={'row'}
         justify={'center'}
         align={'center'}
         gap={'5%'}
         >
          <Text
           fontSize={['2rem']}
           fontWeight={'600'}
           fontStyle={'oblique'}
           textShadow={"inherit"}
           >{title}</Text>
          <Input 
          w='30%'
          value={val}
          placeholder={placehoder}
          name="recipe"
          onChange={handleChange}
          border={'1px solid teal'}
         _placeholder={{
          color:"green",
          textStyle:"italic",
          fontSize: "1.5rem",
          fontStyle:"italic"
          
         }}
          />
        </Stack>  
    </Stack>
  )
}
