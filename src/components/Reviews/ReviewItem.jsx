import React from 'react'

const ReviewItem = (props) => {
  return (
    <>
      {/* <div> */}

      <div className="flex-none w-[400px] h-[250px] my-auto p-4 rounded-lg bg-secondaryColor text-[#FFFFFF] md:shadow-2xl">
        <div className='flex flex-col gap-2'>
          <div className='flex flex-row gap-3 items-center'>
            <img src={props.image} className='w-16 h-fit bg-white rounded-full' />
            <div>
              <p className='ml-5 font-bold'>{props.name}</p>
              <p className=''>{'— ' + props.profession}</p>
            </div>
          </div>
          <span className='italic pl-3'>{props.text}</span>
        </div>
      </div>
      {/* </div> */}
        
    </>
  )
}

export default ReviewItem
