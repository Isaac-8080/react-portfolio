import React from 'react'

const Deployments = () => {
  return (
    <>
      <div className="w-fit">

        <h4 className="text-primaryColor font-bold" data-aos="zoom-in-out" data-aos-duration="1000">Deployments</h4>
        <div className="cursor-pointer drop-shadow-md">

          <div className="my-3 flex flex-row items-center gap-1">
            <img src="./icons/icons8-triangle-64.png" className="w-7 -rotate-90" alt="vercel logo" rcset="" />
            <span>Vercel</span>
          </div>
          
          <div className="my-3 flex flex-row items-center gap-1">
            <img src="./icons/icons8-github-48.png" className="w-7" alt="github logo" rcset="" />
            <span>Github Pages</span>
          </div>

          {/* <!-- <div className="my-3 flex flex-row items-center gap-1">
            <img src="./icons/icons8-vs-code-48.png" className="w-7" alt="vs code logo" rcset="">
            <span>Netlify</span>
          </div> --> */}

        </div>

      </div>
    </>
  )
}

export default Deployments
