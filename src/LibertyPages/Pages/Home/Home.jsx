import React from 'react'
import { Footer, Navbar } from '../../Components'
import { AnimatedPage } from '../../Components/AnimatedPage/AnimatedPage'
import { Header, Sections,MasVendidos,Newsletter } from './components'

export const Home = () => {

  return (
    <>
    <AnimatedPage>
    <Navbar/>
    <Header/>
    <Sections/>
    <MasVendidos/>
    <Newsletter/>
    <Footer/>
    </AnimatedPage>
    </>
  )
}
