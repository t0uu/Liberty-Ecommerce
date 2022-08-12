import { Box} from '@mui/system'
import React from 'react'
import {useNavigate} from 'react-router-dom'
import { Footer, Navbar } from '../../Components'
import {useSelector,useDispatch} from 'react-redux'
import { Button, Typography } from '@mui/material'
import { startLogout } from '../../../store/auth/thunks'
import LogoutIcon from '@mui/icons-material/Logout';


export const Cuenta = () => {


  const dispatch = useDispatch()
  const navigate = useNavigate()  
  const {orders} = useSelector(state => state.orders)

  const statusColors = {
    pendiente: '#587792',
    enviado: '#9BC53D',
    cancelado: '#BF211E '
  }
 
  const {displayName,email} = useSelector(state => state.auth)
    const handleLogout = () => {
      dispatch(startLogout());
      navigate('/Login');
    }
  return (
    <>
    <Navbar/>
    <Box height={'100vh'}>

    <Box position={'absolute'} right={'0'}>
    <Button style={{fontSize:'1rem',color:'black'}}  onClick={handleLogout}>
     Cerrar Sesión <LogoutIcon style={{margin:'0rem 1rem'}}/>
    </Button>
     </Box>
    <Box display={'flex'} flexDirection={'column'} justifyContent='center'>
    <Box   display={'flex'} flexDirection={'column'} textAlign={'center'}>
    <Box p={3} m={3} display={'flex'} flexDirection={'column'}>
     <Typography variant={'h2'} fontSize={'2rem'}>
      Hola  <b>{displayName}</b> 
     </Typography>
  
     <Box>
      <Typography>Tu información</Typography>
      <Typography>Tu Nombre: {displayName}</Typography>
      <Typography>Tu e-mail: {email}</Typography>
     </Box>
    </Box>
    </Box>
     <Box textAlign={'center'}>
      <Typography variant={'h2'} fontSize={'1.5rem'}>
      Tus Ordenes:
      </Typography>
     </Box>
    <Box  m={1}  display={'flex'} flexDirection={'row'} justifyContent={'center'} textAlign={'center'} flexWrap={'wrap'}>
      {orders?.map((note) => (
    <Box border={'1px solid black'} width={'20rem'} m={1} display={'flex'} flexDirection={'column'} flexWrap={'wrap'}>
          <Box m={1} p={0.5} borderBottom={'1px solid black'}>
          <Typography variant={'h2'} style={{fontSize:'1.1rem'}}>Numero de orden: #{note.id.slice(0,7)}</Typography>
          </Box>
      
        <Box m={1} display={'flex'} flexDirection={'column'}>
          <Typography variant={'p'}>Total pagado:  ${note.total}</Typography>
          <Typography variant={'p'}>Estado del pedido:<Typography variant={'span'} sx={{color:statusColors[note.status]}}>{note.status}</Typography></Typography>
        </Box>
        </Box>
      ))
      
    }
    </Box>
    </Box>

    </Box>

    <Footer/>
    </>
  )
}
