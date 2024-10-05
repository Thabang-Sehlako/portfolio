import React from 'react';
import PropTypes from 'prop-types';
import './Gallery.css'



const Images = (props) => {
  const { data, onClick } = props;

  const handleImageClick =(index)=>{
      onClick(index)
  }

  return (
    <div className="images-container">
      {data.map((slide, index) => (
        <div key={index}onClick={()=>handleImageClick(index)}  className='image'>
          <img src={slide.src} alt={slide.description} />
        </div>
      ))}
    </div>
  );
};

Images.propTypes = {
    data: PropTypes.arrayOf(
          PropTypes.shape({
                              src: PropTypes.string.isRequired,
                              title: PropTypes.string.isRequired,
                              description: PropTypes.string.isRequired,
      })
    ).isRequired,
    onClick: PropTypes.func.isRequired,
  };

export default Images;

