import React from 'react'

const Section = (props) => {
  return (
    <>
      <div className={"px-5 xl:px-[100px] pt-20" + props.classList}>
        {props.children}
      </div>
    </>
  )
}

export default Section
