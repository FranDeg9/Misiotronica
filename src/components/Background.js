import React from 'react';
import backgroundImg from './misiotronicafondo.jpg'; 


const Background = () => {
  return (
    <div
      style={{
        backgroundImage: `url(${backgroundImg})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center center',
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: -1,
        opacity: 1,
      }}
    />
  );
};

export default Background;
