import React from 'react';
import LipGlossImage from '../assets/Gallery/p1.jpg';
import GlowSerumImage from '../assets/Gallery/p2.jpg';
import FoamPumpCleanerImage from '../assets/Gallery/p3.jpg';
import Footer from './Footer';

const Products = () => {
  return (
    <>
      <div id='products' className="products bg-light p-5 pb-1">
        <h2 className="text-center mb-5">Our Products</h2>
        <div className="row justify-content-center">
          <div className="col-md-4 mb-5">
            <div className="product-item text-center border border-secondary rounded p-3" style={{backgroundColor: 'rgba(255, 255, 255, 0.1)'}}>
              <img src={LipGlossImage} alt="Lip Gloss" className="mb-3" style={{ width: '98%' }} />
              <h3>Lip Gloss</h3>
              <p className="text-center" style={{ width: '98%' }}>Indulge in our nourishing lip gloss, infused with coconut oil and vitamin E to hydrate and moisturize your lips, leaving them soft and luscious.</p>
            </div>
          </div>
          <div className="col-md-4 mb-5">
            <div className="product-item text-center border border-secondary rounded p-3" style={{backgroundColor: 'rgba(255, 255, 255, 0.1)'}}>
              <img src={GlowSerumImage} alt="Glow Serum" className="mb-3" style={{ width: '98%' }} />
              <h3>Glow Serum</h3>
              <p className="text-center" style={{ width: '98%' }}>Unlock your radiant glow with our potent serum, featuring a blend of vitamin C, niacinamide, and hyaluronic acid to brighten, smooth, and plump your skin.</p>
            </div>
          </div>
          <div className="col-md-4 mb-5">
            <div className="product-item text-center border border-secondary rounded p-3" style={{backgroundColor: 'rgba(255, 255, 255, 0.1)'}}>
              <img src={FoamPumpCleanerImage} alt="Foam Pump Cleaner" className="mb-3" style={{ width: '98%' }} />
              <h3>Foam Pump Cleaner</h3>
              <p className="text-center" style={{ width: '98%' }}>Keep your foam pumps clean and clog-free with our gentle yet effective cleaner. Specifically designed to remove soap scum and mineral deposits, our Foam Pump Cleaner ensures a smooth and consistent foam experience.</p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Products;