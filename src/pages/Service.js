import React from 'react';
import home from "./images/home.png"
import img1 from "./images/img1.png"
import img2 from "./images/img2.png"
import "./css/services.css"


export function Service() {

  return (
    <div className="service-page">
        <section className='service-card first'>
          <h1>Our Services</h1>
          <p>At My Digital Marketing Agency, we offer a wide range of digital marketing services to help your business succeed online. Here are some of the services we provide:</p>
        </section>
    <div className='main'>
      {/* <main className='d-flex justify-content-between'> */}
        <section className='service-card'>
            <h2>Search Engine Optimization (SEO)</h2>
            <p>We can help improve your website's visibility and rankings on search engines like Google and Bing through keyword research, on-page optimization, and link building strategies.</p>
        </section>

        <section className='service-card'>
            <h2>Pay-Per-Click (PPC) Advertising</h2>
            <p>We can create and manage effective PPC campaigns on platforms like Google Ads and Facebook Ads to drive targeted traffic to your website and increase conversions.</p>
        </section>

        <section className='service-card'>
           <h2>Social Media Marketing</h2>
           <p>We can help you build and maintain a strong social media presence through content creation, community management, and advertising on platforms like Facebook, Instagram, and Twitter.</p>
        </section>

        <section className='service-card'>
           <h2>Email Marketing</h2>
            <p>We can help you create and execute effective email marketing campaigns to reach your target audience and drive conversions.</p>
        </section>

        <section className="service-card">
            <h2>Content Marketing</h2>
            <p>We can help you create high-quality, engaging content that resonates with your target audience and drives traffic, leads, and sales to your website.</p>
        </section>

        <section className="service-card">
            <h2>Creative</h2>
            <p>We help you build a sustainable, competitive advantage through data-driven creative that establishes brand identity, engages consumers, and drives traffic.</p>
        </section>
      {/* </main> */}
    </div>

      <section className='service-card first'>
        <h1>Why Choosing Us</h1>
        <p>Hiring a marketing agency often gives you access to tools and platforms that aren't available to you, or are too expensive for your business to purchase outright. These tools can help you better understand your data and the impact of your campaigns</p>
      </section>

      <div className='container d-flex justify-content-between align-items-center'>
        <p style={{ width: "300px" }}>Hiring a marketing agency often gives you access to tools and plat-forms that aren't available to you, or are too expensive for your busi-ness to purchase outright. These tools can help you better under-stand your data and the impact of your campaigns</p>
        <div>
          <img src={home} alt="img" width="500" className='mb-2' />
          <div>
            <img src={img1} alt="img" width="250" className='m-1' />
            <img src={img2} alt="img" width="250" />
          </div>
        </div>
      </div>
    </div>
  );
}

