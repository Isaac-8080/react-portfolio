import React from 'react'
import About from './About'
import Education from './Education'
import Section from '../Section'

const AboutEducation = () => {
  return (
    <>
      <span id="about" className=""></span>
      <Section classList="">

        <div className="flex flex-row items-center gap-2" data-aos="zoom-in-out" data-aos-duration="1000">
          <span className="material-symbols-rounded text-primaryColor font-black text-3xl">
            school
          </span>
          <h3 className="font-black text-3xl">About | Education</h3>
        </div>

        <div className="mt-5 mb-10 grid grid-cols-1 md:grid-cols-2 gap-10">

          <About />
          <Education />

        </div>

      </Section>
    </>
  )
}

export default AboutEducation
