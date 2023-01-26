import React from 'react';

import { SubHeading } from '../../components';
import  image from '../../constant/Image';
import './Laurels.css';

const Laurels = () => (
  <div className="app__bg app__wrapper section__padding" id="awards">
   <div className=".app__laurels_awards-card">
    <div>
    <img src={image.top} alt="app top "/>
    </div>
    </div>
    <div>
      <img src={image.bottom} alt="app_bottom"/>
    </div>
    <div className="app__wrapper_info">
      <SubHeading title="Awards & recognition" />
      <h1 className="headtext__cormorant">Our Laurels</h1>

    </div>

    <div className="app__wrapper_img">
      <img src={image.laurels} alt="laurels_img" />
    </div>
  </div>
);

export default Laurels;