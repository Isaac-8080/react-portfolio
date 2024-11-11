import React from 'react'

const Hero = () => {

  document.addEventListener('scroll', () => {
    
    const backToTop =  document.querySelector('#backToTop').classList;

    window.scrollY > 5 ? backToTop.remove('hidden') : backToTop.add('hidden');
    
  });
  
  return (
    <>

      <div id="hero-section" className="h-[100dvh] rounded md:px-[150px]">

        <div className="flex flex-col md:flex-row-reverse items-center justify-end gap-5 h-[100dvh] mt-[20px] md:mt-0">

          <div data-aos="fade-zoom-in" data-aos-easing="ease-in-back" data-aos-delay="300" data-aos-offset="1">
            <img src="./images/image1.jpeg" className="w-[250px] border-[5px] rounded-full md:mt-0" alt="my head shot" />
          </div>
          
          <div className="px-5 md:px-0 flex flex-col gap-2" data-aos="fade-zoom-in" data-aos-easing="ease-in-back" data-aos-delay="300" data-aos-offset="1">
            
            <p className="px-2 bg-[#FFFFFF] w-fit rounded-lg border border-primary animate-bounce text-primaryColor text-[12px] font-medium mt-2">Open to work</p>

            <p className="font-bold text-[20px] text-left">Hey, I'm Isaac,</p>

            <h1 className="text-6xl font-black text-[#FFFFFF]">
              Building Innovative <br /> <span className="opacity-95 drop-shadow">Solutions with Code.</span>
            </h1>

            <h2 className="text-2xl font-black opacity-95 hidden md:flex">
              Full-stack developer with a passion for creating <br /> scalable and efficient software
            </h2>

            <div className="flex flex-row flex-wrap items-center gap-x-2 gap-y-5">

              <div>
                <a href="https://www.linkedin.com/in/isaac-opoku-manu?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3Bsy%2FrhL%2F0St26ZVB00Nfm6A%3D%3D" target="_blank" className="py-2 px-3 hover:bg-primaryColor bg-[#FFFFFF] hover:text-[#FFFFFF] w-fit rounded-3xl border border-primaryColor ease-in-out duration-300 text-primaryColor text-[12px] font-bold">LinkedIn</a>
              </div>

              <div>
                <a href="https://gradeone.vercel.app/" className="py-2 px-3 hover:bg-[#FFFFFF] bg-primaryColor w-fit rounded-3xl border border-primaryColor ease-in-out duration-300 hover:text-primaryColor text-[#FFFFFF] text-[12px] font-bold" target="_blank">GradeOne</a>
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
          
        </div>
        
        <a href="#" id="backToTop" className="material-symbols-rounded fixed bottom-5 right-5 font-bold border rounded-full p-2 cursor-pointer z-[1000] hidden light-theme" title="back to top">arrow_upward</a>
        
      </div>
    </>
  )
}

export default Hero
