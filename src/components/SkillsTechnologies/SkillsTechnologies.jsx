import React from 'react'
import Section from '../Section'
import Skills from './Skills'

const SkillsTechnologies = () => {
  return (
    <>
        <span id="skills" className=""></span>
      <Section classList="">
        <div className="flex flex-row items-center gap-2" data-aos="zoom-in-out" data-aos-duration="1000">
          <span className="material-symbols-rounded text-primaryColor font-black text-3xl">
            sync_alt
          </span>
          <h3 className="font-black text-3xl">Skills | Technologies</h3>
        </div>

        <div className="">
          <Skills />
        </div>

      </Section>
    </>
  )
}

export default SkillsTechnologies
