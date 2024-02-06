import { Box, Button, Container, Input, Stack, Typography } from '@mui/material'
import { purple } from '@mui/material/colors'
import React, { useState } from 'react'


export default function App() {
  const [count, setcount] = useState(0)
  return (
    <Container className='container' sx={{
      height:'100vh',
      
      display:'flex',
      flexDirection:'column',
      justifyContent:'center',
      alignItems:'center'
    }} >
      <Typography variant='h1' sx={{
        padding:2
      }}>Counter</Typography>
      <Box sx={{
        width:600,
        height:400,
        outline:5,
        display:'flex',
        flexDirection:'column',
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'#99d98c'
      }}>
        <Typography variant='h1'  gutterBottom>{count
        }</Typography>
        <Stack direction='row' gap={5}>
          <Button variant='contained' size="large" sx={{
            width:90,
            height:45,
            fontSize:25
          }}
          onClick={()=>{
            setcount(count+1)
          }}
          >+</Button>
         {
          count>0?<Button variant='contained' size="large" sx={{
            width:90,
            height:45,
           fontSize:30,
          }}
          onClick={()=>{
            if(count===0){
              return
            }
            else{
              setcount(count-1)
            }
          }}
          >-</Button> :""
         }   
        </Stack>
      </Box>
    </Container>
  )
}
