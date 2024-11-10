import React from 'react'

const ProjectItem = (props) => {
  return (
    <>
      <div className="w-fit rounded-xl shadow-md" data-aos="zoom-in-out" data-aos-duration="1000">

        <div className="cursor-pointer w-fit">
          
          <img src={props.image} className="w-[100%] rounded-t-xl" alt="project-img" />
          
        </div>

        {/* <!-- project name --> */}
        <h4 className="mt-3 text-primaryColor font-bold w-fit m-1 px-2">{props.name}</h4>

        {/* <!-- project description --> */}
        <div>
          <p className="font-medium text-[14px] m-1 px-2">
            {props.detail}
          </p>
        </div>
          
        {/* <!-- projects technologies div --> */}
        <div className="flex flex-col justify-center m-1 px-2">
          <div className="flex flex-row flex-wrap items-center gap-2 mt-1">

            <div className="flex flex-row items-center gap-1">
              <img src={props.js} className="w-5" alt="JavaScript icon" />
              <p className="w-fit text-[10px] font-bold">{props.jsText}</p>
            </div>
            
            <div className="flex flex-row items-center gap-1">
              <img src={props.tailwind} className="w-5" alt="tailwind css icon" />
              <p className="w-fit text-[10px] font-bold">{props.tailwindText}</p>
            </div>
            
            <div className="flex flex-row items-center gap-1">
              <img src={props.css} className="w-5" alt="css icon" />
              <p className="w-fit text-[10px] font-bold">{props.cssText}</p>
            </div>
            
            <div className="flex flex-row items-center gap-1">
              <img src={props.html} className="w-5" alt="css icon" />
              <p className="w-fit text-[10px] font-bold">{props.htmlText}</p>
            </div>

          </div>

          <hr className="mt-2 mb-1 w-[150px]" />

          <div className="flex flex-row items-center justify-between">
            
            <p className="flex flex-row items-center gap-1 text-primaryColor font-bold text-[14px]">
              <span className="material-symbols-rounded font-black text-lg">line_end_arrow_notch</span>
              <a>Private Repo</a> | <a href={props.demoLink} target="_blank" className="hover:bg-[lightgray] p-1 rounded">Demo</a>
            </p>

          </div>

        </div>

      </div>
    </>
  )
}

export default ProjectItem
