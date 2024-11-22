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

        <div className="flex flex-row overflow-x-auto scrollbar-hidden items-center gap-3 mt-5">
          <ReviewItem 
          image="./images/image1.jpeg"
          name="Isaac"
          profession="Software developer"
          text="Isaac is a talented developer who combines technical expertise with excellent communication skills. His proficiency in HTML, CSS, JavaScript, Tailwind CSS and React played a pivotal role in the success of our project." 
          />

          <ReviewItem 
          image="./images/image1.jpeg"
          name="Isaac"
          profession="Software developer"
          text="Isaac's ability to turn design concepts into functional and visually appealing interfaces was impressive. He effectively used tools like Tailwind CSS to streamline development and ensure responsive, modern designs." 
          />

          <ReviewItem 
          image="./images/image1.jpeg"
          name="Isaac"
          profession="Software developer"
          text="We’re thrilled with the results of his work and look forward to collaborating with him again. Isaac's combination of reliability, professionalism, and technical skills makes him an invaluable partner for any project." 
          />

          <ReviewItem 
          image="./images/image1.jpeg"
          name="Isaac"
          profession="Software developer"
          text="What truly sets Isaac apart is his dedication to continuous improvement and problem-solving. He approaches challenges with creativity and determination, ensuring that every solution aligns with project goals." 
          />
          
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
