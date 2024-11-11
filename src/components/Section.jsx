import React from 'react'

const Section = (props) => {
  return (
    <>
      <div className={"px-5 lg:px-[150px] mt-[100px] scroll-mt-10" + props.classList}>
        {props.children}
      </div>
    </>
  )
}

export default Section
