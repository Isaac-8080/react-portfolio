import React from 'react'

const About = () => {
  return (
    <>
      {/* <!-- About me container --> */}
      <div className="">

        <h4 className="text-primaryColor font-bold" data-aos="zoom-in-out" data-aos-duration="1000">About Me</h4>

        <div className="flex flex-row items-center rounded-2xl cursor-pointer drop-shadow-md" data-aos="zoom-in-out" data-aos-duration="1500">

          <p className="my-3">
            Passionate software developer with a love for crafting 
            elegant and efficient solutions. My journey in the world
            of coding began with a curiosity that quickly turned 
            into a burning desire to create impactful applications. 
            With a strong foundation in various programming languages 
            and a knack for problem-solving, I thrive in dynamic 
            environments where innovation is key. I believe in continuous 
            learning and adapting to the ever-evolving tech landscape. 
            Join me as I embark on new challenges, translating ideas into 
            lines of code that shape the digital landscape.
          </p>

        </div>

        <div className="flex flex-row flex-wrap items-center gap-2" data-aos="zoom-in-out" data-aos-duration="1000">

          <div>
            <a href="https://www.linkedin.com/in/isaac-opoku-manu?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3Bsy%2FrhL%2F0St26ZVB00Nfm6A%3D%3D" target="_blank" className="py-2 px-3 hover:bg-primaryColor bg-[#FFFFFF] hover:text-[#FFFFFF] w-fit rounded-3xl border border-primaryColor ease-in-out duration-300  text-primaryColor text-[12px] font-bold">LinkedIn</a>
          </div>

          <div>
            <a href="mailto:isaacmanuopoku@gmail.com" className="py-2 px-3 hover:bg-primaryColor bg-[#FFFFFF] hover:text-[#FFFFFF] w-fit rounded-3xl border border-primaryColor ease-in-out duration-300  text-primaryColor text-[12px] font-bold">Email</a>
          </div>
          
          <div>
            <a href="https://github.com/Isaac-8080" target="_blank" className="py-2 px-3 hover:bg-primaryColor bg-[#FFFFFF] hover:text-[#FFFFFF] w-fit rounded-3xl border border-primaryColor ease-in-out duration-300  text-primaryColor text-[12px] font-bold">Github</a>
          </div>

          <a href="./resume/Isaac-Opoku-Manu.pdf" download="Isaac Opoku Manu - Resume" className="flex flex-row items-center gap-1 py-1 px-3 hover:bg-primaryColor bg-[#FFFFFF] hover:text-[#FFFFFF] w-fit rounded-3xl border border-primaryColor ease-in-out duration-300  text-primaryColor text-[12px] font-bold">
            <span className="material-symbols-rounded">arrow_downward</span>
            <span>Resume</span>
          </a>

        </div>

      </div>
    </>
  )
}

export default About
