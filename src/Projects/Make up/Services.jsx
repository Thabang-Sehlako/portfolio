import React from 'react';
import Image from './Pictures/8.jpeg';
import Image2 from './Pictures/7.jpeg';
import Image3 from './Pictures/6.jpeg';

const Services = () => {
  return (
    <div id='services' className="services bg-light p-5 pb-1">
      <h2 className="text-center mb-5">Makeup Services</h2>
      <div className="row justify-content-center">
        <div className="col-md-4 mb-5">
          <div className="service-item text-center border border-secondary rounded p-3" style={{backgroundColor: 'rgba(255, 255, 255, 0.1)', height: '400px'}}>
            <img src={Image} alt="Bridal Makeup" className="mb-3" style={{ width: '98%', height: '200px', objectFit: 'cover' }} />
            <i className="fas fa-heart fa-2x mb-3"></i>
            <h3>Bridal Makeup</h3>
            <p className="text-center" style={{ width: '98%' }}>Expert bridal makeup services to make your special day unforgettable.</p>
            <div className="overlay d-flex justify-content-center align-items-center"></div>
          </div>
        </div>
        <div className="col-md-4 mb-5">
          <div className="service-item text-center border border-secondary rounded p-3" style={{backgroundColor: 'rgba(255, 255, 255, 0.1)', height: '400px'}}>
            <img src={Image2} alt="Party Makeup" className="mb-3" style={{ width: '98%', height: '200px', objectFit: 'cover' }} />
            <i className="fas fa-star fa-2x mb-3"></i>
            <h3>Party Makeup</h3>
            <p className="text-center" style={{ width: '98%' }}>Get ready to party with our stunning makeup looks for any occasion.</p>
            <div className="overlay d-flex justify-content-center align-items-center"></div>
          </div>
        </div>
        <div className="col-md-4 mb-5">
          <div className="service-item text-center border border-secondary rounded p-3" style={{backgroundColor: 'rgba(255, 255, 255, 0.1)', height: '400px'}}>
            <img src={Image3} alt="Makeup Lessons" className="mb-3" style={{ width: '98%', height: '200px', objectFit: 'cover' }} />
            <i className="fas fa-book fa-2x mb-3"></i>
            <h3>Makeup Lessons</h3>
            <p className="text-center" style={{ width: '98%' }}>Learn the art of makeup with our personalized lessons and workshops.</p>
            <div className="overlay d-flex justify-content-center align-items-center"></div>
          </div>
        </div>
      </div>
      <style>
        {`
          .service-item:hover {
            transform: scale(1.05);
            box-shadow: 0 0 10px rgba(255, 255, 255, 0.5);
            transition: all 0.3s ease-in-out;
          }
          .service-item:hover .overlay {
            opacity: 1;
          }
          .overlay {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background-color: rgba(0, 0, 0, 0.5);
            opacity: 0;
            transition: opacity 0.3s ease-in-out;
            cursor:pointer
          }
        `}
      </style>
    </div>
  );
};

export default Services;
