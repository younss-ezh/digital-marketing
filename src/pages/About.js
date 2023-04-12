import React from 'react';
import { FaTrophy, FaChartLine, FaLightbulb } from 'react-icons/fa'
import img from "./images/img.png"
import "./css/about.css"

export function About() {
  return (
    <div className="about-us-page">
      <main>
        <h1>About Us</h1>
        <p>We are a digital marketing agency that helps businesses grow online.</p>
        <p>creativity time helps companies of all sizes and stages of development (from start-ups to well-established corporations) achieve sustainable growth by aligning technology with sales and marketing strategies</p>
        <p>Our team of experts provides a range of services including search engine optimization (SEO), pay-per-click (PPC) advertising, social media marketing, and content creation.</p>
        <p>With our data-driven approach and focus on ROI, we deliver measurable results that help our clients achieve their business goals.</p>
        
        
      </main>
      <div className='about'>
        <p>creativity time helps compa-nies of all sizes and stages of development (from start-ups to well-established corpora-tions) achieve sustainable growth by aligning technology with sales and marketing strat-egies</p>
        <img src={img} alt="img" />
      </div>

      <div className='container d-flex justify-content-evenly mt-3'>
        <div style={{width: '200px'}}>
          <FaChartLine size={60} className='text-warning' />
          <h3 className='text-secondary'>MARKET</h3>
          <p>tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco .</p>
        </div>
        <div style={{width: '200px'}}>
          <FaLightbulb size={60} className='text-warning' />
          <h3 className='text-secondary'>IDEA</h3>
          <p>tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ul-lamco .</p>
        </div>
        <div style={{width: '200px'}}>
          <FaTrophy size={60} className='text-warning' />
          <h3 className='text-secondary'>SUCCESS</h3>
          <p>tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ul-lamco .</p>
        </div>
      </div>
    </div>
  );
}
