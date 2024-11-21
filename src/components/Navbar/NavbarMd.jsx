import React from 'react'
import NavbarMdList from './NavbarMdList';

const NavbarMd = () => {

  const getToggleNavIcon = () => {

    const getNavbar = document.querySelector('.sm-navbar');

    const getNavbarUl = document.querySelector('.sm-navbar ul');
    
    getNavbarUl.style.visibility = 'visible';
  
    getNavbar.style.height = '100%';
      
  };

  const navDetails = [

    {
      name: "",
      link: "#",
      icon: "./icons/home.png",
    },

    {
      name: "",
      link: "#projects",
      icon: "./icons/feature.png",
    },

    {
      name: "",
      link: "#about",
      icon: "./icons/info.png",
    },

    {
      name: "",
      link: "#skills",
      icon: "./icons/service.png",
    },

    {
      name: "",
      link: "#contact",
      icon: "./icons/contact.png",
    },

  ]

  return (
    <>
      <nav>

        <a href="https://github.com/Isaac-8080" className="fixed z-[500] left-5 top-5" target="_blank">
          <img src="./icons/icons8-github-48.png" className="w-[40px] cursor-pointer border border-primaryColor bg-[#F2F2F2] rounded-full" alt="brand-image" />
        </a>

        <span className="material-symbols-rounded md:hidden fixed top-5 right-5 light-theme border border-primaryColor bg-[#F2F2F2] navbar rounded-full opacity-95 h-[40px] md:h-[0] p-2 md:p-0 z-[500] cursor-pointer" id="toggleNavIcon" onClick={getToggleNavIcon}>
          more_horiz
        </span>
          
        <div className="fixed top-5 right-5 bg-[#F2F2F2] text-[#111] p-2 rounded-full z-[500] hidden md:flex border border-primaryColor">
          
          {/* <!-- nav links --> */}
          <ul className="flex flex-col gap-5 h-[25px] overflow-hidden hover:h-full ease-in-out duration-1000 opacity-95">
  
            <li className="ease-in-out duration-300">
              <span className="material-symbols-rounded hidden md:flex cursor-pointer">
                more_horiz
              </span>
            </li>

            {
            navDetails.map((item, index) => (<NavbarMdList key={index} link={item.link} icon={item.icon} />))
            }

            {/* <span className="material-symbols-rounded theme-btn cursor-pointer hidden md:flex">
              light_mode
            </span> */}

          </ul>
          
        </div>

      </nav>
    </>
  )
}

export default NavbarMd
