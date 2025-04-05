import React, { useEffect, useRef, useState } from 'react';

const Hero = () => {
  const backToTopRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 5);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      <div id="hero-section" className="md:h-[100dvh] h-[80dvh] rounded xl:px-[100px]">
        <div className="flex flex-col md:flex-row-reverse items-center justify-center gap-5 h-[80dvh] md:h-[100dvh] mt-[50px] md:mt-0">
          {/* <div data-aos="fade-zoom-in" data-aos-easing="ease-in-back" data-aos-delay="300" data-aos-offset="1">
            <img
              src="./images/image1.jpeg"
              className="w-[250px] border-[5px] rounded-full md:mt-0"
              alt="my head shot"
            />
            <p className="p-2 dark-theme w-fit mx-auto -translate-y-10 text-center rounded-2xl text-[12px] font-bold">
              Open to work
            </p>
          </div> */}

          <div
            className="px-5 flex flex-col gap-5"
            data-aos="fade-zoom-in"
            data-aos-easing="ease-in-back"
            data-aos-delay="300"
            data-aos-offset="1"
          >
            <h1 className="text-center text-2xl opacity-95">
              Hey, I'm Isaac
            </h1>

            <h1 className="text-6xl md:text-7xl lg:text-7xl font-bold text-center text-[#FFFFFF]">
              Building Innovative Solutions with Code.
            </h1>


            <hr className='border-gray-700 my-2 md:my-5' />

            <h2 className="text-2xl text-center opacity-95 hidden md:block">
              Web developer with a passion for creating scalable and efficient software
            </h2>

            <div className="flex flex-row flex-wrap items-center justify-center gap-x-2 gap-y-5">
              <div>
                <a
                  href="https://www.linkedin.com/in/isaac-opoku-manu"
                  target="_blank"
                  className="py-2.5 px-4 md:py-3 md:px-5 hover:bg-primaryColor bg-[#FFFFFF] hover:text-[#FFFFFF] w-fit rounded-3xl border ease-in-out duration-300 text-primaryColor text-[13px] md:text-[14px] font-bold cursor-pointer"
                  rel="noopener noreferrer"
                >
                  LinkedIn
                </a>
              </div>
              <div>
                <a
                  href="https://gradeone.vercel.app/"
                  target="_blank"
                  className="py-2.5 px-4 md:py-3 md:px-5 hover:bg-[#FFFFFF] bg-primaryColor w-fit rounded-3xl border ease-in-out duration-300 hover:text-primaryColor text-[#FFFFFF] text-[13px] md:text-[14px] font-bold cursor-pointer"
                  rel="noopener noreferrer"
                >
                  GradeOne
                </a>
              </div>
              <div>
                <a
                  href="mailto:isaacmanuopoku@gmail.com"
                  className="py-2.5 px-4 md:py-3 md:px-5 hover:bg-primaryColor bg-[#FFFFFF] hover:text-[#FFFFFF] w-fit rounded-3xl border ease-in-out duration-300 text-primaryColor text-[13px] md:text-[14px] font-bold cursor-pointer"
                >
                  Email
                </a>
              </div>
              <div>
                <a
                  href="https://github.com/Isaac-8080"
                  target="_blank"
                  className="py-2.5 px-4 md:py-3 md:px-5 hover:bg-primaryColor bg-[#FFFFFF] hover:text-[#FFFFFF] w-fit rounded-3xl border ease-in-out duration-300 text-primaryColor text-[13px] md:text-[14px] font-bold cursor-pointer"
                  rel="noopener noreferrer"
                >
                  Github
                </a>
              </div>
              <a
                href="./resume/Isaac-Opoku-Manu-resume.pdf"
                download="Isaac Opoku Manu - Resume"
                className="flex flex-row items-center gap-1 py-1.5 px-4 md:py-2 md:px-5 hover:bg-primaryColor bg-[#FFFFFF] hover:text-[#FFFFFF] w-fit rounded-3xl border ease-in-out duration-300 text-primaryColor font-bold cursor-pointer"
              >
                <span className="material-symbols-rounded">arrow_downward</span>
                <span className="text-[13px] md:text-[14px]">Resume</span>
              </a>
            </div>
          </div>
        </div>

        <a
          href="#"
          ref={backToTopRef}
          className={`material-symbols-rounded fixed bottom-5 right-5 font-bold border rounded-full p-2 cursor-pointer z-[1000] ${
            isVisible ? '' : 'hidden'
          } light-theme`}
          title="back to top"
        >
          arrow_upward
        </a>
      </div>
    </>
  );
};

export default Hero;
