import React from 'react'
import './hero.css'
import '../../../index.css'
import Heading from '../../navigation/heading/Heading'
const hero = () => {
  return (
    <>
      <section className='hero' >
        <div className='container hero_container'>
          <div className='row'>
            <Heading  subtitle='WELCOME TO INKSCRIBE' title='Unlock Your Academic and Professional Potential with InkScribe.' />
            <p data-aos="fade-zoomIn">Our expert writers and tutors are dedicated to your success. Whether you're a student striving for excellence or a professional seeking growth, we provide the guidance and tools you need to achieve your goals.</p>
            <div className='button' data-aos="fade-zoomIn">
              <button className='primary-btn '>
                GET STARTED NOW <i className='fa fa-long-arrow-alt-right'></i>
              </button>
              <button className='hero_button'>
                VIEW CLASSES <i className='fa fa-long-arrow-alt-right'></i>
              </button>
            </div>
          </div>
        </div>
        
      </section>
      
    </>
  )
}

export default hero
