import React from 'react'
import Languages from './Languages'
import Frameworks from './Frameworks'
import OperatingSystems from './OperatingSystems'
import ToolsSoftwares from './ToolsSoftwares'
import Deployments from './Deployments'

const Skills = () => {
  return (
    <>

      <div className="mt-5 mb-10 grid grid-cols-1 md:grid-cols-3 gap-5">
        <Languages />
        <Frameworks />
        <OperatingSystems />
        <ToolsSoftwares />
        <Deployments />
      </div>
      
    </>
  )
}

export default Skills
