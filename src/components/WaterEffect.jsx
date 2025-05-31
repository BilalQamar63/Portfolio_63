// components/WaterEffect.jsx
import React from 'react';
import '../styles/WaterEffect.css';

const WaterEffect = () => {
  // 9 drops for 3x3 grid
  return (
    <div className="rain-bg">
      {Array.from({ length: 9 }).map((_, index) => (
        <div className="rain" key={index}>
          <div className="drop"></div>
          <div className="waves">
            <div></div>
            <div></div>
          </div>
          <div className="splash"></div>
          <div className="particles">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default WaterEffect;
