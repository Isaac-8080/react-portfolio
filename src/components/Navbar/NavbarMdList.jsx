import React from 'react'

const NavbarMdList = (props) => {
  return (
    <>
      <li className="ease-in-out duration-300 cursor-pointer">
        <a href={props.link} className="hover:text-primaryColor">
          <img src={props.icon} className="w-[25px] opacity-[50%] hover:opacity-[90%]" alt="" />
        </a>
      </li>
    </>
  )
}

export default NavbarMdList
