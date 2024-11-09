import React from 'react'
import NavbarSm from './NavbarSm'
import NavbarMd from './NavbarMd'

const Navbar = () => {
  
  return (
    <>
      
      {/* Navbar form medium scrren and above */}
      <NavbarMd />

      {/* Navbar form small scrren and below */}
      <NavbarSm />

    </>
  )
}

export default Navbar