import React from 'react'
import ReviewItem from './ReviewItem'
import Section from '../Section'

const Review = () => {
  return (
    <>
      <Section>
        <div className="flex flex-row items-center gap-2" data-aos="zoom-in-out" data-aos-duration="1000">
          <span className="material-symbols-rounded text-primaryColor font-black text-3xl">
            format_quote
          </span>
          <h3 className="font-black text-3xl">Reviews</h3>
        </div>

        <div className="carousel flex flex-row overflow-x-auto scrollbar-hidden items-center gap-3 mt-5">
          <ReviewItem />
          <ReviewItem />
          <ReviewItem />
        </div>

        {/* <div className="flex flex-row items-center justify-center gap-3 text-red-500">
          &LeftArrow;
          <p className="text-center text-red-500 font-bold">Scrollable</p>
        </div> */}
      </Section>
    </>
  )
}

export default Review
