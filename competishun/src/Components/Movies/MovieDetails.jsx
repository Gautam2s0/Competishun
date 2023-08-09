import { Heading, Image, Stack, Text } from '@chakra-ui/react'
import axios from 'axios'
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

export const MovieDetails = () => {
    const params=useParams();
    const len=params.id.length
    const id=params.id.split("").splice(1,len).join("")
    let date;
    const url=`https://api.themoviedb.org/3/movie/${id}?api_key=0f6364113f82983e5594bc6194faf192`
    const [data,setData]=useState([]);

    if(data.release_date){
        date=data.release_date.split("-")[0]
    }
    useEffect(()=>{
        axios.get(url).then((res)=>{
            setData(res.data)
        }).catch((err)=>{
            console.log(err)
        })
    },[])
    console.log(data)
  return (
    <Stack 
    w='90%'
    borderRadius={"5%"}
    p="5% 6% 1% 6%"
    boxSizing="border-box"
    cursor={'pointer'}
    h={"85vh"}
    direction={['column','column','row','row']}
    justify={'space-between'}
    align={'center'}
    spacing={16}
    >
       <Stack 
        w={['85%','85%','35%','35%']}
        h={'100%'}
        >
        <Image 
         src={`https://image.tmdb.org/t/p/original/${data.poster_path}`}
        alt={id} 
        borderRadius={'5px'}
        h='120%'
        w='100%'
        /> 
        
       </Stack>
       <Stack 
        h='50%'
        w={['80%','80%','60%','60%']}
        position={'relative'}
        top={0}
        fontWeight={600}
        color={'#708090'}
        boxSizing='border-box'
        textAlign={'start'}
        >
            <Heading  color={"#2F4F4F"} > {data.title} ({date})</Heading>
            <Text>Release Date : {data.genre_ids?data.genre_ids[0]:25}</Text>
            <Text>Release Date : {data.release_date}</Text>
            <Stack>
            <Heading>Overview</Heading>
            <Text>{data.overview}</Text>
            
            </Stack>
        </Stack>
    </Stack>
  )
}
