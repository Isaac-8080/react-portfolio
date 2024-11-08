import React from 'react'

const NavbarSmList = (props) => {
  const getToggleNavIcon = () => {

    let getNavbar = document.querySelector('.sm-navbar')
    
    getNavbar.style.height = '0'
    
  };
  
  return (
    <>
      <li className="flex flex-row items-center gap-2 pl-2">
        <a href={props.link} onClick={getToggleNavIcon} className="exit-nav hover:text-primaryColor cursor-pointer">
        {props.name}
        </a>
      </li>
    </>
  )
}

export default NavbarSmList
