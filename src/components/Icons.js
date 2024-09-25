import React from 'react';
import icons from '../assets/icons'; // Import the icon map

export default function Icons({ iconName, alt, className }) {
  const iconSrc = icons[iconName]; // Dynamically select the image

  console.log('Icon source:', iconSrc); // Debugging: Ensure the iconSrc is not undefined

  if (!iconSrc) {
    console.error(`Icon '${iconName}' not found in the icons map.`);
    return null; // Optionally return null if the icon isn't found
  }

  return (
    
      <img src={iconSrc} className={className} alt={alt} />
    
  );
}
