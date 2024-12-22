import React from 'react'

const Footer = () => {
  return (
    <>
      <footer className="px-5 lg:px-[150px] py-20">
        <span id="contact" className=""></span>
        <div className="flex flex-col items-center gap-5">
          
          <a href="https://github.com/Isaac-8080" target="_blank" className="hover:translate-y-2 ease-in-out duration-300">
            <img src="./icons/icons8-github-48.png" alt="github logo" srcSet="" title="github account" />
          </a>

          <div>
            <p className="text-darkTextColor text-medium"><span className="font-bold">Thanks for scrolling.</span> Can't wait to here from you!</p>
          </div>

          <div className="flex flex-row flex-wrap items-center gap-3">

            <a href="https://www.linkedin.com/in/isaac-opoku-manu?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3Bsy%2FrhL%2F0St26ZVB00Nfm6A%3D%3D" target="_blank" className="p-1 hover:bg-[lightgray] bg-[#FFFFFF] w-fit hover:translate-y-1 ease-in-out duration-200 rounded-3xl border border-primaryColor text-primaryColor text-[12px] font-bold"><img src="./icons/icons8-linked-in-48.png" className="w-[30px] " alt="" srcSet="" /></a>

            <a href="mailto:isaacmanuopoku@gmail.com" className="p-1 hover:bg-[lightgray] bg-[#FFFFFF] w-fit hover:translate-y-1 ease-in-out duration-200 rounded-3xl border border-primaryColor text-primaryColor text-[12px] font-bold">
              <img src="./icons/icons8-gmail-48.png" className="w-[30px]" alt="" srcSet="" />
            </a>
            
            <a href="tel:+233596811978" className="p-1 hover:bg-[lightgray] bg-[#FFFFFF] w-fit hover:translate-y-1 ease-in-out duration-200 rounded-3xl border border-primaryColor text-primaryColor text-[12px] font-bold">
              <span className="w-[30px] material-symbols-rounded">call</span>
            </a>

          </div>

        </div>

      </footer>
    </>
  )
}

export default Footer
