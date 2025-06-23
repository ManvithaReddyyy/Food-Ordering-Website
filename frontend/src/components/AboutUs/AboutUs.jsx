import React from 'react';
import './AboutUs.css';
import AboutUsVideo from '../../assets/AboutUs.mp4';

const AboutUs = () => {
  return (
    <section className='about-section' id='about-us'>
      <h2 className='clean-heading'>About Us</h2>

      <div className='about-content'>
        <div className='about-video-wrapper'>
          <div className='about-video-box'>
            <video src={AboutUsVideo} autoPlay loop muted />
          </div>
        </div>

        <div className='about-text'>
          <h3 className='sub-heading'>Why Choose Us?</h3>
          <p>
            At MARK chain of restaurents, we celebrate the art of dining with dishes crafted from the finest ingredients,
            designed to tantalize your taste buds and honor our commitment to quality and authenticity. Whether
            you're here for a romantic evening, a family get-together, or a casual lunch with friends, our aim is
            to offer unmatched service.
          </p>
          <p>
            Located in the heart of Hyderabad, we specialize in South Indian cuisines crafted with the freshest
            local ingredients. 
          </p>
          <a href="#reviews" className="learn-more-btn">Learn More</a>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
