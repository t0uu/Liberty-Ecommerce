import React from 'react'
import { Footer, Navbar } from '../LibertyPages/Components'

export const Layout = ({children}) => {
  return (
    <>
    <Navbar/>
    {children}
    <Footer/>
    </>
  )
}
