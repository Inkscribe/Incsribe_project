import React from 'react'
import './booking_page.css'
import Photo_1 from './images/Photo_1.avif'
import Photo_2 from './images/Photo_2.avif'
import Photo_3 from './images/Photo_3.avif'
import Photo_4 from './images/Photo_4.avif'
import Photo_5 from './images/Photo_5.avif'
import Photo_6 from './images/Photo_6.avif'
const booking_page = () => {
  const booking = [
    {
      title: " CELPIP General Class ",
      image: Photo_1,
      price:'CA$20.00',
      route: './celpip_general_class',
      content:'The CELPIP General Class helps individuals improve English skills for everyday communication, work, and immigration through targeted practice.',
    },
    {
      title: "IELTS General Preparation",
      image: Photo_2,
      price:'CA$20.00',
      edition:" (Academic Edition)",
      content:'Designed to help individuals prepare for the IELTS Academic test, focusing on English proficiency for academic and professional purposes.',
    },
    {
      title: " IELTS General Prep Class ",
      image: Photo_3,
      price:'CA$20.00',
      edition:" (General Edition)",
      content:'The IELTS General Prep Class helps individuals improve English for everyday communication, work, and migration through focused practice and strategies.',
    },
    {
      title: " IELTS Listening & Reading Master Class ",
      image: Photo_4,
      price:'CA$20.00',
      content:'The IELTS Listening & Reading Master Class helps individuals enhance their skills in listening and reading comprehension through focused practice and strategies.',
    },
    {
      title: " IELTS Writing Master Class ",
      image: Photo_5,
      price:'CA$20.00',
      edition:" (Academic Edition)",
      content:'The IELTS Writing Master Class (Academic Edition) helps individuals improve their academic writing skills, focusing on task responses, coherence, and grammar through detailed practice and strategies.',
    },
    {
      title: " TOEFL General Class ",
      image: Photo_6,
      price:'CA$20.00',
      content:'The TOEFL General Class helps individuals improve their English skills for academic and professional purposes, focusing on all test sections—Listening, Reading, Speaking, and Writing—through targeted practice and strategies.',
    },
  ];
  return (
   <>
   <section className="booking_page_section" id='booking'>
      <div  className="booking_page_container container">
        {booking.map((item, index) => (
        <div key={index} className="booking_page_box">
          <div className="booking_page_content">
             <div className="booking_page_image_container">
              <img className='booking_image' src={item.image} alt="" />
             </div>
              <div className="booking_page_i_container">
              <i className="ri-money-dollar-circle-fill"></i>
              <span>{item.price}</span>
              </div>
              <div className="booking_content">
                <h1>{item.title}</h1>
                <span className='booking_paragraph'>{item.edition}</span>
                <p>{item.content}</p>
                <div className="booking_button">
                <a className="booking_button_a" href={item.route}>
                  NEXT
                <i className="ri-arrow-right-fill"></i>
                </a>
                </div>
              </div>
          </div>
        </div>
         ))}
      </div>
   </section>
   </>
  )
}

export default booking_page