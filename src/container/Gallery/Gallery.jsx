import React from 'react';
import { BsInstagram, BsArrowLeftShort, BsArrowRightShort } from 'react-icons/bs';

import { SubHeading } from '../../components';
import image from '../../constant/Image';
import './Gallery.css';

const Gallery = () => {
  const scrollRef = React.useRef(null);


  return (
    <div className="app__gallery flex__center">
      <div className="app__gallery-content">
        <SubHeading title="Instagram" />
        <h1 className="headtext__cormorant">Photo Gallery</h1>
        <p className="p__opensans" style={{ color: '#AAAAAA', marginTop: '2rem' }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Volutpat mattis ipsum turpis elit elit scelerisque egestas mu.</p>
        <button type="button" className="custom__button">View More</button>
      </div>
      <div className="app__gallery-images">
      
     
              <img src={image.gallery} alt="gallery_image" />
              <BsInstagram className="gallery__image-icon" />
              <BsArrowLeftShort className="gallery__image-icon" />
              <BsArrowRightShort className="gallery__image-icon" />
            </div>
       
        
      </div>
  );
};

export default Gallery;