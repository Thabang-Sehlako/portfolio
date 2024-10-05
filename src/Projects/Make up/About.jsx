import React from 'react';
import about from './Pictures/2.jpeg'; // Update the image


const About = () => {
  return (
    <div id='about' className="container-fluid pt-5 bg-light d-flex justify-content-center align-items-center text-black" style={{ minHeight: '100vh' }}>
      <div className="row mx-auto" style={{ maxWidth: '80rem' }}>
        <div className="col-12 text-center mb-5">
          <h2 className='display-4 fs-2'>"Enhancing beauty, one look at a time"</h2> 
        </div>
        <div className="col-lg-6 mb-4 mb-lg-0 text-center">
          <img src={about} alt="Makeup Artist" className="img-fluid rounded shadow" style={{ width: 'auto', height: '30rem' }} />
        </div>
        <div className="col-lg-6 text-center" style={{ padding: '0 2rem' }}>
          <p className="lead" style={{width:'98%'}}>Hi, I'm Emma , a professional makeup artist dedicated to helping you look and feel your best.</p>
          <p className="fst-italic" style={{width:'98%'}}>With a passion for makeup and beauty, I offer a range of services from natural everyday looks to glamurous evening styles.</p>
          <p className="fw-bold" style={{width:'98%'}}>I'm committed to providing exceptional service and using only high-quality products to ensure you receive the best results.</p>
          <p>I specialize in creating customized makeup looks for special occasions, events, and everyday wear.</p>
          <p>When I'm not working with clients, you can find me on social media sharing my makeup expertise and inspiring others to embrace their natural beauty.</p>
          <p>I'm grateful for the opportunity to make a positive impact in the lives of my clients and help them feel confident and beautiful.</p>
        </div>
      </div>
    </div>
  );
};

export default About;
