import React from 'react'
import './classes.css'

const classes = () => {
  return (
    <>
    <section className="pricing_section">
     <h3 className='h-3_title'data-aos="fade-zoomIn" >Pricing Plan</h3>
     <h2 className='services_paragraph'data-aos="fade-zoomIn">Find the best way for you 
    </h2>
      <div className="wrapper" data-aos="fade-zoomIn">
        <div className="card " >
            <h3>Beginners </h3>
            <h1>$25 <span>/Starts</span></h1>
            <p>For Most Buisness that want to optimize their web queries.</p>
            <ul>
            <li><i id='fontawesome' className="ri-checkbox-fill"></i>One-on-one lesson <br />  ( $25 CAD ) </li>
            <li><i id='fontawesome' className="ri-checkbox-fill"></i>Classes with 5 students ( $15 CAD )</li>
            <li><i id='fontawesome' className="ri-checkbox-fill"></i>Classes with 10+ students ( $8 CAD )</li>
            </ul>
            <a href="/">Choose Plan</a>

        </div>
        <div className="card ">
            <h3>Intermediate </h3>
            <h1>$50 <span>/Starts</span></h1>
            <p>For Most Buisness that want to optimize their web queries.</p>
            <ul>
            <li><i id='fontawesome' className="ri-checkbox-fill"></i>One-on-one lesson <br />  ( $25 CAD ) </li>
            <li><i id='fontawesome' className="ri-checkbox-fill"></i>Classes with 5 students ( $15 CAD )</li>
            <li><i id='fontawesome' className="ri-checkbox-fill"></i>Classes with 10+ students ( $8 CAD )</li>
            </ul>
            <a href="/">Choose Plan</a>

        </div>


        <div className="card">
            <h3>Advanced</h3>
            <h1>$40 <span>/Starts</span></h1>
            <p>For Most Buisness that want to optimize their web queries.</p>
            <ul>
            <li><i id='fontawesome' className="ri-checkbox-fill"></i>One-on-one lesson <br />  ( $25 CAD ) </li>
            <li><i id='fontawesome' className="ri-checkbox-fill"></i>Classes with 5 students ( $15 CAD )</li>
            <li><i id='fontawesome' className="ri-checkbox-fill"></i>Classes with 10+ students ( $8 CAD )</li>
            </ul>
            <a href="/">Choose Plan</a>

        </div>
    </div>
    </section>
    </>
  )
}

export default classes
