import React from 'react'
import './footer.css'
import Logo from './assets/png/logo.png';

const footer = () => {
  return (
    <>
    <footer data-aos="fade-zoomIn">
        <div className='footer_row'>
             <div className="col">
                <div className="footer_image">
                    <h1 >INKSCRIBE</h1>
                    <p>WRTING & EDUCATION</p>
                </div>
                <p className='footer_paragraph'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.
                </p>
             </div>
             <div className="col">
                <h3 >Office <div className="underline"><span className="footer_span"></span></div></h3>
                <p>ITPL Road</p>
                <p>Whitefield, Banglore</p>
                <p>karnataka, PIN 8768767, British</p>
                <p className='footer_email'>justName@gmail.com</p>
                <h4>+783743847</h4>
             </div>
             <div className="col">
             <h3>Office  <div className="underline"><span className="footer_span"></span></div></h3>
                <ul className="foter_ul">
                    <li className="footer_list"><a className='footer_a' href="#">Home</a></li>
                    <li className="footer_list"><a className='footer_a' href="#">Services</a></li>
                    <li className="footer_list"><a className='footer_a' href="#">About Us</a></li>
                    <li className="footer_list"><a className='footer_a' href="#">Features</a></li>
                    <li className="footer_list"><a className='footer_a' href="#">Contacts</a></li>
                </ul>
             </div>
             <div className="col">
             <h3>Newsletter  <div className="underline"><span className="footer_span"></span></div></h3>
               <form className='footer_form'>
                <i className='far fa-envelope'></i>
                <input className='footer_input' type="email" placeholder='Enter your email' required/>
                <button className='footer_button' type='submit'><i className='fas fa-arrow-right'></i></button>
               </form>
               <div className="social_icons">
                  <i className="fab fa-facebook-f"></i>
                  <i className="fab fa-instagram"></i>
                  <i className="fab fa-twitter"></i>
                  <i className="fab fa-whatsapp"></i>
               </div>
             </div>
        </div>
        <div className="hr"></div>
        <div className="footer_container">
        <p className='footer_bottom'>Inkscribe @ 2024 - All Rights Reserved</p>
        <p className='footer_bottom'>Made with love by <span className="footer_container_span">Symon Falcatan</span></p>
        </div>
    </footer>
    </>
  )
}

export default footer
