import React from 'react'

const OperatingSystems = () => {
  return (
    <>
      <div className="w-fit">

        <h4 className="text-primaryColor font-bold" data-aos="zoom-in-out" data-aos-duration="1000">Operating Systems</h4>
        <div className="cursor-pointer drop-shadow-md">

          <div className="my-3 flex flex-row items-center gap-1">
            <img src="./icons/icons8-windows-48.png" className="w-7" alt="Windows logo" rcset="" />
            <span>Windows</span>
          </div>
          
          <div className="my-3 flex flex-row items-center gap-1">
            <img src="./icons/icons8-linux-48.png" className="w-7" alt="Linux logo" rcset="" />
            <span>Linux</span>
          </div>

        </div>

      </div>
    </>
  )
}

export default OperatingSystems
