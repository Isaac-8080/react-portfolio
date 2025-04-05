import React from 'react'

const ReviewItem = (props) => {
  return (
    <>
      <div className="flex-none w-[400px] h-[230px] md:h-[250px] p-4 rounded-lg border border-gray-700 shadow text-[#FFFFFF] md:shadow-2xl">
        <div className='flex flex-col gap-2'>
          <div className='flex flex-row gap-3 items-center'>
            <img src={props.image} className='w-16 h-16 bg-white rounded-full' />
            <div>
              <p className='ml-5 font-bold'>{props.name}</p>
              <p className='opacity-70'>{'— ' + props.profession}</p>
            </div>
          </div>
          <span className='italic opacity-85'>{props.text}</span>
        </div>
      </div> 
    </>
  )
}

export default ReviewItem
