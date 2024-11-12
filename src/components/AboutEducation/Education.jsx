import React from 'react'
import EducationItem from './EducationItem'

const Education = () => {
  return (
    <>
      {/* <!-- Education container --> */}
      <div className="">

        <h4 className="text-primaryColor font-bold" data-aos="zoom-in-out" data-aos-duration="1000">Education</h4>

        <EducationItem 
        website="https://codetraingh.com/" 
        company="Codetrain Africa"
        course="Software Engineering Bootcamp" 
        calendar="calendar_month" 
        date="May 2024 — Present"
        className="text-primaryColor font-medium"
        />

        <EducationItem 
        website="#" 
        company="Codecademy"
        course="JavaScript | CSS | HTML" 
        calendar="calendar_month" 
        date="May 2024 — Present"
        className="font-medium"
        />
        
        <EducationItem 
        website="#" 
        company="W3Schools"
        course="JavaScript | Bootstrap CSS | CSS | HTML" 
        calendar="calendar_month" 
        date="Feb 2020 — Present"
        className="font-medium"
        />
        
        <EducationItem 
        website="#" 
        company="SoloLearn"
        course="JavaScript | CSS | HTML" 
        calendar="calendar_month" 
        date="Aug 2019 — Present"
        className="font-medium"
        />

      </div>
    </>
  )
}

export default Education
