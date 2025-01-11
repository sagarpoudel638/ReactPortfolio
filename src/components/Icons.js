import React from 'react';
import icons from '../assets/icons'; // Import the icon map

export default function Icons({ iconName, alt, className }) {
  const iconSrc = icons[iconName]; 

  console.log('Icon source:', iconSrc); 

  if (!iconSrc) {
    console.error(`Icon '${iconName}' not found in the icons map.`);
    return null; 
  }

  return (
    
      <img src={iconSrc} className={className} alt={alt} />
    
  );
}
