import React from 'react';
import galleryPic1 from './Pictures/5.jpeg';
import galleryPic2 from './Pictures/1.jpeg';
import galleryPic3 from './Pictures/4.jpeg';

const Carousel = () => {
  return (
    <div id="carouselExample" className="carousel slide" style={{ height: '100vh' }}>
      <div className="carousel-inner" style={{ height: '100%' }}>
        <div className="carousel-item active" style={{ height: '100%' }}>
          <img src={galleryPic1} style={{ objectFit: 'cover', width: '100%', height: '100%' }} />
        </div>
        <div className="carousel-item" style={{ height: '100%' }}>
          <img src={galleryPic2} style={{ objectFit: 'cover', width: '100%', height: '100%' }} />
        </div>
        <div className="carousel-item" style={{ height: '100%' }}>
          <img src={galleryPic3} style={{ objectFit: 'cover', width: '100%', height: '100%' }} />
        </div>
      </div>
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExample"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExample"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
};

export default Carousel;