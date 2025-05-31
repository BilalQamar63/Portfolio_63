// components/ConfettiPieces.jsx
import React, { useEffect, useState } from 'react';
import '../styles/Confetti.css';

const ConfettiPieces = () => {
  const [pieces, setPieces] = useState([]);

  useEffect(() => {
    const confetti = Array.from({ length: 100 }).map((_, i) => ({
      id: i,
      left: Math.random() * 100,
      animationDuration: `${2 + Math.random() * 3}s`,
      size: `${6 + Math.random() * 6}px`,
      backgroundColor: `hsl(${Math.random() * 360}, 100%, 60%)`,
    }));
    setPieces(confetti);
  }, []);

  return (
    <div className="confetti-wrapper">
      {pieces.map((piece) => (
        <div
          key={piece.id}
          className="confetti-piece"
          style={{
            left: `${piece.left}%`,
            animationDuration: piece.animationDuration,
            width: piece.size,
            height: piece.size,
            backgroundColor: piece.backgroundColor,
          }}
        />
      ))}
    </div>
  );
};

export default ConfettiPieces;
