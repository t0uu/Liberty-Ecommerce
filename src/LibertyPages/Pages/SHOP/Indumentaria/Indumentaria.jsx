import React from 'react'
import { Footer, Navbar } from '../../../Components'
import {motion} from 'framer-motion'
import { Box } from '@mui/material'
import { Link} from 'react-router-dom'

export const Indumentaria = ({data}) => {
    return (
    <>
    <Navbar/>
    <Box>
        </Box>     
    <motion.div   initial={{ opacity: 0 }}
  whileInView={{ opacity: 1 }}>
    <Box textAlign={'center'} alignItems={'center'} justifyContent={'center'} display={'flex'} gap={10} flexWrap={'wrap'} >
        {
         data.filter(product => product.Categoria === 'Indumentaria').map(Product => (
                <Link key={Product.id} to={`/product/${Product.Nombre}`} style={{textDecoration:'none',color:'black'}}>
                <Box  marginRight={'0.5rem'}>
                <Box  sx={{maxWidth: 300, height: 300}} border={'1px solid rgba(0,0,0,0.7)'} boxShadow={'0px 0px 4px 4px rgba(0, 0, 0, 0.03)'}>
                    <img  onMouseOver={e => e.currentTarget.src = `${Product.Image[1]}`} onMouseOut={e => e.currentTarget.src = `${Product.Image[0]}`} src={`${Product.Image[0]}`} width={'250px'} height={'250px'}/>
                    <Box display={'flex'} justifyContent={'space-around'} alignItems={'center'}>
                        <h2 style={{fontSize:'16px',textTransform:'uppercase'}}>{Product.Nombre.slice(0,19)}</h2>
                        <p style={{fontWeight:700}}>${Product.Precio.toPrecision(5)}</p>
                    </Box>
                </Box>
                </Box>
                </Link>
                ))
            }
    </Box>
    </motion.div>

    <Footer/>
    </>
  )
}
