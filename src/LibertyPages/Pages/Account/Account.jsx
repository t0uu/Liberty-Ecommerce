import { Box, Button, TextField, Typography } from '@mui/material'
import { useDispatch,useSelector } from 'react-redux'
import React from 'react'
import { Link,useNavigate } from 'react-router-dom'
import { Footer, Navbar } from '../../Components'
import {motion} from 'framer-motion'
import { AnimatedPage } from '../../Components/AnimatedPage/AnimatedPage'
import { useForm } from '../../../hooks/useForm'
import { startLoginWithEmailPassword } from '../../../store/auth/thunks'


const formData = {
  email: '',
  password: '',
}
export const Account = () => {
  const dispatch = useDispatch();
const navigate = useNavigate()
 const {email,password,onInputChange} = useForm(formData)
 const {status,errorMessage} = useSelector(state => state.auth)

 const onSubmit = (e) => {
  e.preventDefault();
  dispatch(startLoginWithEmailPassword({email,password}))
  navigate('/Cuenta')
 }
  return (
   <>
   <AnimatedPage>

   <Navbar/>
   <motion.div initial={{ opacity: 0 }}
    whileInView={{ opacity: 1,transition:{duration: 1}}}>
   <Box container display={'flex'} flexDirection={{xs:'column',sm:'column',md:'row'}}>
   <Box width={{xs:'100%'}}>
    <img width={'100%'} height={'100%'} src={'https://res.cloudinary.com/do5jvqtn9/image/upload/q_auto:low/v1659364255/Liberty-Ecommerce/Iniciar_Sesion_er3kdk.jpg'}/>
   </Box>
   <Box width={{xs:'100%'}} margin={'auto'}  textAlign={'center'} display={'flex'} flexDirection={'column'}>
    <Typography variant={'h2'} fontSize={{xs:'2rem',sm:'2.5rem',md:'2.7rem',lg:'3rem'}} mb={10}>INICIAR SESIÓN</Typography>
   <form onSubmit={onSubmit} style={{display:'flex', flexDirection:'column',justifyContent:'center', margin:'auto'}}>
    <TextField style={{marginBottom:'2rem'}} label="E-MAIL" value={email} onChange={onInputChange} name='email' variant="outlined" type={'email'}/>
    <TextField style={{marginBottom:'2rem'}} label="CONTRASEÑA" value={password} onChange={onInputChange} name='password' variant="outlined" type={'password'}/>
    <Button variant={'outlined'} style={{background:'black', color:'white', padding:'0.5rem',fontSize:'1rem'}} type={'submit'}>
      INICIAR SESIÓN
    </Button>
   </form>
   <Link to='/Registro'  style={{color:'black', marginTop:'1rem',fontSize:'1.2rem',textDecoration:'none' }} >¿No tienes cuenta?, Registrate!</Link>
   </Box>

   </Box>
   </motion.div>
   <Footer/>
   </AnimatedPage>
   </>
  )
}
