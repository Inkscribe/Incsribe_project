import React from 'react'
import './contact.css'
const contact = () => {
  const handleChatRedirect = () => {
    window.open("http://localhost:3001/start-chat", "_blank");
};
  return (
    <section className="hero_section">
        <div className="hero_box container">
           <p className='hero_box_paragraph' data-aos="fade-zoomIn">HOME / PAGE / <span>CONTACT US</span></p>
            <h1 className='hero_header-1'data-aos="fade-zoomIn">Reach us instantly on WhatsApp <br /> for support!
            </h1>
            <p className='classes_paragraph'data-aos="fade-zoomIn" >Learn how to communicate effectively in the workplace.</p>
            <div className="banner_box">
            </div>
        </div>
        <div className="hero_box_button">
        <a className='contact_a'  target="_blank" rel="noopener noreferrer">
        <button className='contact_button'onClick={handleChatRedirect}>
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
            alt="WhatsApp Logo"
            className='contact_image'
          />
          Chat with Us on WhatsApp
        </button>
      </a>
        </div>
    </section>
  )
}

export default contact
