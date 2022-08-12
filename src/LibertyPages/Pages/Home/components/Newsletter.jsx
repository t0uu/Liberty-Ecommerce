import { Box, Button, FormControl} from '@mui/material'
import React from 'react'

export const Newsletter = () => {
  return (
    <Box display={'flex'} justifyContent={'center'} flexDirection={{xs:'column'}} textAlign={'center'} m={1} p={1}>
        <h2 style={{textTransform:'uppercase'}}>Suscribete a nuestro newsletter</h2>
        <Box display={'flex'} justifyContent={'center'} flexDirection={{md:'row'}}>
        <FormControl style={{display:'flex',justifyContent:'center',flexDirection:'column',margin:'0.5rem'}}>
            <input type='email' placeholder='INGRESA TU E-MAIL' style={{border:'1px solid black', margin:'0rem 0.5rem',padding:'0.5rem 1rem'}}/>
            <Box>
            <Button style={{background:'black', color:'white',padding:'0.5rem 4.5rem', borderRadius:'0',marginTop:'0.5rem'}}  type={'submit'}>
                ENVIAR
            </Button>
            </Box>
        </FormControl>
        </Box>
        
    </Box>
  )
}
