import React, { useState } from 'react'
import Box from '@mui/material/Box'
import {useSelector} from 'react-redux'
import { Link as LinkRouter }  from 'react-router-dom'
import Link from '@mui/material/Link'
import { Button, SwipeableDrawer,ListItem, Drawer } from '@mui/material'
import DensityMediumIcon from '@mui/icons-material/DensityMedium';
import CloseIcon from '@mui/icons-material/Close';
import { useCheckAuth } from '../../../../hooks/useCheckAuth'
export const NavbarMobile = (HoverMe) => {
  const [View,SetView] = useState(false)
  const {status} = useCheckAuth()
  const {CartRedux} = useSelector(state => state.Cart)

  const totalValue = CartRedux.reduce((previousValue, currentValue) => previousValue + currentValue.quantity,0)
  return (
    <Box display={{xs:'flex',sm:'none'}} alignItems={'center'} alignContent={'center'} textAlign={'center'} justifyContent={'space-between'} >
    <Button onClick={() => SetView(true)} style={{color:'black'}} ><DensityMediumIcon style={{fontSize:'1.5rem'}}/></Button>
    <SwipeableDrawer
      open={View}
      >
    <Box display={'flex'} flexDirection={'column'} style={{width:'10rem'}} justifyContent={'center'} alignItems={'center'}>
    <Box style={{position:'relative',Width:'7rem',margin:'1rem'}}>
    <Button onClick={() => SetView(false)} style={{position:'absolute',left:0}}><CloseIcon/></Button>
    </Box>
    <Link as={LinkRouter}  to='/' style={{fontSize:'1.5rem',color:'black',margin:'1rem'}} underline={'none'}  onClick={() => SetView(false)}  fontWeight={500} sx={HoverMe }>
        INICIO
        </Link>
        <Link as={LinkRouter} onClick={() => SetView(false)} to='/Shop' fontSize={'2rem'} style={{fontSize:'1.5rem',color:'black',margin:'1rem'}} underline={'none'}  fontWeight={500} sx={HoverMe }>
        SHOP
        </Link>

        <Link as={LinkRouter} onClick={() => SetView(false)} to={status === 'login' ? '/Cuenta' : '/Login' } fontSize={'1.5rem'}  style={{fontSize:'1.5rem',color:'black',margin:'1rem'}} underline={'none'}  fontWeight={500} sx={HoverMe }>
        CUENTA
        </Link>
   
    </Box>
    </SwipeableDrawer>
    <Link as={LinkRouter} to='/' style={{fontSize:'1.5rem',color:'black',marginTop:'0.5rem'}} >
        <img src={'https://res.cloudinary.com/do5jvqtn9/image/upload/q_auto:low/v1659364245/Liberty-Ecommerce/Logo_b39qbo.png'}  width={'60rem'} height={'20rem'} style={{'cursor': 'pointer'}}/>
        </Link>
        <Link as={LinkRouter} to='/Cart'  style={{fontSize:'1.3rem',color:'black',padding:'0 0.7rem'}} underline={'none'} marginRight={'20px'}  fontWeight={500} sx={HoverMe }>
        CART ({totalValue})
        </Link>
    </Box>
    
  )
}
