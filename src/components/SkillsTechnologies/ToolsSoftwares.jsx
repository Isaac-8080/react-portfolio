import React from 'react'

const ToolsSoftwares = () => {
  return (
    <>
      <div className="w-fit">

        <h4 className="text-primaryColor font-bold" data-aos="zoom-in-out" data-aos-duration="1000">Tools and Softwares</h4>
        <div className="cursor-pointer drop-shadow-md">

          <div className="my-3 flex flex-row items-center gap-1">
            <img src="./icons/daisyui.png" className="w-7" alt="git logo" rcset="" />
            <span>Daisy UI</span>
          </div>

          {/* <div className="my-3 flex flex-row items-center gap-1">
            <img src="./icons/icons8-git-48.png" className="w-7" alt="git logo" rcset="" />
            <span>Material Tailwind</span>
          </div> */}

          <div className="my-3 flex flex-row items-center gap-1">
            <img src="./icons/icons8-git-48.png" className="w-7" alt="git logo" rcset="" />
            <span>Git</span>
          </div>
          
          <div className="my-3 flex flex-row items-center gap-1">
            <img src="./icons/icons8-github-48.png" className="w-7" alt="github logo" rcset="" />
            <span>Github</span>
          </div>

          <div className="my-3 flex flex-row items-center gap-1">
            <img src="./icons/icons8-vs-code-48.png" className="w-7" alt="vs code logo" rcset="" />
            <span>Visual Studio Code</span>
          </div>

        </div>

      </div>
    </>
  )
}

export default ToolsSoftwares
