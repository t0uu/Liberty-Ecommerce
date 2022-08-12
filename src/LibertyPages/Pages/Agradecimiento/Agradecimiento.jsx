import {Box,Button, Typography } from '@mui/material'
import {useSelector} from 'react-redux'
import { useNavigate } from 'react-router-dom'
import React from 'react'

export const Agradecimiento = () => {
  const {displayName} = useSelector(state => state.auth)
  const navigate = useNavigate()  
  return (
    <>
    <Box width={'100%'} height={'100vh'} display={'flex'}>
    <Box display={'flex'} justifyContent={'center'} flexDirection={'column'} alignContent={'center'} alignItems='center' m={'auto'}>
        <Typography variant={'h2'} m={1} fontSize={'2rem'}>
            Muchas gracias por tu compra <b>{displayName}</b> 
        </Typography>
        <img src={'https://res.cloudinary.com/do5jvqtn9/image/upload/v1660067491/Liberty-Ecommerce/tom-morbey-QJz32ZuCArg-unsplash_upljqz.jpg'} height={'350px'} width={'350px'}/>
        <Box>

        <Button style={{background:'black', color:'white',margin:'0.5rem'}}
         onClick={() => navigate('/')}>
            Presiona aquí para volver al inicio
        </Button>
        </Box>
    </Box>
    </Box>
    </>
  )
}
