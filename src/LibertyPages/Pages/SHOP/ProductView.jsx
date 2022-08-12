import { Accordion, AccordionDetails, AccordionSummary, Button, FormControl, InputLabel, MenuItem, Select,Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, {useState } from 'react'
import { useDispatch} from 'react-redux/es/exports';
import {useParams} from 'react-router-dom'
import 'sweetalert2/src/sweetalert2.scss'
import { onAddToCart } from '../../../store/Cart/CartSlice';
import { Footer, Navbar } from '../../Components';
import { AnimatedPage } from '../../Components/AnimatedPage/AnimatedPage';
import {motion} from 'framer-motion'
import Carousel from 'nuka-carousel'
export const ProductView = ({data}) => {

  const dispatch = useDispatch()
  const [Talle, setTalle] = useState(null);
  const [Error, setError] = useState(false)
  const [ImageView, setImageView] = useState(0)
  const {product} = useParams();

  const handleChange = (event) => {
    setTalle(event.target.value)
  };
    const onSubmit = (event) => {
      setError(!Talle)
      event.preventDefault();
      const newProduct = {
      id: data.filter(products => products.Nombre === product ).map(products => products.id).pop(products => products.id),
      Nombre: product,
      Talle: Talle,
      Precio: data.filter(products => products.Nombre === product).map(products => products.Precio).pop(products => products.Precio),
      Image: data.filter(products => products.Nombre === product).map(products => products.Image[0]).pop(products => products.Image),
      quantity: 1,
    }

      dispatch(onAddToCart(newProduct))
    
  }

  return (
    <>
    <AnimatedPage>
    <Navbar/>
       <Box display={{xs:'none',sm:'none',md:'block'}} width={{xl:'1320px'}} margin={{lg:'5rem auto',xl:'10rem auto'}} >
        {
          data.filter(products => products.Nombre === product).map(products => (
               <Box  key={products.id} contained display={'flex'} justifyContent={'center'} alignContent={'center'} >
               <Box  display={'flex'} flexDirection={'row'} width={'50%'} m={2}>
                <Box display={'flex'} flexDirection={'column'} p={1}>
                  <Box >

                  <button onClick={() => setImageView(0)} style={{cursor:'pointer'}}>
                  <img  width={'100px'} height={'100px'} src={`${products.Image[0]}`}  />
                  </button>
                  </Box>
                  <Box>
                  <button onClick={() => setImageView(1)} style={{cursor:'pointer'}}>
                  <img width={'100px'} height={'100px'} src={`${products.Image[1]}`} />
                  </button>
                  </Box>
                  <Box>
                  <button onClick={() => setImageView(2)} style={{cursor:'pointer'}}>
                  <img width={'100px'} height={'100px'} src={`${products.Image[2]}`} />
                  </button>
                  </Box>
                  <Box>
                   { (products.Image[3] === undefined) ? 
                   null
                   :
                   <button onClick={() => setImageView(3)} style={{cursor:'pointer'}}>
                   <img width={'100px'} height={'100px'} src={`${products.Image[3]}`} /></button>

                    }
                  </Box>
                </Box>
             
                    <Box width={'100%'} height={{md:'450px',lg:'500px'}}>
                   <motion.img  width={'100%'} height={'100%'} src={`${products.Image[ImageView]}`} alt={products.Nombre}/>
                    </Box>
                </Box>
                <Box width={'50%'}  display={'flex'} flexDirection={'column'}>
                    <Typography variant={'h2'} style={{textTransform:'uppercase',fontSize:'3rem',padding:0,margin:0,fontFamily:`'Khand',sans-serif`,fontWeight:700 }}>{products.Nombre}</Typography>
                    <Typography variant={'p'} style={{fontSize:'32px',fontWeight:700,padding:0,margin:0,fontFamily:`'Khand',sans-serif`,fontWeight:700}}>${products.Precio.toPrecision(5)}</Typography>
                    <FormControl style={{width:'50%'}}>
                    <InputLabel  id="demo-simple-select-label">Seleccionar Talle</InputLabel>
                    <Select value={Talle}  onSubmit={onSubmit} labelId="demo-simple-select-label" id="demo-simple-select"  label="Seleccionar Talle" onChange={handleChange}>
                    <MenuItem  value={products.Talle[0]}>{products.Talle[0]}</MenuItem>
                    <MenuItem value={products.Talle[1]}>{products.Talle[1]}</MenuItem>
                    <MenuItem value={products.Talle[2]}>{products.Talle[2]}</MenuItem>
                    <MenuItem value={products.Talle[3]}>{products.Talle[3]}</MenuItem>
                    <MenuItem value={products.Talle[4]}>{products.Talle[4]}</MenuItem>
                    </Select>
                    </FormControl>
                    <Box pt={2} width={'50%'} m={'1rem 0rem'}>
                    {
                      (Talle === null) ?
                        <Button disabled={true} onClick={onSubmit} type={'submit'} style={{background:'gray',color:'white',padding:'0.5rem 0.5rem'}}>
                      Selecciona un Talle
                    </Button>
                    : <Button disabled={false} onClick={onSubmit} type={'submit'} style={{background:'black',color:'white',padding:'0.5rem 0.5rem'}}>
                    AGREGAR AL CARRITO
                  </Button>

                    }

                    </Box>
                    <Box width={'100%'}  >
                    <Accordion expanded={true} >
        <AccordionSummary
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>Detalles del Producto</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography fontSize={'0.7rem'}>
            {products.Details}
          </Typography>
        </AccordionDetails>
      </Accordion>
                    </Box>
                </Box>
               </Box>
            )
            )
        }
              </Box>

    <Box display={{md:'none'}}>
      {data.filter(products => products.Nombre === product).map(products => (
         <>
         <Box width={{xs:'100%',sm:'100%'}}>
         <Carousel defaultControlsConfig={{
          nextButtonText: '>',
          nextButtonStyle: {
            color: 'black',
            background:'none',
            fontSize: '1.5rem'
          },
          prevButtonText: '<',
          prevButtonStyle:{
            color: 'black',
            background:'none',
            fontSize: '1.5rem'
          },
         }}  animation='fade' adaptiveHeight={false}>
          <img src={`${products.Image[0]}`} width={'100%'}/>
          <img src={`${products.Image[1]}`} width={'100%'}/>
          <img src={`${products.Image[2]}`} width={'100%'} />
          <img src={`${products.Image[3]}`}  width={'100%'}/>
         </Carousel>
         </Box>
         <Box >
         <Box width={'100%'} justifyContent={'center'} display={'flex'} flexDirection={'column'}>
          <Typography variant={'h2'} style={{textTransform:'uppercase',fontSize:'2rem',padding:0,margin:'1rem 0.5rem',fontFamily:`'Khand',sans-serif`,fontWeight:700 }}>{products.Nombre}</Typography>
          <Typography variant={'p'} style={{fontSize:'32px',fontWeight:700,padding:0,margin:'1rem 0.5rem',fontFamily:`'Khand',sans-serif`}}>${products.Precio.toPrecision(5)}</Typography>
          
          <Box width={{xs:'230px',sm:'350px'}}>
          <FormControl style={{width:'100%',margin:'0rem 1rem'}}>
          <InputLabel id="demo-simple-select-label">Seleccionar Talle</InputLabel>
          <Select value={Talle}    onSubmit={onSubmit} labelId="demo-simple-select-label" id="demo-simple-select"  label="Seleccionar Talle" onChange={handleChange}>
          <MenuItem  value={products.Talle[0]}>{products.Talle[0]}</MenuItem>
          <MenuItem value={products.Talle[1]}>{products.Talle[1]}</MenuItem>
          <MenuItem value={products.Talle[2]}>{products.Talle[2]}</MenuItem>
          <MenuItem value={products.Talle[3]}>{products.Talle[3]}</MenuItem>
          <MenuItem value={products.Talle[4]}>{products.Talle[4]}</MenuItem>
          </Select>
          </FormControl>
          </Box>
          <Box pt={2} width={'50%'} m={'1rem 0rem'}>
          {
            (Talle === null) ?
              <Button disabled={true} onClick={onSubmit} type={'submit'} style={{background:'gray',color:'white',width:'230px',color:'white',padding:'0.5rem 0rem',margin:'0rem 1rem'}}>
            Selecciona un Talle
          </Button>
          : <Button disabled={false} onClick={onSubmit} type={'submit'} style={{background:'black',width:'230px',color:'white',padding:'0.5rem 0rem',margin:'0rem 1rem',fontSize:'0.9rem'}}>
          AGREGAR AL CARRITO
        </Button>

          }

          </Box>
          <Box width={'100%'}  >
          <Accordion expanded={true} >
<AccordionSummary
aria-controls="panel1a-content"
id="panel1a-header"
>
<Typography>Detalles del Producto</Typography>
</AccordionSummary>
<AccordionDetails>
<Typography fontSize={'0.8rem'}>
  {products.Details}
</Typography>
</AccordionDetails>
</Accordion>
          </Box>
      </Box>
     </Box>
     </>
        ))
        }
    </Box>

    <Footer/>
    </AnimatedPage>
    </>

  )
}
