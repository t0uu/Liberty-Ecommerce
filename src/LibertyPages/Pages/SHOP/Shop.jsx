import { Box, Button} from '@mui/material'
import React, { useEffect,useState } from 'react'
import { Link } from 'react-router-dom'
import { Footer, Navbar } from '../../Components'
import {motion,AnimatePresence} from 'framer-motion'
import { Data } from '../../../data/Data'
import { AnimatedPage } from '../../Components/AnimatedPage/AnimatedPage'

export const Shop = () => {
  const [popular, setPopular] = useState(Data);
  const [filtered, setFiltered] = useState(Data);
  const [activeVariant, setActiveVariant] = useState('')
 
  useEffect(() =>  {
    if(activeVariant === ''){
      setFiltered(popular);
      return;
    }
    const filtered = popular.filter((product) => product.Variant.includes(activeVariant))
    setFiltered(filtered)
  },[activeVariant])

const  onTargetValue = (e) => {
    setActiveVariant(e.target.value)
  }
  return (
    <>
    <AnimatedPage>

    <Navbar/>
    <Box display={'flex'}  flexWrap={'wrap'} justifyContent='center'>
    <Button value='' style={{background:`${activeVariant === '' ? 'black' : 'none'}`,color:`${activeVariant === '' ? 'white' : 'black'}`   }} onClick={onTargetValue}>All</Button>
    <Button value='Remera' style={{background:`${activeVariant === 'Remera' ? 'black' : 'none'}` , color:`${activeVariant === 'Remera' ? 'white' : 'black'}` }} onClick={onTargetValue}>Remera</Button>
    <Button value='Zapatilla' style={{background:`${activeVariant === 'Zapatilla' ? 'black' : 'none'}`,color:`${activeVariant === 'Zapatilla' ? 'white' : 'black'}`  }} onClick={onTargetValue}>Zapatilla</Button>
    <Button value='Pantalones' style={{background:`${activeVariant === 'Pantalones' ? 'black' : 'none'}`, color:`${activeVariant === 'Pantalones' ? 'white' : 'black'}` }} onClick={onTargetValue}>Pantalones</Button>
    </Box>
    <motion.div style={{textAlign:'center', alignItems:'center',display:'flex', gap:10,flexWrap:'wrap',justifyContent:'center',margin:'2rem'}}  >
       <AnimatePresence>

        {
         filtered.map(Product => (
          <motion.div key={Product.id}  whileTap={{opacity:0}} whileHover={{ transition: '1s' }} animate={{opacity: 1}} initial={{opacity: 0}} exit={{opacity: 0}} layout>
                <Link  to={`/product/${Product.Nombre}`} style={{textDecoration:'none',color:'black'}}>
                <Box  marginRight={'0.5rem'} >
                <Box  sx={{maxWidth: 300, height: 300}} border={'1px solid rgba(0,0,0,0.7)'} boxShadow={'0px 0px 4px 4px rgba(0, 0, 0, 0.03)'}>
                    <motion.img  onMouseOver={e => e.currentTarget.src = `${Product.Image[1]}`} onMouseOut={e => e.currentTarget.src = `${Product.Image[0]}`} src={`${Product.Image[0]}`} width={'250px'} height={'250px'}/>
                    <Box display={'flex'} justifyContent={'space-around'} alignItems={'center'}>
                        <h2 style={{fontSize:'16px',textTransform:'uppercase'}}>{Product.Nombre.slice(0,19)}</h2>
                        <p style={{fontWeight:700}}>${Product.Precio.toPrecision(5)}</p>
                    </Box>
                </Box>
                </Box>
                </Link>
          </motion.div>
                ))
            }
       </AnimatePresence>
    </motion.div>

    <Footer/>
    </AnimatedPage>
    </>
  )
}
