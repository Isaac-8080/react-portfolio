import React from 'react'

const Languages = () => {
  return (
    <>
      {/* <!-- Programming Languages container --> */}
      <div className="w-fit">

        <h4 className="text-primaryColor font-bold" data-aos="zoom-in-out" data-aos-duration="1000">Languages</h4>
        <div className="flex flex-row items-center rounded-2xl cursor-pointer drop-shadow-md">

          <div className="my-2 flex flex-row items-center gap-1">
            <img src="./icons/icons8-javascript-48.png" className="w-7" alt="JavaScript logo" rcset="" />
            <span>JavaScript</span>
          </div>

        </div>

        <div className="flex flex-row items-center rounded-2xl cursor-pointer drop-shadow-md">

          <div className="my-2 flex flex-row items-center gap-1">
            <img src="./icons/icons8-css-48.png" className="w-7" alt="css logo" rcset="" />
            <span>CSS</span>
          </div>

        </div>

        <div className="flex flex-row items-center rounded-2xl cursor-pointer drop-shadow-md">

          <div className="my-2 flex flex-row items-center gap-1">
            <img src="./icons/icons8-html-48.png" className="w-7" alt="html logo" rcset="" />
            <span>HTML</span>
          </div>

        </div>

      </div>
    </>
  )
}

export default Languages
