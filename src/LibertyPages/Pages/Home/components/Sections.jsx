import { Box, Grid, Typography} from '@mui/material'
import {motion} from 'framer-motion'
import { Link as LinkRouter }  from 'react-router-dom'
import Link from '@mui/material/Link'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
export const Sections = () => {
  return (
   <motion.div initial={{ opacity: 0 }}
   whileInView={{ opacity: 1,transition:{duration: 1}}} style={{display:'flex', justifyContent:'center'}}>
    <Grid container alignItems={'center'} textAlign={'center'} justifyContent={'center'} borderBottom={'1px solid black'}>

        <Grid item width={{xs:'100%',md:'50%'}} borderBottom={{xs:'1px solid black',md:'none'}}>
        <motion.div style={{display:'flex',justifyContent:'center'}}>
           <Box display={'flex'} justifyContent='center' flexDirection='column' textAlign={'center'} width={{xs:'230px',sm:'40%',md:'60%'}} p={1} >
            <img src={'https://res.cloudinary.com/do5jvqtn9/image/upload/q_auto:low/v1659364262/Liberty-Ecommerce/Section-Indumentaria_yvcq2h.jpg'} width={'100%'} height={'400px'}/>
           <Link as={LinkRouter} to={'/Shop/Indumentaria'} color={'black'} underline={'none'}>
            <Box display={'flex'} justifyContent={'center'} alignSelf={'center'} alignContent={'center'} alignItems={'center'}>
            <Typography color={'black'} fontSize={{xs:'1.2rem',lg:'2rem'}}>
            INDUMENTARIA 
            </Typography>
            <ArrowForwardIcon style={{width:'1.2rem'}}/>
            </Box>
           </Link>
            </Box>
        </motion.div>
        </Grid>
        <Grid item width={{xs:'100%',md:'50%'}} >
         <motion.div style={{display:'flex',justifyContent:'center'}} >
            <Box display={'flex'} justifyContent='center' flexDirection='column' textAlign={'center'}  width={{xs:'230px',sm:'40%',md:'60%'}} m={'auto'}  p={1}  >
            <img src={'https://res.cloudinary.com/do5jvqtn9/image/upload/q_auto:low/v1659364259/Liberty-Ecommerce/Section-Zapatillas_fdf7qy.jpg'} width={'100%'} height={'400px'} />
            <Link as={LinkRouter} to={`/Shop/Zapatillas`} color={'black'} underline={'none'}>
            <Box display={'flex'} justifyContent={'center'} alignSelf={'center'} alignContent={'center'} alignItems={'center'}>
            <Typography color={'black'} fontSize={{xs:'1.2rem',lg:'2rem'}}>
            ZAPATILLAS
            </Typography>
            <ArrowForwardIcon style={{width:'1.2rem'}}/>
            </Box>
            </Link>
            </Box>
         </motion.div>
        </Grid>
     </Grid>
     </motion.div>
  )
}
