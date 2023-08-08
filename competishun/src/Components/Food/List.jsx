import { Grid, Heading, Stack, Text } from '@chakra-ui/react'
import React from 'react';
import { Card } from './RecipeCard';


export const List = (data) => {
    data=data.data
    if(!data||data.length==0){
      console.log("yes")
      return <Text
      textAlign={"center"}
      color={"green"}
      mt={'5%'}
      fontWeight={600}
      fontSize={["1.5rem"]}
      >Ooops, nothing in our recipes database matches what you are searching for! Please try again.</Text>
    }
    console.log("DData",data)

  return (
    <Stack>
        <Stack
        boxSizing='border-box'
        mt={'1%'}
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
    </Stack>
  )
}
