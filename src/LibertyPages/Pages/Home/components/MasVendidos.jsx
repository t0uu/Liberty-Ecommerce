import { Box} from '@mui/material'
import React, { useEffect, useRef, useState } from 'react'
import { Link as LinkRouter }  from 'react-router-dom'
import Link from '@mui/material/Link'
import { Data } from '../../../../data/Data'
import {motion} from 'framer-motion'

export const MasVendidos = () => {
    const [width, setWidth] = useState(0)
    const carousel = useRef()

    useEffect(() => {
    setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth)
    },[])
  return (
    <>
   
    <Box textAlign={'center'} borderBottom={'1px solid black'} p={2}  >
        <h2 style={{fontSize:'32px'}}>MÁS VENDIDOS</h2>
    <motion.div    ref={carousel} style={{cursor:'grabbing',overflow:'hidden'}} >
        <motion.div  drag='x' dragConstraints={{right:width, left: -width}} style={{textAlign:'center',alignItems:'center',display:'flex', justifyContent:'center', gap:10}} >
        {
            Data.slice(0,7).map(Product => (
                <Box  key={Product.id} margin={'2rem'}>
                        <Link as={LinkRouter}  to={`/product/${Product.Nombre}`} style={{textDecoration:'none',color:'black'}}>
                <Box  width={{xs:'225px'}} border={'1px solid rgba(0,0,0,0.7)'} boxShadow={'0px 0px 4px 4px rgba(0, 0, 0, 0.03)'}>
                   <Box>
                    <img onMouseOver={e => e.currentTarget.src = `${Product.Image[1]}`} onMouseOut={e => e.currentTarget.src = `${Product.Image[0]}`} src={Product.Image[0]} width={'100%'} />
                   </Box>
                    <Box display={'flex'} justifyContent={'space-around'} alignItems={'center'}>
                        <h2 style={{fontSize:'16px',textTransform:'uppercase'}}>{Product.Nombre.slice(0,19)}</h2>
                        <p style={{fontWeight:700}}>${Product.Precio.toPrecision(5)}</p>
                    </Box>
                </Box>
                </Link>
                </Box>
                ))
            }
            </motion.div>
    </motion.div>            
</Box>
</>
  )
}
