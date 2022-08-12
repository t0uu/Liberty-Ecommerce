import { Box } from '@mui/material'
import React from 'react'

export const Footer = () => {
  return (
    <Box display={'flex'} flexDirection={{xs:'column',md:'row'}} textAlign={'center'} justifyContent={'center'} borderTop={'1px solid black'} >
       <p style={{marginRight: '10px'}}>
        QUIENES SOMOS
       </p>
       <p style={{marginRight: '10px'}}>
        TRABAJA CON NOSOTROS
       </p>
       <p style={{marginRight: '10px'}}>
        CONTACTANOS
       </p>
       <p style={{marginRight: '10px'}}>
        POLITICAS DE PRIVACIDAD
       </p>
       <p style={{marginRight:'10px'}}>
        DEVOLUCIONES
       </p>

    </Box>
  )
}
