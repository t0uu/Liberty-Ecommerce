import { AnimatePresence } from 'framer-motion'
import React from 'react'
import { Navigate, Route, Routes, useLocation } from 'react-router-dom'
import {Data} from '../data/Data'
import { ProtectedRoute } from '../LibertyPages/Components/ProtectedRoute/ProtectedRoute'
import { Account } from '../LibertyPages/Pages/Account/Account'
import { Cuenta } from '../LibertyPages/Pages/Account/Cuenta'
import { Register } from '../LibertyPages/Pages/Account/Register'
import { Cart } from '../LibertyPages/Pages/Cart/Cart'
import { Home } from '../LibertyPages/Pages/Home/Home'
import { Indumentaria } from '../LibertyPages/Pages/SHOP/Indumentaria/Indumentaria'
import { ProductView } from '../LibertyPages/Pages/SHOP/ProductView'
import { Shop } from '../LibertyPages/Pages/SHOP/Shop'
import { Zapatillas } from '../LibertyPages/Pages/SHOP/Zapatillas/Zapatillas'
import { useCheckAuth } from '../hooks/useCheckAuth'
import { Agradecimiento } from '../LibertyPages/Pages/Agradecimiento/Agradecimiento'
export const AppRouter = () => {

  const location = useLocation();
  const {status} = useCheckAuth();
    return ( 
<>
    <AnimatePresence exitBeforeEnter>
      <Routes key={location.pathname} location={location}>
        <Route path='/' element={<Home/>}/>
        <Route path='/Shop' element={<Shop/>}/>
        <Route path='/Shop/Indumentaria' element={<Indumentaria data={Data}/>} />
        <Route path='/Shop/Zapatillas' element={<Zapatillas data={Data}/>} />
        <Route path='/Cart' element={<Cart/>}/>
       
        <Route exact path='product' element={<ProductView data={Data}/>}>
        <Route exact path={`/product/:product`} element={<ProductView data={Data}/>}/></Route>
        <Route path='/Registro' element={<Register/>}/>
        { status === 'login' ?
          <Route element={<ProtectedRoute isLogged={status}/>}>
          <Route path='/Cuenta' element={<Cuenta/>}/>
        </Route>
          :
          <Route path='/Login' element={<Account/>}/>
          }

             <Route path='/Agradecimiento' element={<Agradecimiento/>}/> 
          <Route path='/*' element={<Navigate to='/'/>} />
        
    
    </Routes>        
    </AnimatePresence>      
               </>

  )
}
