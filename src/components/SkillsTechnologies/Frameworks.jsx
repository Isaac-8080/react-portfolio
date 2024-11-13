import React from 'react'

const Frameworks = () => {
  return (
    <>
      {/* <!-- Development Frameworks container --> */}
      <div className="w-fit">

        <h4 className="text-primaryColor font-bold" data-aos="zoom-in-out" data-aos-duration="1000">Development Frameworks</h4>
        <div className="cursor-pointer drop-shadow-md">

          <div className="my-3 flex flex-row items-center gap-1">
            <img src="./icons/icons8-react-48.png" className="w-7" alt="JavaScript logo" rcset="" />
            <span>React JS</span>
          </div>

          <div className="my-3 flex flex-row items-center gap-1">
            <img src="./icons/icons8-tailwind-css-48.png" className="w-7" alt="JavaScript logo" rcset="" />
            <span>Tailwind CSS</span>
          </div>
          
          <div className="my-3 flex flex-row items-center gap-1">
            <img src="./icons/icons8-bootstrap-48.png" className="w-7" alt="Bootstrap logo" rcset="" />
            <span>Bootstrap</span>
          </div>

        </div>

      </div>
    </>
  )
}

export default Frameworks
