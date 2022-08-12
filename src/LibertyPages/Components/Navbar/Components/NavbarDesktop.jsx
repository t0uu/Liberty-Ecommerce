import React, { useState } from 'react'
import Box from '@mui/material/Box'
import { Link as LinkRouter }  from 'react-router-dom'
import Link from '@mui/material/Link'
import { useSelector } from 'react-redux'
import { useCheckAuth } from '../../../../hooks/useCheckAuth'

export const NavbarDesktop = ({HoverMe}) => {
  const {status} = useCheckAuth()
  const {CartRedux} = useSelector(state => state.Cart)

  const totalValue = CartRedux.reduce((previousValue, currentValue) => previousValue + currentValue.quantity,0)
  return (
    <>

    <Box display={{xs:'none',sm:'flex'}}justifyContent={'space-evenly'} padding={'0.5rem'} alignItems={'center'}>
    <Link as={LinkRouter}  to='/' style={{fontSize:'1.5rem',color:'black'}} underline={'none'}   fontWeight={500} sx={HoverMe }>
    INICIO
    </Link>
    <Link as={LinkRouter} to='/Shop' fontSize={'2rem'} style={{fontSize:'1.5rem',color:'black'}} underline={'none'}  fontWeight={500} sx={HoverMe }>
    SHOP
    </Link>
    <Link as={LinkRouter} to='/'>
    <img src={'https://res.cloudinary.com/do5jvqtn9/image/upload/q_auto:low/v1659364245/Liberty-Ecommerce/Logo_b39qbo.png'}  width={'100rem'} height={'25rem'} style={{'cursor': 'pointer'}}/>
    </Link>
    <Link as={LinkRouter} to={status === 'login' ? '/Cuenta' : '/Login' } fontSize={'1.5rem'}  style={{fontSize:'1.5rem',color:'black'}} underline={'none'}  fontWeight={500} sx={HoverMe }>
    CUENTA
    </Link>
    <Link as={LinkRouter} to='/Cart' fontSize={'1.5rem'} style={{fontSize:'1.5rem',color:'black'}} underline={'none'}  fontWeight={500} sx={HoverMe }>
    CART ({totalValue})
    </Link>
</Box>
<hr/>
  </>
)
}
