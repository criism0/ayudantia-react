import React from 'react';

const Tarjeta = ({ imageSrc, altText, caption }) => {
  return (
    <div style={{ textAlign: 'center', marginTop: '20px' }}>
      <img src={imageSrc} alt={altText} style={{ maxWidth: '100%', height: 'auto' }} />
      <p style={{ marginTop: '10px', fontSize: '16px' }}>{caption}</p>
    </div>
  );
};

export default Tarjeta;



