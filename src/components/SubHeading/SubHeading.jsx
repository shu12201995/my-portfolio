import React from 'react';

import image from '../../constant/Image';

const SubHeading = ({ title }) => (
  <div style={{ marginBottom: '1rem' }}>
    <p className="p__cormorant">{title}</p>
    <img src={image.Spoon} alt="spoon_image" className="spoon__img" />
  </div>
);

export default SubHeading;