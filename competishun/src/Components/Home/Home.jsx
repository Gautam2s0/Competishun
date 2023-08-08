import {  Image, Stack } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'
import logo from "../Images/logocomp.png"
import {} from "../../App.css"

export const Home = () => {
  return (
    <Stack>
        <Stack 
        direction='row' 
        h={'10vh'} 
        w={'100vw'} 
        justify={'space-around'} 
        align={'center'}
        spacing={'10%'} 
        fontSize={'2rem'} 
        bg={'#333'} 
        fontWeight={700} 
        fontFamily={"revert"} 
        color={'#fff'} 
        position={"fixed"} 
        top={0} 
        zIndex={4}>
            <Stack h="100%" align={'center'} direction={'row'}>
                <Link to="/" style={{height:"100%",alignItems:"center",display:"flex"}}>
                <Image
                width={'100%'}
                h={'60%'}

                src={logo}  
                alt='loginError'
                 />
                </Link>
            </Stack>
            <Stack
             direction='row' 
             justify={'center'} 
             spacing={'20%'} 
            >
            <Link to="/movie" 
           className='ppp'
            >Movie</Link>
           
            <Link to="/hotel" className='ppp' >Hotel</Link>
            <Link to="/food" className='ppp' >Food</Link>
            </Stack>

        </Stack>
       
    </Stack>
  )
}
