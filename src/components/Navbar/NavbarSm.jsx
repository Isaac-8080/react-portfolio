// import React, { useState } from 'react'
import NavbarSmList from './NavbarSmList';

const NavbarSm = () => {

  // const [navToggle, setNavToggle] = useState(true);

  const getToggleNavIcon = () => {

    let getNavbar = document.querySelector('.sm-navbar')
    
    getNavbar.style.height = '0'
    
  };

  const navDetails = [

    {
      id: 1,
      name: "Home",
      link: "#",
      icon: "./icons/home.png",
    },

    {
      id: 2,
      name: "Projects",
      link: "#projects",
      icon: "./icons/feature.png",
    },

    {
      id: 3,
      name: "About",
      link: "#about",
      icon: "./icons/info.png",
    },

    {
      id: 4,
      name: "Skills",
      link: "#skills",
      icon: "./icons/service.png",
    },

    {
      id: 5,
      name: "Contact",
      link: "#contact",
      icon: "./icons/contact.png",
    },

  ]
  
  return (
    <>
    
      <nav id="sm-navbar" className="sm-navbar dark-theme shadow-lg md:hidden z-[500]">

        {/* <!-- sm nav links --> */}
        <ul className="py-5 px-3 flex flex-col gap-5">
          
          <li className="flex flex-row items-center justify-between pr-5">

            <a href="https://github.com/Isaac-8080" target="_blank">
              <img src="./icons/icons8-github-48.png" className="w-[40px] cursor-pointer" alt="brand-image" />
            </a>
            
            <span onClick={getToggleNavIcon} className="exit-nav material-symbols-rounded">close</span>

          </li>

          {
            navDetails.map((item, index) => (
              <NavbarSmList key={index} name={item.name} link={item.link} />
            ))
          }

          {/* <span id="theme-icon" className="material-symbols-rounded theme-btn cursor-pointer ml-2 absolute bottom-5 border p-2 rounded-md">
            light_mode
          </span> */}
          
        </ul>

      </nav>
    </>
  )
}

export default NavbarSm
