import React from 'react'

const EducationItem = (props) => {
  return (
    <>
      <div className="flex flex-col justify-center rounded-2xl drop-shadow-md" data-aos="zoom-in-out" data-aos-duration="1600">

        <p className="my-3">
          <a href={props.website} className={props.className} target="_blank">{props.company}</a>
          <span className="text-[14px]"> — {props.course}</span>
        </p>
        <div className="flex flex-row items-center gap-1">
          <span className="material-symbols-rounded text-primaryColor text-[16px]">{props.calendar}</span>
          <p className="text-[14px] text-primaryColor">{props.date}</p>
        </div>

      </div>
    </>
  )
}

export default EducationItem
