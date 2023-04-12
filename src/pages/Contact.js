import React from 'react';
import { Link } from 'react-router-dom';
import { FaPhone, FaGlobe, FaMapMarkerAlt, FaMailBulk } from 'react-icons/fa';
import "./css/contact.css" ;

export function Contact() {
  return (
    <div className="contact-page">
      <main>
        <section className="contact-section">
          <h1>Contact Us</h1>
          <p>Have a question or want to learn more about our services? Fill out the form below and we'll get back to you as soon as possible.</p>
          <form>
            <label htmlFor="name">Name:</label>
            <input type="text" id="name" name="name" required />
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" required />
            <label htmlFor="message">Message:</label>
            <textarea id="message" name="message" rows="5" required></textarea>
            <button type="submit">Submit</button>
          </form>
        </section>
        <section className='contact-part'>
          <div className='d-flex justify-content-center'>
            <FaPhone size={32} className='text-warning' />
            <h2>+212 634745299</h2>
          </div>

          <b>Our Contact</b>

          <div className='d-flex mt-3'>
            <FaMapMarkerAlt size={22} />
            <p className='text-warning'>mediouna N’22 Rue 132 Casablanca </p>
          </div>
            
            <div className='d-flex'>
              <FaMailBulk size={22} />
              <p className='text-warning'>zziko5041@gmail.com</p>
            </div>

            <div className='d-flex'>
              <FaGlobe size={22} />
              <p><Link to="https://www.behance.net/zakariaziko2" className='text-warning' target='_blank'>https://www.behance.net/zakariaziko2</Link></p>
            </div>
          </section>
      </main>
    </div>
  );
}
