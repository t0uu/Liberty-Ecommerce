import { Box, TextField,Button, Typography, Grid, Alert } from '@mui/material'
import React, {useState } from 'react'
import { Footer, Navbar } from '../../Components'
import {useDispatch,useSelector} from 'react-redux'
import {motion} from 'framer-motion'
import { AnimatedPage } from '../../Components/AnimatedPage/AnimatedPage'
import { useForm } from '../../../hooks/useForm'
import { startCreatingUserWithEmailPassword } from '../../../store/auth/thunks'
import {useNavigate } from 'react-router-dom'


const formData = {
  email: '',
  password: '',
  displayName: ''
}

const formValidations = {
  email: [(value) => value.includes('@'), 'El correo debe de tener una @'],
  password: [(value) => value.length >= 6, 'El password debe de tener más de 6 letras'],
  displayName: [(value) => value.length >= 1, 'El nombre es obligatorio'],
}


export const Register = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const {status,errorMessage} = useSelector(state => state.auth);
  const [formSubmitted, setFormSubmitted] = useState(false)

 const {displayName,email,password,onInputChange,formState,isFormValid,displayNameValid,passwordValid,emailValid} = useForm(formData,formValidations)
  const onSubmit = (e) => {
    e.preventDefault()
    if(!isFormValid) return;
    dispatch(startCreatingUserWithEmailPassword(formState))
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
    <img width={'100%'} height={'100%'} src={'https://res.cloudinary.com/do5jvqtn9/image/upload/q_auto:low/v1659364252/Liberty-Ecommerce/Crear_Cuenta_cpmtna.jpg'}/>
   </Box>
   <Box width={{xs:'100%'}} margin={'auto'}  textAlign={'center'} display={'flex'} flexDirection={'column'}>
    <Typography variant={'h2'} fontSize={{xs:'2rem',sm:'2.5rem',md:'2.7rem',lg:'3rem'}}  mb={10}>CREAR CUENTA</Typography>
   <form onSubmit={onSubmit} style={{display:'flex', flexDirection:'column',justifyContent:'center', margin:'auto'}}>
   <TextField style={{marginBottom:'2rem'}} label="NOMBRE" value={displayName} onChange={onInputChange} name='displayName' variant="outlined" type={'text'} error={!displayName && formSubmitted} helperText={displayNameValid}/>
    <TextField style={{marginBottom:'2rem'}} label="E-MAIL" value={email} onChange={onInputChange} name='email' variant="outlined" type={'email'} error={!!emailValid && formSubmitted} helperText={emailValid }/>
    <TextField style={{marginBottom:'2rem'}} label="CONTRASEÑA" value={password} onChange={onInputChange} name='password' variant="outlined" type={'password'} error={!!passwordValid && formSubmitted} helperText={passwordValid}/>
    <Grid container spacing={2} sx={{mb: 2, mt: 2}}>
              <Grid item xs={12} sm={12} display={!!errorMessage ? '' : 'none'}>
              <Alert severity='error'>
                {errorMessage}
              </Alert>
    </Grid>
    </Grid>
    <Button  variant={'outlined'} style={{background:'black', color:'white', padding:'0.5rem',marginBottom:'1rem',fontSize:'1rem'}} type={'submit'}>
    Crear Cuenta
    </Button>
   </form>
   </Box>
   </Box>
    </motion.div>
    <Footer/>
    </AnimatedPage>
    </>
  )
}
