import { Box } from '@mui/system'
import React from 'react'
import {motion} from 'framer-motion'
import { Button, Typography } from '@mui/material'
import { useNavigate } from 'react-router-dom'
export const Header = () => {
  const navigate = useNavigate()

  return (
    <>
    {/*--- Header Mobile ----*/}
    <Box display={{sm:'none'}}>
    <motion.div initial={{ opacity: 0 }}
    whileInView={{ opacity: 1,transition:{duration: 1}}} style={{display:'flex', justifyContent:'center'}}>
  <Box width={'300px'}>
  <Box display={'flex'} justifyContent={'center'} flexDirection={'column'} width={{xs:'100%'}} height={{xs:'350px'}} alignItems={'center'} 
    sx={{backgroundImage: `url('https://res.cloudinary.com/do5jvqtn9/image/upload/q_auto/v1659364246/Liberty-Ecommerce/Header_d86dnm.png')`,backgroundRepeat:'no-repeat',backgroundSize:'cover'}}>
      <Box style={{position:'relative',bottom:'9.3rem',textAlign:'center'}}>
        <Typography color={'white'} fontWeight={700} fontSize={{xs:'0.9rem',sm:'1.5rem'}}>SIEMPRE HACIA DELANTE</Typography>
        <Typography color={'white'} fontWeight={700} fontSize={{xs:'0.9rem',sm:'1.5rem'}}>NUNCA PARAMOS</Typography>
      </Box>
        <Box display={'flex'} position={'absolute'} bottom={'0'} top={'0'} textAlign={'center'} justifyContent={'center'}>
        <Box mt={{xs:25}}>
        <Button style={{marginTop:'9rem',color:'white',background:'#181818'}} onClick={() => navigate('/Shop')}>
          SHOP
        </Button>
        </Box>
        </Box>
        
     </Box>
      <hr/>
    </Box>
    </motion.div>
    </Box>

    {/* ----Header Desktop */}

<motion.div initial={{ opacity: 0 }}
   whileInView={{ opacity: 1,transition:{duration: 1}}}>
    <Box display={{xs:'none',sm:'block',md:'block'}} width={'100%'} height={'100vh'} sx={{backgroundImage: `url('https://res.cloudinary.com/do5jvqtn9/image/upload/v1660265869/Liberty-Ecommerce/afiq-fatah-1cVmsgAkm9A-unsplash_yp81fc.jpg')`,backgroundRepeat:'no-repeat',backgroundSize:'cover',backgroundPosition:'0 0',}}>
      <Box display={'flex'} justifyContent={{sm:'center',md:'end'}}>
        <Box width={{sm:'600px'}}  mt={20} mr={{md:'10px'}} textAlign={'center'}>
      <Typography color={'white'} fontWeight={700} fontSize={'3rem'}>SIEMPRE HACIA DELANTE</Typography>
        <Typography color={'white'} fontWeight={700} fontSize={'3rem'}>NUNCA PARAMOS</Typography>
        <Button style={{fontSize:'2rem',padding:'1rem 1rem',marginTop:'9rem',color:'white',background:'#181818'}} onClick={() => navigate('/Shop')}>
          SHOP
        </Button>
        </Box>
      </Box>
    </Box>
</motion.div>
    </>
  )
}
