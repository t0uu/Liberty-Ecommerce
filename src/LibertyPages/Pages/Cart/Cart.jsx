import { Box, Button, Typography } from '@mui/material'
import React from 'react'
import {useSelector} from 'react-redux'
import {useDispatch}  from 'react-redux'
import { Footer, Navbar } from '../../Components'
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';
import { onCleanCart, onDeleteProduct, onMinusProduct, onPlusProduct } from '../../../store/Cart/CartSlice'
import {motion} from 'framer-motion'
import { AnimatedPage } from '../../Components/AnimatedPage/AnimatedPage'
import { creatingOrder } from '../../../store/orders/thunks'
import { useNavigate } from 'react-router-dom'
import Swal from 'sweetalert2/dist/sweetalert2.js'
import 'sweetalert2/src/sweetalert2.scss'

export const Cart = () => {
  const {CartRedux} = useSelector(state => state.Cart)
  const {status} = useSelector(state => state.auth);
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const price = CartRedux.reduce((acc, item) => {
    return (acc += item.Precio );
  }, 0)
  const envio = 500;
  const total = price + envio;
  
const onAddPay = () => {
  if(CartRedux.length <= 0){
    Swal.fire(
      {
        title: '¡Parece que no hay nada en el carrito!',
        text: '¡Por favor agrega algo al carrito!',  
        icon: 'alert',
        background: '#181818',
        color: 'white',
        backgrop: `
        rgba(0,0,000,0.5)
        `
      }
    )
  }else if(status === 'logout'){
    Swal.fire(
      {
        title: '¡Parece que no estás logeado o no dispones de una cuenta!',
        text: '¡Por favor crea una cuenta o inicia sesión!',  
        icon: 'alert',
        background: '#181818',
        color: 'white',
        backgrop: `
        rgba(0,0,000,0.5)
        `
      }
    )
  }else{
    dispatch(creatingOrder([...CartRedux],price)) 
    dispatch(onCleanCart(CartRedux.length))
    navigate('/Agradecimiento')
  }
}

  return (
    <>
    <AnimatedPage>
    <Navbar/>
    <motion.div initial={{ opacity: 0 }}
    whileInView={{ opacity: 1,transition:{duration: 1}}}>


    <Box textAlign={'center'} m={'1rem'}>
      <Typography variant={'h2'} fontSize={'2rem'} fontWeight={500}>Tus productos seleccionados se encuentran aquí</Typography>
    </Box>
    <Box display={'flex'} flexDirection={{xs:'column',sm:'column',md:'row'}} justifyContent='center' width={{xs:'260px',sm:'350px',md:'100%'}} m='auto'>
      <Box display={'flex'} flexDirection={'column'} justifyContent='center' >
        {
          CartRedux.map(product => (
            <Box m={1} display={'flex'} flexDirection={{xs:'column',sm:'row'}}  border={'1px solid rgba(0,0,0,0.7)'} boxShadow={'0px 0px 4px 4px rgba(0, 0, 0, 0.03)'} position={'relative'} >
              <Box  width={{xs:'100%',md:'300px'}} height={{xs:'230px'}} >
              <img src={`${product.Image}`} width={'100%'} height={'100%'} />
              </Box>
              <Box mb={'1rem'}  mt={'1rem'}  display={'flex'} flexDirection={'column'} width={{xs:'240px',sm:'550px',md:'240px'}} justifyContent={'center'} position={'relative'}>
                <Box  position={'absolute'} bottom={'-1.3rem'} right={'0'} >
                  <Button onClick={() => dispatch(onDeleteProduct(product.id))} style={{padding:0,minWidth:0,position:'relative',margin:'0.5rem 0.5rem'}}><DeleteOutlinedIcon style={{color:'black'}}/></Button>
                </Box>
                <Typography m={'0.5rem'} fontSize={{xs:'1rem'}} fontWeight={500}>{product.Nombre}</Typography>
                <Typography m={'0.5rem'} fontSize={'1rem'} fontWeight={500}>Talle: {product.Talle}</Typography>
                <Typography m={'0.5rem'} fontSize={'1rem'} fontWeight={500}>${product.Precio}</Typography>
                <Box m={'0.5rem'} display={'flex'} alignItems={'center'}>
                  <Typography fontSize={'1rem'} fontWeight={500}>Cantidad:</Typography>
                  <Button onClick={() => dispatch(onMinusProduct(product))} style={{background:'black', color:'white' ,fontSize:'1rem',padding:0,minWidth:'1.7rem',margin:'0.5rem'}}>-</Button>
                  <Typography style={{fontSize:'1.2rem'}}>{product.quantity}</Typography>
                  <Button onClick={() => dispatch(onPlusProduct(product))} style={{background:'black', color:'white' ,fontSize:'1rem',padding:0,minWidth:'1.7rem',margin:'0.5rem'}}>+</Button>
                </Box>
              </Box>
            </Box>
          ))
        }
      </Box>
        <Box  >
          <Box width={{xs:'260px',sm:'350px'}} mt={'5rem'} mb={'5rem'} height={'420px'} display={'flex'} flexDirection={'column'} border={'1px solid rgba(0,0,0,0.7)'} boxShadow={'0px 0px 4px 4px rgba(0, 0, 0, 0.03)'}>
            <Box borderBottom={'1px solid black'}>
          <Typography m={'0.5rem'} fontSize={'1.5rem'} fontWeight={500}>RESUMEN:</Typography>
            </Box>
          <Box display={'flex'}  flexDirection={'column'}   >
          <Box display={'flex'} m={'1rem 0'} padding={'1rem'} justifyContent={'space-between'}  borderBottom={'1px solid black'}>
          <Typography fontSize={'1rem'} fontWeight={500}>SUBTOTAL:</Typography>
          <Typography fontSize={'1rem'} fontWeight={500}>${price}</Typography>
          </Box>
          <Box display={'flex'}  m={'1rem 0'} padding={'1rem'} justifyContent={'space-between'}  borderBottom={'1px solid black'}>
          <Typography fontSize={'1rem'} fontWeight={500}>ENVIO:</Typography>
          <Typography fontSize={'1rem'} fontWeight={500}>${envio}</Typography>
          </Box>
          <Box display={'flex'}  m={'1rem 0rem'} padding={'1rem'} justifyContent={'space-between'}  borderBottom={'1px solid black'}>
          <Typography fontSize={'1rem'} fontWeight={500}>TOTAL:</Typography>
          <Typography fontSize={'1rem'} fontWeight={500}>${total}</Typography>
          </Box>
          <Button  style={{background:'black', color:'white' ,fontSize:'1rem',padding:'0.9rem',minWidth:'1.7rem',margin:'0.5rem'}} onClick={onAddPay}>PROCEDER AL PAGO</Button>
          </Box>
          </Box>
        </Box>
    </Box>
    </motion.div>
    <Footer/>
    </AnimatedPage>
    </>
  )
}
