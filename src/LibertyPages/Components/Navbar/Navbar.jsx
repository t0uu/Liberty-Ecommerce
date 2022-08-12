import React, { useState } from 'react'

import { NavbarDesktop } from './Components/NavbarDesktop'
import { NavbarMobile } from './Components/NavbarMobile'
export const Navbar = () => {

    const HoverMe = {
        '&:hover':{             
            color: 'gray',
            cursor: 'pointer',
        }
    }
  return (
    <>
    <NavbarDesktop HoverMe={HoverMe}/>
    {/* --- Navbar Mobile --- */}
    <NavbarMobile HoverMe={HoverMe}  />
    </>
  )
}
